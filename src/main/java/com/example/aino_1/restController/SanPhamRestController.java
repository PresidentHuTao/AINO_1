package com.example.aino_1.restController;

import com.example.aino_1.entity.SanPham;
import com.example.aino_1.serviceInter.SanPhamServiceInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@CrossOrigin("*") //cho phép tất cả các miền khác truy cập tài nguyên server (end point api)
@RestController
@RequestMapping("/rest/san_pham") //đường dẫn chung cho các phương thức http bên dưới
public class SanPhamRestController {
    @Autowired
    SanPhamServiceInter spsi;

    @GetMapping("/getAll")
    public List<SanPham> getAll() {
        return spsi.read();
    }

    private final String imageDir = "src/main/resources/static/asset/image"; //đường dẫn đến thư mục chứa hình ảnh

    @GetMapping("/getImage/{fileName:.+}")
    public ResponseEntity<Resource> getImage(@PathVariable String fileName) {
        try {
            //tạo đường dẫn đến file hình ảnh
            Path imagePath = Paths.get(imageDir).resolve(fileName).normalize();
            File imageFile = imagePath.toFile();
            //kiểm tra xem file có tồn tại không
            if (!imageFile.exists()) {
                return ResponseEntity.notFound().build();
            }
            //tạo UrlResource từ file
            Resource resource = new UrlResource(imagePath.toUri());
            //xác định loại nội dung của file hình ảnh
            String contentType = "image/jpeg"; //thay đổi nếu cần, có thể dựa trên đuôi file
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_TYPE, contentType)
                    .body(resource);
        } catch (MalformedURLException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/add")
    public SanPham create(@RequestBody SanPham sanPham) {
        return spsi.create(sanPham);
    }

    @PutMapping("/update/{id}")
    public SanPham update(@RequestBody SanPham sanPham) {
        return spsi.update(sanPham);
    }

    @DeleteMapping("/del/{id}")
    public void delete(@PathVariable Integer id) {
        spsi.delete(id);
    }
}

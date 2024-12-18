package com.example.aino_1.restController;

import com.example.aino_1.dto.SanPhamDTO;
import com.example.aino_1.entity.SanPham;
import com.example.aino_1.repository.SanPhamInterface;
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
    SanPhamInterface spsi;

    @GetMapping("/getAll")
    public List<SanPham> getAll() {
        return spsi.findAll();
    }

    @GetMapping("/getDTOADMIN")
    public  List<SanPhamDTO> AdminSanPhamDTO(){
        return spsi.findProductDetailsWithImageAndCategory();
    }

    @GetMapping("/getById/{id}")
    public SanPham getById(@PathVariable Integer id) {
        return spsi.getById(id);
    }

    @PostMapping("/add")
    public SanPham create(@RequestBody SanPham sanPham) {
        return spsi.save(sanPham);
    }

    @PutMapping("/update/{id}")
    public SanPham update(@RequestBody SanPham sanPham) {
        return spsi.save(sanPham);
    }

    @DeleteMapping("/del/{id}")
    public void delete(@PathVariable Integer id) {
        spsi.deleteById(id);
    }
}

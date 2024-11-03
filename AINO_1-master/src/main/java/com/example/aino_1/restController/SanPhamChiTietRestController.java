package com.example.aino_1.restController;

import com.example.aino_1.dto.SanPhamChiTietDto;
import com.example.aino_1.entity.SanPhamChiTiet;
import com.example.aino_1.serviceInter.SanPhamChiTietServiceInter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@CrossOrigin("*") //cho phép tất cả các miền khác truy cập tài nguyên server (end point api)
@RestController
@RequestMapping("/rest/san_pham_chi_tiet") //đường dẫn chung cho các phương thức http bên dưới
public class SanPhamChiTietRestController {
    @Autowired
    SanPhamChiTietServiceInter spctsi;

    @GetMapping("/getAll")
    public List<SanPhamChiTiet> getAll() {
        return spctsi.read();
    }

    @GetMapping("/getById/{id}")
    public SanPhamChiTiet getById(@PathVariable String id) {
        return spctsi.detail(id);
    }

    @PostMapping("/add")
    public SanPhamChiTiet create(@RequestBody SanPhamChiTiet spct) {
        return spctsi.create(spct);
    }

    @PutMapping("/update/{id}")
    public SanPhamChiTiet update(@RequestBody SanPhamChiTiet spct) {
        return spctsi.update(spct);
    }

    @DeleteMapping("/del/{id}")
    public void delete(@PathVariable String id) {
        spctsi.delete(id);
    }
    @GetMapping("/tim_kiem/{tuKhoaTimKiem}")
    public List<SanPhamChiTietDto> search(@PathVariable String tuKhoaTimKiem) {
        return spctsi.sreach(tuKhoaTimKiem);
    }
    @GetMapping("/locTheoGia/{minPrice}&{maxPrice}")
    public List<SanPhamChiTietDto> locTheoGia(@PathVariable Double minPrice,@PathVariable Double maxPrice) {
        return spctsi.locTheoGia(minPrice,maxPrice);
    }
    @GetMapping("/locTheoDungLuongRam/{dungLuongRam}")
    public List<SanPhamChiTietDto> locTheoDungLuongRam(@PathVariable Integer dungLuongRam) {
        return spctsi.locTheoDungLuongRam(dungLuongRam);
    }
    @GetMapping("/locTheoHangSanXuat/{hangSanXuat}")
    public List<SanPhamChiTietDto> locTheoHangSanXuat(@PathVariable String hangSanXuat) {
        return spctsi.locTheoHangSanXuat(hangSanXuat);
    }
    @GetMapping("/locTheoTamNen/{tamNen}")
    public List<SanPhamChiTietDto> locTheoTamNen(@PathVariable String tamNen) {
        return spctsi.locTheoTamNen(tamNen);
    }
    @GetMapping("/locTheoCongNgheCPU/{congNgheCPU}")
    public List<SanPhamChiTietDto> locTheoCongNgheCPU(@PathVariable String congNgheCPU) {
        return spctsi.locTheoCongNgheCPU(congNgheCPU);
    }
    @GetMapping("/locTheoKichThuoc/{kichThuoc}")
    public List<SanPhamChiTietDto> locTheoKichThuoc(@PathVariable Double kichThuoc) {
        return spctsi.locTheoKichThuoc(kichThuoc);
    }
}

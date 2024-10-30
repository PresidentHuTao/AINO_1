package com.example.aino_1.serviceInter;

import com.example.aino_1.entity.SanPhamChiTiet;

import java.util.List;

public interface SanPhamChiTietServiceInter {
    List<SanPhamChiTiet> read();

    SanPhamChiTiet create(SanPhamChiTiet spct);

    SanPhamChiTiet update(SanPhamChiTiet spct);

    void delete(String maDinhDanh);
    SanPhamChiTiet getById(String id); // Thêm phương thức này
}

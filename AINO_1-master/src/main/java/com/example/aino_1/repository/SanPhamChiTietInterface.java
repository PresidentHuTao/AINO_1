package com.example.aino_1.repository;

import com.example.aino_1.dto.SanPhamChiTietDto;
import com.example.aino_1.entity.SanPhamChiTiet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SanPhamChiTietInterface extends JpaRepository<SanPhamChiTiet, Integer> {
    @Query("""
        SELECT new com.example.aino_1.dto.SanPhamChiTietDto(
        spct.id,
        spct.donGia,
        spct.tenSpct,
        spct.sanPham.hangSanXuat,
        spct.sanPham.mauSac,
        spct.sanPham.gioiThieu,
        spct.ram.dungLuong,
        spct.oLuuTru.dungLuong,
        spct.manHinh.doPhanGiai,
        spct.manHinh.kichThuoc,
        spct.manHinh.tamNen,
        spct.manHinh.tanSoQuet,
        spct.cpu.soNhan,
        spct.cpu.kienTrucCongNghe,
        spct.cpu.ten
        ) FROM SanPhamChiTiet spct
       WHERE spct.tenSpct LIKE %:tuKhoaTimKiem% 
                   
        
""")
    List<SanPhamChiTietDto> timSanPhamTheoTuKhoa(@Param("tuKhoaTimKiem") String tuKhoaTimKiem);
    @Query("""
        SELECT new com.example.aino_1.dto.SanPhamChiTietDto(
        spct.id,
        spct.donGia,
        spct.tenSpct,
        spct.sanPham.hangSanXuat,
        spct.sanPham.mauSac,
        spct.sanPham.gioiThieu,
        spct.ram.dungLuong,
        spct.oLuuTru.dungLuong,
        spct.manHinh.doPhanGiai,
        spct.manHinh.kichThuoc,
        spct.manHinh.tamNen,
        spct.manHinh.tanSoQuet,
        spct.cpu.soNhan,
        spct.cpu.kienTrucCongNghe,
        spct.cpu.ten
        ) FROM SanPhamChiTiet spct
       WHERE spct.donGia between :minPrice and :maxPrice
        
""")
    List<SanPhamChiTietDto> locTheoGia(@Param("minPrice") Double minPrice, @Param("maxPrice") Double maxPrice);
    @Query("""
        SELECT new com.example.aino_1.dto.SanPhamChiTietDto(
        spct.id,
        spct.donGia,
        spct.tenSpct,
        spct.sanPham.hangSanXuat,
        spct.sanPham.mauSac,
        spct.sanPham.gioiThieu,
        spct.ram.dungLuong,
        spct.oLuuTru.dungLuong,
        spct.manHinh.doPhanGiai,
        spct.manHinh.kichThuoc,
        spct.manHinh.tamNen,
        spct.manHinh.tanSoQuet,
        spct.cpu.soNhan,
        spct.cpu.kienTrucCongNghe,
        spct.cpu.ten
        ) FROM SanPhamChiTiet spct
       WHERE spct.ram.dungLuong = :dungLuongRam
        
""")
    List<SanPhamChiTietDto> locTheoDungLuongRam(@Param("dungLuongRam") Integer dungLuongRam);
    @Query("""
        SELECT new com.example.aino_1.dto.SanPhamChiTietDto(
        spct.id,
        spct.donGia,
        spct.tenSpct,
        spct.sanPham.hangSanXuat,
        spct.sanPham.mauSac,
        spct.sanPham.gioiThieu,
        spct.ram.dungLuong,
        spct.oLuuTru.dungLuong,
        spct.manHinh.doPhanGiai,
        spct.manHinh.kichThuoc,
        spct.manHinh.tamNen,
        spct.manHinh.tanSoQuet,
        spct.cpu.soNhan,
        spct.cpu.kienTrucCongNghe,
        spct.cpu.ten
        ) FROM SanPhamChiTiet spct
       WHERE spct.sanPham.hangSanXuat = :hangSanXuat
        
""")
    List<SanPhamChiTietDto> locTheoHangSanXuat(@Param("hangSanXuat") String hangSanXuat);
    @Query("""
        SELECT new com.example.aino_1.dto.SanPhamChiTietDto(
        spct.id,
        spct.donGia,
        spct.tenSpct,
        spct.sanPham.hangSanXuat,
        spct.sanPham.mauSac,
        spct.sanPham.gioiThieu,
        spct.ram.dungLuong,
        spct.oLuuTru.dungLuong,
        spct.manHinh.doPhanGiai,
        spct.manHinh.kichThuoc,
        spct.manHinh.tamNen,
        spct.manHinh.tanSoQuet,
        spct.cpu.soNhan,
        spct.cpu.kienTrucCongNghe,
        spct.cpu.ten
        ) FROM SanPhamChiTiet spct
       WHERE spct.manHinh.tamNen = :tamNen
        
""")
    List<SanPhamChiTietDto> locTheoTamNen(@Param("tamNen") String tamNen);
    @Query("""
        SELECT new com.example.aino_1.dto.SanPhamChiTietDto(
        spct.id,
        spct.donGia,
        spct.tenSpct,
        spct.sanPham.hangSanXuat,
        spct.sanPham.mauSac,
        spct.sanPham.gioiThieu,
        spct.ram.dungLuong,
        spct.oLuuTru.dungLuong,
        spct.manHinh.doPhanGiai,
        spct.manHinh.kichThuoc,
        spct.manHinh.tamNen,
        spct.manHinh.tanSoQuet,
        spct.cpu.soNhan,
        spct.cpu.kienTrucCongNghe,
        spct.cpu.ten
        ) FROM SanPhamChiTiet spct
       WHERE spct.cpu.kienTrucCongNghe = :congNgheCPU
        
""")
    List<SanPhamChiTietDto> locTheoCongNgheCPU(@Param("congNgheCPU") String congNgheCPU);
    @Query("""
        SELECT new com.example.aino_1.dto.SanPhamChiTietDto(
        spct.id,
        spct.donGia,
        spct.tenSpct,
        spct.sanPham.hangSanXuat,
        spct.sanPham.mauSac,
        spct.sanPham.gioiThieu,
        spct.ram.dungLuong,
        spct.oLuuTru.dungLuong,
        spct.manHinh.doPhanGiai,
        spct.manHinh.kichThuoc,
        spct.manHinh.tamNen,
        spct.manHinh.tanSoQuet,
        spct.cpu.soNhan,
        spct.cpu.kienTrucCongNghe,
        spct.cpu.ten
        ) FROM SanPhamChiTiet spct
       WHERE spct.manHinh.kichThuoc = :kichThuoc
        
""")
    List<SanPhamChiTietDto> locTheoKichThuoc(@Param("kichThuoc") Double kichThuoc);
}

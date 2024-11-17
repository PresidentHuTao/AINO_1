package com.example.aino_1.service;

import com.example.aino_1.entity.*;
import com.example.aino_1.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class SanPhamService {
    @Autowired
    private SanPhamInterface sanPhamInterface;

    @Autowired
    private NguonNhapInterface nguonNhapInterface; // Repository cho HinhAnh
    @Autowired
    private ChatLieuInterface chatLieuInterface; // Repository cho HinhAnh

    @Autowired
    private KichThuocLaptopInterface kichThuocLaptopInterface; // Repository cho HinhAnh

    @Autowired
    private LoaiSanPhamInterface loaiSanPhamInterface; // Repository cho HinhAnh

    @Autowired
    private HinhAnhInterface hinhAnhInterface; // Repository cho HinhAnh


    public SanPham saveSanPhamWithImage(SanPham sp, List<String> urlImg) {
        // Bước 1: Lưu sản phẩm mà không có ảnh
        SanPham sanPham = new SanPham();
        sanPham.setTenSanPham(sp.getTenSanPham());
        sanPham.setNamSanXuat(sp.getNamSanXuat());
        sanPham.setTrongLuong(sp.getTrongLuong());
        sanPham.setGioiThieu(sp.getGioiThieu());
        sanPham.setThoiHanBaoHanh(sp.getThoiHanBaoHanh());
        sanPham.setPin(sp.getPin());

        // Thiết lập loại sản phẩm
        LoaiSanPham loaiSanPham = loaiSanPhamInterface.findById(sp.getLoaiSanPham().getId()).get();
        sanPham.setLoaiSanPham(loaiSanPham);
        // Thiết lập nguồn nhập
        NguonNhap nguonNhap = nguonNhapInterface.findById(sp.getNguonNhap().getId()).get();
        sanPham.setNguonNhap(nguonNhap);
        // Thiết lập nguồn nhập
        ChatLieu chatLieu = chatLieuInterface.findById(sp.getChatLieu().getId()).get();
        sanPham.setChatLieu(chatLieu);
        // Thiết lập nguồn nhập
        KichThuocLapTop kichThuocLapTop = kichThuocLaptopInterface.findById(sp.getChatLieu().getId()).get();
        sanPham.setKichThuocLaptop(kichThuocLapTop);



        SanPham savedSanPham = sanPhamInterface.save(sanPham);

        if (urlImg != null ){
            for (String url : urlImg
            ) {
                // Bước 2: Lưu ảnh với ID sản phẩm
                HinhAnh hinhAnh = new HinhAnh();
                hinhAnh.setDuongDanHinhAnh(url); // Hàm uploadFile để lưu file và trả về đường dẫn
                hinhAnh.setSanPham(savedSanPham); // Gán sản phẩm vào hình ảnh

                // Lưu thông tin ảnh vào cơ sở dữ liệu
                hinhAnhInterface.save(hinhAnh);
            }
        }


        return savedSanPham;
    }
//
//    // Hàm để lưu file và trả về đường dẫn lưu trữ
//    private String uploadFile(MultipartFile file) {
//        // Logic để lưu file lên server hoặc cloud storage và trả về đường dẫn
//        // Ví dụ: Lưu vào thư mục local hoặc Google Cloud Storage
//        // return đường_dẫn_đã_lưu;
//        return "/path/to/saved/file";
}

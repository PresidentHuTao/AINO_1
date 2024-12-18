USE [testAINO]
GO
/****** Object:  Table [dbo].[card_do_hoa]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[card_do_hoa](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ten_card] [varchar](255) NOT NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[chat_lieu]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[chat_lieu](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ten_chat_lieu] [nvarchar](50) NOT NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[chuc_vu]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[chuc_vu](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[vai_tro] [nvarchar](30) NOT NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cpu]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cpu](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[hang_san_xuat] [nvarchar](20) NOT NULL,
	[kien_truc_cong_nghe] [nvarchar](30) NULL,
	[toc_do_toi_thieu] [int] NULL,
	[toc_do_toi_da] [int] NULL,
	[so_nhan] [int] NULL,
	[so_luong] [int] NULL,
	[bo_nho_dem] [int] NULL,
	[ten] [nvarchar](20) NOT NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cua_hang]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cua_hang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[tinh] [nvarchar](20) NULL,
	[huyen] [nvarchar](20) NULL,
	[phuong] [nvarchar](20) NULL,
	[so_nha] [nvarchar](50) NULL,
	[thoi_gian_mo_cua] [varchar](5) NULL,
	[thoi_gian_dong_cua] [varchar](5) NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[gio_hang]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[gio_hang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_tai_khoan] [int] NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[gio_hang_chi_tiet]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[gio_hang_chi_tiet](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_gio_hang] [int] NULL,
	[id_spct] [int] NULL,
	[so_luong] [int] NOT NULL,
	[don_gia] [float] NOT NULL,
	[trang_thai] [int] NULL,
	[soLuong] [int] NULL,
	[donGia] [real] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[gpu]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[gpu](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[hang_san_xuat] [nvarchar](20) NOT NULL,
	[xung_nhip_toi_thieu] [int] NULL,
	[xung_nhip_toi_da] [int] NULL,
	[vram] [int] NULL,
	[dien_ap] [int] NULL,
	[kien_truc_cong_nghe] [nvarchar](30) NULL,
	[ten] [nvarchar](20) NOT NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hinh_anh]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hinh_anh](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_san_pham] [int] NULL,
	[duong_dan_hinh_anh] [nvarchar](255) NOT NULL,
	[mo_ta] [nvarchar](255) NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hinh_thuc_thanh_toan]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hinh_thuc_thanh_toan](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ten_hinh_thuc] [varchar](255) NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hoa_don]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hoa_don](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_ttkh] [int] NULL,
	[thoi_gian_lap_hoa_don] [datetime] NULL,
	[tong_tien] [float] NULL,
	[hinh_thuc_thanh_toan] [int] NOT NULL,
	[dia_chi_nhan_hang] [nvarchar](255) NOT NULL,
	[id_cua_hang] [int] NULL,
	[id_voucher] [int] NULL,
	[trang_thai_thanh_toan] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hoa_don_chi_tiet]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hoa_don_chi_tiet](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_hoa_don] [int] NULL,
	[id_san_pham_chi_tiet] [int] NULL,
	[so_luong] [int] NULL,
	[gia] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[kich_thuoc_laptop]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kich_thuoc_laptop](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[kich_thuoc] [float] NOT NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[loai_san_pham]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[loai_san_pham](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ten_loai] [nvarchar](50) NOT NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[man_hinh]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[man_hinh](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[do_phan_giai] [varchar](255) NULL,
	[tan_so_quet] [int] NULL,
	[do_sang] [int] NULL,
	[do_phu_mau] [float] NULL,
	[tam_nen] [varchar](255) NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[nguon_nhap]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[nguon_nhap](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ten_nha_cung_ung] [nvarchar](30) NOT NULL,
	[sdt] [nvarchar](15) NOT NULL,
	[email] [varchar](30) NOT NULL,
	[dia_chi] [nvarchar](255) NOT NULL,
	[ghi_chu] [nvarchar](255) NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[o_luu_tru]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[o_luu_tru](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dung_luong] [int] NULL,
	[loai_o_cung] [varchar](20) NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ram]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ram](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dung_luong] [int] NULL,
	[toc_do] [int] NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[san_pham]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[san_pham](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_loai] [int] NULL,
	[id_nguon_nhap] [int] NULL,
	[id_chat_lieu] [int] NOT NULL,
	[kich_thuoc_laptop_id] [int] NULL,
	[ten_san_pham] [nvarchar](50) NOT NULL,
	[nam_san_xuat] [int] NOT NULL,
	[trong_luong] [float] NOT NULL,
	[gioi_thieu] [nvarchar](255) NULL,
	[thoi_han_bao_hanh] [nvarchar](20) NULL,
	[id_card_do_hoa] [int] NULL,
	[pin] [int] NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[san_pham_chi_tiet]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[san_pham_chi_tiet](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[so_luong] [int] NOT NULL,
	[trang_thai] [nvarchar](20) NOT NULL,
	[don_gia] [float] NOT NULL,
	[ma_spct] [varchar](20) NOT NULL,
	[id_sp] [int] NULL,
	[id_ram] [int] NULL,
	[id_o_luu_tru] [int] NULL,
	[id_man_hinh] [int] NULL,
	[id_cpu] [int] NULL,
	[id_gpu] [int] NULL,
	[trang_thai_spct] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tai_khoan_nguoi_dung]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tai_khoan_nguoi_dung](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ten_tai_khoan] [varchar](50) NOT NULL,
	[mat_khau] [varchar](50) NOT NULL,
	[id_chuc_vu] [int] NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[thong_tin_tai_khoan]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[thong_tin_tai_khoan](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ho_ten] [nvarchar](50) NULL,
	[dia_chi] [nvarchar](255) NULL,
	[so_cccd] [varchar](20) NULL,
	[so_dien_thoai] [varchar](11) NULL,
	[email] [varchar](50) NULL,
	[id_tai_khoan] [int] NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[voucher]    Script Date: 17/11/2024 2:35:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[voucher](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ma_voucher] [varchar](100) NOT NULL,
	[so_luong] [int] NOT NULL,
	[thoi_gian_hen_ket] [datetime] NOT NULL,
	[so_tien_toi_da] [float] NULL,
	[dieu_kien_ap_dung] [float] NOT NULL,
	[so_tien_ap_dung] [float] NULL,
	[phan_tram_ap_dung] [float] NULL,
	[thoi_gian_ap_dung] [datetime] NOT NULL,
	[trang_thai] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[card_do_hoa] ON 

INSERT [dbo].[card_do_hoa] ([id], [ten_card], [trang_thai]) VALUES (1, N'Card d? h?a NVIDIA GTX 1650', 1)
INSERT [dbo].[card_do_hoa] ([id], [ten_card], [trang_thai]) VALUES (2, N'Card d? h?a NVIDIA RTX 3060', 1)
INSERT [dbo].[card_do_hoa] ([id], [ten_card], [trang_thai]) VALUES (3, N'Card d? h?a AMD Radeon RX 5700', 1)
INSERT [dbo].[card_do_hoa] ([id], [ten_card], [trang_thai]) VALUES (4, N'Card d? h?a NVIDIA Quadro RTX 5000', 1)
INSERT [dbo].[card_do_hoa] ([id], [ten_card], [trang_thai]) VALUES (5, N'Card d? h?a NVIDIA Tesla K80', 1)
SET IDENTITY_INSERT [dbo].[card_do_hoa] OFF
GO
SET IDENTITY_INSERT [dbo].[chat_lieu] ON 

INSERT [dbo].[chat_lieu] ([id], [ten_chat_lieu], [trang_thai]) VALUES (1, N'Nhựa', NULL)
INSERT [dbo].[chat_lieu] ([id], [ten_chat_lieu], [trang_thai]) VALUES (2, N'Nhôm', NULL)
INSERT [dbo].[chat_lieu] ([id], [ten_chat_lieu], [trang_thai]) VALUES (3, N'Magie', NULL)
INSERT [dbo].[chat_lieu] ([id], [ten_chat_lieu], [trang_thai]) VALUES (4, N'Hợp kim Magie', NULL)
INSERT [dbo].[chat_lieu] ([id], [ten_chat_lieu], [trang_thai]) VALUES (5, N'Vỏ nhựa, mặt lưng bằng kim loại', NULL)
INSERT [dbo].[chat_lieu] ([id], [ten_chat_lieu], [trang_thai]) VALUES (6, N'Các chất liệu khác', NULL)
SET IDENTITY_INSERT [dbo].[chat_lieu] OFF
GO
SET IDENTITY_INSERT [dbo].[chuc_vu] ON 

INSERT [dbo].[chuc_vu] ([id], [vai_tro], [trang_thai]) VALUES (1, N'Nhân viên', NULL)
INSERT [dbo].[chuc_vu] ([id], [vai_tro], [trang_thai]) VALUES (2, N'Khách hàng', NULL)
INSERT [dbo].[chuc_vu] ([id], [vai_tro], [trang_thai]) VALUES (3, N'Ngu?i dùng', NULL)
SET IDENTITY_INSERT [dbo].[chuc_vu] OFF
GO
SET IDENTITY_INSERT [dbo].[cpu] ON 

INSERT [dbo].[cpu] ([id], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten], [trang_thai]) VALUES (1, N'Intel', N'x86-64', 1, 5, 4, 8, 16, N'Core i7', NULL)
INSERT [dbo].[cpu] ([id], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten], [trang_thai]) VALUES (2, N'AMD', N'x86-64', 1, 4, 4, 8, 16, N'Ryzen 7', NULL)
INSERT [dbo].[cpu] ([id], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten], [trang_thai]) VALUES (3, N'Intel', N'x86-64', 1, 4, 4, 8, 12, N'Core i5', NULL)
INSERT [dbo].[cpu] ([id], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten], [trang_thai]) VALUES (4, N'AMD', N'x86-64', 2, 4, 6, 12, 32, N'Ryzen 5', NULL)
INSERT [dbo].[cpu] ([id], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten], [trang_thai]) VALUES (5, N'Intel', N'x86-64', 2, 4, 8, 16, 32, N'Core i9', NULL)
INSERT [dbo].[cpu] ([id], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten], [trang_thai]) VALUES (6, N'AMD', N'x86-64', 1, 3, 6, 16, 16, N'Ryzen 3', NULL)
INSERT [dbo].[cpu] ([id], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten], [trang_thai]) VALUES (7, N'Intel', N'x86-64', 2, 4, 4, 6, 16, N'Core i3', NULL)
INSERT [dbo].[cpu] ([id], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten], [trang_thai]) VALUES (8, N'Intel', N'x86-64', 1, 3, 6, 12, 8, N'Core i5-9600K', NULL)
INSERT [dbo].[cpu] ([id], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten], [trang_thai]) VALUES (9, N'AMD', N'x86-64', 2, 4, 4, 8, 8, N'Ryzen 5 3400G', NULL)
INSERT [dbo].[cpu] ([id], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten], [trang_thai]) VALUES (10, N'Intel', N'x86-64', 2, 5, 4, 8, 32, N'Core i7-9700K', NULL)
SET IDENTITY_INSERT [dbo].[cpu] OFF
GO
SET IDENTITY_INSERT [dbo].[cua_hang] ON 

INSERT [dbo].[cua_hang] ([id], [tinh], [huyen], [phuong], [so_nha], [thoi_gian_mo_cua], [thoi_gian_dong_cua], [trang_thai]) VALUES (1, N'Hà N?i', N'Hoàn Ki?m', N'Phu?ng 1', N'S? 123, Ðu?ng ABC', N'08:00', N'18:00', NULL)
INSERT [dbo].[cua_hang] ([id], [tinh], [huyen], [phuong], [so_nha], [thoi_gian_mo_cua], [thoi_gian_dong_cua], [trang_thai]) VALUES (2, N'H? Chí Minh', N'Qu?n 1', N'Phu?ng 2', N'S? 456, Ðu?ng XYZ', N'09:00', N'21:00', NULL)
SET IDENTITY_INSERT [dbo].[cua_hang] OFF
GO
SET IDENTITY_INSERT [dbo].[gio_hang] ON 

INSERT [dbo].[gio_hang] ([id], [id_tai_khoan], [trang_thai]) VALUES (1, 2, NULL)
INSERT [dbo].[gio_hang] ([id], [id_tai_khoan], [trang_thai]) VALUES (2, 5, NULL)
INSERT [dbo].[gio_hang] ([id], [id_tai_khoan], [trang_thai]) VALUES (3, 3, NULL)
INSERT [dbo].[gio_hang] ([id], [id_tai_khoan], [trang_thai]) VALUES (4, 1, NULL)
INSERT [dbo].[gio_hang] ([id], [id_tai_khoan], [trang_thai]) VALUES (5, 4, NULL)
SET IDENTITY_INSERT [dbo].[gio_hang] OFF
GO
SET IDENTITY_INSERT [dbo].[gio_hang_chi_tiet] ON 

INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (1, 1, 1, 2, 20000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (2, 1, 2, 1, 21000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (3, 1, 3, 1, 22000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (4, 2, 4, 3, 23000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (5, 2, 5, 1, 24000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (6, 3, 6, 2, 25000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (7, 3, 7, 1, 26000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (8, 3, 8, 3, 27000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (9, 4, 9, 1, 28000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (10, 4, 10, 2, 29000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (11, 5, 11, 1, 30000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (12, 5, 12, 3, 31000, NULL, NULL, NULL)
INSERT [dbo].[gio_hang_chi_tiet] ([id], [id_gio_hang], [id_spct], [so_luong], [don_gia], [trang_thai], [soLuong], [donGia]) VALUES (13, 5, 13, 2, 32000, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[gio_hang_chi_tiet] OFF
GO
SET IDENTITY_INSERT [dbo].[gpu] ON 

INSERT [dbo].[gpu] ([id], [hang_san_xuat], [xung_nhip_toi_thieu], [xung_nhip_toi_da], [vram], [dien_ap], [kien_truc_cong_nghe], [ten], [trang_thai]) VALUES (1, N'NVIDIA', 1500, 1900, 8, 12, N'Ampere', N'RTX 3080', NULL)
INSERT [dbo].[gpu] ([id], [hang_san_xuat], [xung_nhip_toi_thieu], [xung_nhip_toi_da], [vram], [dien_ap], [kien_truc_cong_nghe], [ten], [trang_thai]) VALUES (2, N'AMD', 1300, 2100, 8, 16, N'RDNA 2', N'Radeon RX 6800 XT', NULL)
INSERT [dbo].[gpu] ([id], [hang_san_xuat], [xung_nhip_toi_thieu], [xung_nhip_toi_da], [vram], [dien_ap], [kien_truc_cong_nghe], [ten], [trang_thai]) VALUES (3, N'NVIDIA', 1200, 1700, 6, 12, N'Turing', N'GTX 1660 Ti', NULL)
INSERT [dbo].[gpu] ([id], [hang_san_xuat], [xung_nhip_toi_thieu], [xung_nhip_toi_da], [vram], [dien_ap], [kien_truc_cong_nghe], [ten], [trang_thai]) VALUES (4, N'AMD', 1400, 1900, 4, 16, N'RDNA', N'Radeon RX 5700', NULL)
INSERT [dbo].[gpu] ([id], [hang_san_xuat], [xung_nhip_toi_thieu], [xung_nhip_toi_da], [vram], [dien_ap], [kien_truc_cong_nghe], [ten], [trang_thai]) VALUES (5, N'NVIDIA', 1400, 2100, 8, 15, N'Pascal', N'GTX 1080 Ti', NULL)
SET IDENTITY_INSERT [dbo].[gpu] OFF
GO
SET IDENTITY_INSERT [dbo].[hinh_anh] ON 

INSERT [dbo].[hinh_anh] ([id], [id_san_pham], [duong_dan_hinh_anh], [mo_ta], [trang_thai]) VALUES (1, 1, N'https://i.postimg.cc/J47PBp3b/mbp-16-spaceblack-cto-hero-202310.jpg', N'Hình ảnh mặt trước của Dell Inspiron 15', NULL)
INSERT [dbo].[hinh_anh] ([id], [id_san_pham], [duong_dan_hinh_anh], [mo_ta], [trang_thai]) VALUES (2, 1, N'https://i.postimg.cc/J47PBp3b/mbp-16-spaceblack-cto-hero-202310.jpg', N'Hình ảnh mặt bên của Dell Inspiron 15', NULL)
INSERT [dbo].[hinh_anh] ([id], [id_san_pham], [duong_dan_hinh_anh], [mo_ta], [trang_thai]) VALUES (3, 2, N'https://i.postimg.cc/J47PBp3b/mbp-16-spaceblack-cto-hero-202310.jpg', N'Hình ảnh mặt trước của HP Pavilion 14', NULL)
INSERT [dbo].[hinh_anh] ([id], [id_san_pham], [duong_dan_hinh_anh], [mo_ta], [trang_thai]) VALUES (4, 3, N'https://i.postimg.cc/J47PBp3b/mbp-16-spaceblack-cto-hero-202310.jpg', N'Hình ảnh mặt trước của Asus ROG Strix G15', NULL)
INSERT [dbo].[hinh_anh] ([id], [id_san_pham], [duong_dan_hinh_anh], [mo_ta], [trang_thai]) VALUES (5, 3, N'https://i.postimg.cc/J47PBp3b/mbp-16-spaceblack-cto-hero-202310.jpg', N'Hình ảnh mặt bên của Asus ROG Strix G15', NULL)
INSERT [dbo].[hinh_anh] ([id], [id_san_pham], [duong_dan_hinh_anh], [mo_ta], [trang_thai]) VALUES (6, 4, N'https://i.postimg.cc/J47PBp3b/mbp-16-spaceblack-cto-hero-202310.jpg', N'Hình ảnh mặt trước của MacBook Pro 16-inch 2023', NULL)
INSERT [dbo].[hinh_anh] ([id], [id_san_pham], [duong_dan_hinh_anh], [mo_ta], [trang_thai]) VALUES (7, 5, N'https://i.postimg.cc/J47PBp3b/mbp-16-spaceblack-cto-hero-202310.jpg', N'Hình ảnh mặt trước của Lenovo ThinkPad X1 Carbon Gen 10', NULL)
SET IDENTITY_INSERT [dbo].[hinh_anh] OFF
GO
SET IDENTITY_INSERT [dbo].[hinh_thuc_thanh_toan] ON 

INSERT [dbo].[hinh_thuc_thanh_toan] ([id], [ten_hinh_thuc], [trang_thai]) VALUES (1, N'Thanh toán khi nh?n hàng', NULL)
INSERT [dbo].[hinh_thuc_thanh_toan] ([id], [ten_hinh_thuc], [trang_thai]) VALUES (2, N'Thanh toán qua MoMo', NULL)
SET IDENTITY_INSERT [dbo].[hinh_thuc_thanh_toan] OFF
GO
SET IDENTITY_INSERT [dbo].[hoa_don] ON 

INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (1, 3, CAST(N'2024-11-17T02:30:54.527' AS DateTime), 1200000, 1, N'Số 789, Đường ABC, Hà Nội', 1, 1, 0)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (2, 4, CAST(N'2024-11-17T02:30:54.527' AS DateTime), 750000, 2, N'Số 101, Đường XYZ, Hồ Chí Minh', 2, NULL, 0)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (3, 5, CAST(N'2024-11-17T02:30:54.527' AS DateTime), 900000, 1, N'Số 567, Đường QWERTY, Hà Nội', 1, 2, 0)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (4, 3, CAST(N'2024-11-17T02:30:54.527' AS DateTime), 1300000, 2, N'Số 123, Đường ABC, Hồ Chí Minh', 2, 3, 0)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (5, 1, CAST(N'2024-11-17T02:30:54.527' AS DateTime), 1500000, 1, N'Số 234, Đường LMN, Hà Nội', 1, NULL, 0)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (6, 2, CAST(N'2024-11-17T02:30:54.527' AS DateTime), 1100000, 2, N'Số 876, Đường ABC, Hồ Chí Minh', 2, NULL, 0)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (7, 3, CAST(N'2024-11-17T02:30:54.533' AS DateTime), 1200000, 1, N'Số 789, Đường ABC, Hà Nội', 1, 1, 1)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (8, 4, CAST(N'2024-11-17T02:30:54.533' AS DateTime), 750000, 2, N'Số 101, Đường XYZ, Hồ Chí Minh', 2, NULL, 0)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (9, 5, CAST(N'2024-11-17T02:30:54.533' AS DateTime), 900000, 1, N'Số 567, Đường QWERTY, Hà Nội', 1, 2, 2)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (10, 3, CAST(N'2024-11-17T02:30:54.533' AS DateTime), 1300000, 2, N'Số 123, Đường ABC, Hồ Chí Minh', 2, 3, 0)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (11, 1, CAST(N'2024-11-17T02:30:54.533' AS DateTime), 1500000, 1, N'Số 234, Đường LMN, Hà Nội', 1, NULL, 1)
INSERT [dbo].[hoa_don] ([id], [id_ttkh], [thoi_gian_lap_hoa_don], [tong_tien], [hinh_thuc_thanh_toan], [dia_chi_nhan_hang], [id_cua_hang], [id_voucher], [trang_thai_thanh_toan]) VALUES (12, 2, CAST(N'2024-11-17T02:30:54.533' AS DateTime), 1100000, 2, N'Số 876, Đường ABC, Hồ Chí Minh', 2, NULL, 0)
SET IDENTITY_INSERT [dbo].[hoa_don] OFF
GO
SET IDENTITY_INSERT [dbo].[hoa_don_chi_tiet] ON 

INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (1, 9, 1, 2, 20000)
INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (2, 9, 2, 1, 22000)
INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (3, 8, 3, 2, 25000)
INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (4, 8, 4, 1, 27000)
INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (5, 8, 5, 1, 32000)
INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (6, 7, 6, 3, 22000)
INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (7, 6, 7, 1, 28000)
INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (8, 6, 8, 2, 30000)
INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (9, 5, 9, 1, 15000)
INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (10, 5, 10, 2, 20000)
INSERT [dbo].[hoa_don_chi_tiet] ([id], [id_hoa_don], [id_san_pham_chi_tiet], [so_luong], [gia]) VALUES (11, 5, 11, 1, 25000)
SET IDENTITY_INSERT [dbo].[hoa_don_chi_tiet] OFF
GO
SET IDENTITY_INSERT [dbo].[kich_thuoc_laptop] ON 

INSERT [dbo].[kich_thuoc_laptop] ([id], [kich_thuoc], [trang_thai]) VALUES (1, 15.6, NULL)
INSERT [dbo].[kich_thuoc_laptop] ([id], [kich_thuoc], [trang_thai]) VALUES (2, 17.3, NULL)
INSERT [dbo].[kich_thuoc_laptop] ([id], [kich_thuoc], [trang_thai]) VALUES (3, 13.3, NULL)
INSERT [dbo].[kich_thuoc_laptop] ([id], [kich_thuoc], [trang_thai]) VALUES (4, 14, NULL)
INSERT [dbo].[kich_thuoc_laptop] ([id], [kich_thuoc], [trang_thai]) VALUES (5, 21.5, NULL)
INSERT [dbo].[kich_thuoc_laptop] ([id], [kich_thuoc], [trang_thai]) VALUES (6, 15, NULL)
INSERT [dbo].[kich_thuoc_laptop] ([id], [kich_thuoc], [trang_thai]) VALUES (7, 17, NULL)
INSERT [dbo].[kich_thuoc_laptop] ([id], [kich_thuoc], [trang_thai]) VALUES (8, 15.6, NULL)
INSERT [dbo].[kich_thuoc_laptop] ([id], [kich_thuoc], [trang_thai]) VALUES (9, 13.3, NULL)
INSERT [dbo].[kich_thuoc_laptop] ([id], [kich_thuoc], [trang_thai]) VALUES (10, 19.5, NULL)
SET IDENTITY_INSERT [dbo].[kich_thuoc_laptop] OFF
GO
SET IDENTITY_INSERT [dbo].[loai_san_pham] ON 

INSERT [dbo].[loai_san_pham] ([id], [ten_loai], [trang_thai]) VALUES (1, N'Laptop Học sinh, Sinh viên', NULL)
INSERT [dbo].[loai_san_pham] ([id], [ten_loai], [trang_thai]) VALUES (2, N'Laptop Văn phòng', NULL)
INSERT [dbo].[loai_san_pham] ([id], [ten_loai], [trang_thai]) VALUES (3, N'Laptop Gaming', NULL)
INSERT [dbo].[loai_san_pham] ([id], [ten_loai], [trang_thai]) VALUES (4, N'Laptop Đồ họa', NULL)
INSERT [dbo].[loai_san_pham] ([id], [ten_loai], [trang_thai]) VALUES (5, N'Laptop Lập trình', NULL)
SET IDENTITY_INSERT [dbo].[loai_san_pham] OFF
GO
SET IDENTITY_INSERT [dbo].[man_hinh] ON 

INSERT [dbo].[man_hinh] ([id], [do_phan_giai], [tan_so_quet], [do_sang], [do_phu_mau], [tam_nen], [trang_thai]) VALUES (1, N'1920x1080', 60, 300, 0.5, N'IPS', NULL)
INSERT [dbo].[man_hinh] ([id], [do_phan_giai], [tan_so_quet], [do_sang], [do_phu_mau], [tam_nen], [trang_thai]) VALUES (2, N'1920x1080', 75, 400, 0.6, N'LED', NULL)
INSERT [dbo].[man_hinh] ([id], [do_phan_giai], [tan_so_quet], [do_sang], [do_phu_mau], [tam_nen], [trang_thai]) VALUES (3, N'2560x1600', 120, 350, 0.4, N'OLED', NULL)
INSERT [dbo].[man_hinh] ([id], [do_phan_giai], [tan_so_quet], [do_sang], [do_phu_mau], [tam_nen], [trang_thai]) VALUES (4, N'3840x2160', 90, 350, 0.7, N'IPS', NULL)
INSERT [dbo].[man_hinh] ([id], [do_phan_giai], [tan_so_quet], [do_sang], [do_phu_mau], [tam_nen], [trang_thai]) VALUES (5, N'1920x1080', 60, 250, 0.8, N'LCD', NULL)
INSERT [dbo].[man_hinh] ([id], [do_phan_giai], [tan_so_quet], [do_sang], [do_phu_mau], [tam_nen], [trang_thai]) VALUES (6, N'1920x1080', 60, 250, 0.6, N'LED', NULL)
INSERT [dbo].[man_hinh] ([id], [do_phan_giai], [tan_so_quet], [do_sang], [do_phu_mau], [tam_nen], [trang_thai]) VALUES (7, N'2560x1440', 75, 350, 0.5, N'IPS', NULL)
INSERT [dbo].[man_hinh] ([id], [do_phan_giai], [tan_so_quet], [do_sang], [do_phu_mau], [tam_nen], [trang_thai]) VALUES (8, N'1366x768', 60, 200, 0.7, N'LED', NULL)
INSERT [dbo].[man_hinh] ([id], [do_phan_giai], [tan_so_quet], [do_sang], [do_phu_mau], [tam_nen], [trang_thai]) VALUES (9, N'1920x1080', 60, 300, 0.5, N'OLED', NULL)
INSERT [dbo].[man_hinh] ([id], [do_phan_giai], [tan_so_quet], [do_sang], [do_phu_mau], [tam_nen], [trang_thai]) VALUES (10, N'1920x1080', 60, 320, 0.4, N'IPS', NULL)
SET IDENTITY_INSERT [dbo].[man_hinh] OFF
GO
SET IDENTITY_INSERT [dbo].[nguon_nhap] ON 

INSERT [dbo].[nguon_nhap] ([id], [ten_nha_cung_ung], [sdt], [email], [dia_chi], [ghi_chu], [trang_thai]) VALUES (1, N'Công Ty A', N'0901234567', N'ncca@domain.com', N'S? 1, Ðu?ng ABC, Hà N?i', N'Giao hàng nhanh chóng, ch?t lu?ng d?m b?o', NULL)
INSERT [dbo].[nguon_nhap] ([id], [ten_nha_cung_ung], [sdt], [email], [dia_chi], [ghi_chu], [trang_thai]) VALUES (2, N'Công Ty B', N'0912345678', N'nccb@domain.com', N'S? 2, Ðu?ng XYZ, H? Chí Minh', N'S?n ph?m da d?ng, giá c? h?p lý', NULL)
INSERT [dbo].[nguon_nhap] ([id], [ten_nha_cung_ung], [sdt], [email], [dia_chi], [ghi_chu], [trang_thai]) VALUES (3, N'Công Ty C', N'0923456789', N'nccc@domain.com', N'S? 3, Ðu?ng DEF, Ðà N?ng', N'S?n ph?m nh?p kh?u ch?t lu?ng cao', NULL)
INSERT [dbo].[nguon_nhap] ([id], [ten_nha_cung_ung], [sdt], [email], [dia_chi], [ghi_chu], [trang_thai]) VALUES (4, N'Công Ty D', N'0934567890', N'nccd@domain.com', N'S? 4, Ðu?ng GHI, H?i Phòng', N'Giao hàng t?n noi nhanh chóng', NULL)
INSERT [dbo].[nguon_nhap] ([id], [ten_nha_cung_ung], [sdt], [email], [dia_chi], [ghi_chu], [trang_thai]) VALUES (5, N'Công Ty E', N'0945678901', N'ncce@domain.com', N'S? 5, Ðu?ng JKL, C?n Tho', N'D?ch v? cham sóc khách hàng t?n tâm', NULL)
SET IDENTITY_INSERT [dbo].[nguon_nhap] OFF
GO
SET IDENTITY_INSERT [dbo].[o_luu_tru] ON 

INSERT [dbo].[o_luu_tru] ([id], [dung_luong], [loai_o_cung], [trang_thai]) VALUES (1, 120, N'SSD', 1)
INSERT [dbo].[o_luu_tru] ([id], [dung_luong], [loai_o_cung], [trang_thai]) VALUES (2, 500, N'HDD', 1)
INSERT [dbo].[o_luu_tru] ([id], [dung_luong], [loai_o_cung], [trang_thai]) VALUES (3, 1000, N'HDD', 1)
INSERT [dbo].[o_luu_tru] ([id], [dung_luong], [loai_o_cung], [trang_thai]) VALUES (4, 256, N'SSD', 1)
INSERT [dbo].[o_luu_tru] ([id], [dung_luong], [loai_o_cung], [trang_thai]) VALUES (5, 512, N'SSD', 1)
INSERT [dbo].[o_luu_tru] ([id], [dung_luong], [loai_o_cung], [trang_thai]) VALUES (6, 2000, N'HDD', 1)
INSERT [dbo].[o_luu_tru] ([id], [dung_luong], [loai_o_cung], [trang_thai]) VALUES (7, 128, N'SSD', 1)
INSERT [dbo].[o_luu_tru] ([id], [dung_luong], [loai_o_cung], [trang_thai]) VALUES (8, 100, N'HDD', 1)
INSERT [dbo].[o_luu_tru] ([id], [dung_luong], [loai_o_cung], [trang_thai]) VALUES (9, 200, N'SSD', 1)
INSERT [dbo].[o_luu_tru] ([id], [dung_luong], [loai_o_cung], [trang_thai]) VALUES (10, 250, N'HDD', 1)
SET IDENTITY_INSERT [dbo].[o_luu_tru] OFF
GO
SET IDENTITY_INSERT [dbo].[ram] ON 

INSERT [dbo].[ram] ([id], [dung_luong], [toc_do], [trang_thai]) VALUES (1, 4, 2400, 1)
INSERT [dbo].[ram] ([id], [dung_luong], [toc_do], [trang_thai]) VALUES (2, 8, 3000, 1)
INSERT [dbo].[ram] ([id], [dung_luong], [toc_do], [trang_thai]) VALUES (3, 16, 3200, 1)
INSERT [dbo].[ram] ([id], [dung_luong], [toc_do], [trang_thai]) VALUES (4, 32, 3600, 1)
INSERT [dbo].[ram] ([id], [dung_luong], [toc_do], [trang_thai]) VALUES (5, 64, 4000, 1)
INSERT [dbo].[ram] ([id], [dung_luong], [toc_do], [trang_thai]) VALUES (6, 2, 1600, 1)
INSERT [dbo].[ram] ([id], [dung_luong], [toc_do], [trang_thai]) VALUES (7, 4, 2400, 1)
INSERT [dbo].[ram] ([id], [dung_luong], [toc_do], [trang_thai]) VALUES (8, 8, 2666, 1)
INSERT [dbo].[ram] ([id], [dung_luong], [toc_do], [trang_thai]) VALUES (9, 16, 2933, 1)
INSERT [dbo].[ram] ([id], [dung_luong], [toc_do], [trang_thai]) VALUES (10, 32, 3466, 1)
SET IDENTITY_INSERT [dbo].[ram] OFF
GO
SET IDENTITY_INSERT [dbo].[san_pham] ON 

INSERT [dbo].[san_pham] ([id], [id_loai], [id_nguon_nhap], [id_chat_lieu], [kich_thuoc_laptop_id], [ten_san_pham], [nam_san_xuat], [trong_luong], [gioi_thieu], [thoi_han_bao_hanh], [id_card_do_hoa], [pin], [trang_thai]) VALUES (1, 1, 1, 1, 1, N'Dell Inspiron 15 3000', 2023, 2.5, N'Laptop học sinh, sinh viên, với hiệu suất ổn định, giá thành phải chăng', N'6 Tháng', 1, 72, 1)
INSERT [dbo].[san_pham] ([id], [id_loai], [id_nguon_nhap], [id_chat_lieu], [kich_thuoc_laptop_id], [ten_san_pham], [nam_san_xuat], [trong_luong], [gioi_thieu], [thoi_han_bao_hanh], [id_card_do_hoa], [pin], [trang_thai]) VALUES (2, 2, 2, 2, 2, N'HP Pavilion 14', 2022, 2.3, N'Laptop văn phòng mỏng nhẹ, hiệu năng ổn định', N'2024-12-31', 2, 72, 1)
INSERT [dbo].[san_pham] ([id], [id_loai], [id_nguon_nhap], [id_chat_lieu], [kich_thuoc_laptop_id], [ten_san_pham], [nam_san_xuat], [trong_luong], [gioi_thieu], [thoi_han_bao_hanh], [id_card_do_hoa], [pin], [trang_thai]) VALUES (3, 3, 3, 1, 3, N'Asus ROG Strix G15', 2023, 3, N'Laptop gaming mạnh mẽ, thiết kế hiện đại, hỗ trợ chơi game 4K', N'6 Tháng', 3, 72, 1)
INSERT [dbo].[san_pham] ([id], [id_loai], [id_nguon_nhap], [id_chat_lieu], [kich_thuoc_laptop_id], [ten_san_pham], [nam_san_xuat], [trong_luong], [gioi_thieu], [thoi_han_bao_hanh], [id_card_do_hoa], [pin], [trang_thai]) VALUES (4, 4, 4, 2, 4, N'MacBook Pro 16-inch 2023', 2023, 3.2, N'Laptop đồ họa, xử lý đồ họa chuyên nghiệp, màn hình Retina', N'6 Tháng', 4, 72, 1)
INSERT [dbo].[san_pham] ([id], [id_loai], [id_nguon_nhap], [id_chat_lieu], [kich_thuoc_laptop_id], [ten_san_pham], [nam_san_xuat], [trong_luong], [gioi_thieu], [thoi_han_bao_hanh], [id_card_do_hoa], [pin], [trang_thai]) VALUES (5, 5, 5, 1, 5, N'Lenovo ThinkPad X1 Carbon Gen 10', 2024, 2.8, N'Laptop lập trình với hiệu năng cao, bền bỉ và pin lâu', N'6 Tháng', 5, 72, 1)
SET IDENTITY_INSERT [dbo].[san_pham] OFF
GO
SET IDENTITY_INSERT [dbo].[san_pham_chi_tiet] ON 

INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (1, 5, N'Có sẵn', 20000, N'Dell_01', 1, 1, 1, 1, 1, 1, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (2, 5, N'Có sẵn', 21000, N'Dell_02', 1, 2, 2, 1, 2, 1, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (3, 4, N'Có sẵn', 22000, N'Dell_03', 1, 3, 1, 1, 3, 1, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (4, 6, N'Có sẵn', 23000, N'Dell_04', 1, 2, 2, 2, 2, 2, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (5, 5, N'Có sẵn', 24000, N'Dell_05', 1, 3, 1, 1, 2, 3, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (6, 4, N'Có sẵn', 25000, N'HP_01', 2, 2, 2, 2, 2, 2, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (7, 6, N'Có sẵn', 26000, N'HP_02', 2, 3, 1, 3, 2, 3, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (8, 5, N'Có sẵn', 27000, N'HP_03', 2, 3, 2, 1, 2, 2, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (9, 7, N'Có sẵn', 28000, N'HP_04', 2, 4, 2, 2, 2, 1, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (10, 5, N'Có sẵn', 29000, N'HP_05', 2, 2, 1, 2, 2, 2, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (11, 3, N'Có sẵn', 22000, N'Asus_01', 3, 4, 2, 2, 1, 3, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (12, 5, N'Có sẵn', 23000, N'Asus_02', 3, 5, 1, 2, 2, 3, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (13, 4, N'Có sẵn', 24000, N'Asus_03', 3, 4, 2, 3, 1, 4, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (14, 6, N'Có sẵn', 25000, N'Asus_04', 3, 5, 3, 2, 2, 4, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (15, 5, N'Có sẵn', 26000, N'Asus_05', 3, 5, 2, 3, 2, 3, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (16, 2, N'Có sẵn', 28000, N'MacBook_01', 4, 6, 1, 4, 3, 5, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (17, 3, N'Có sẵn', 29000, N'MacBook_02', 4, 7, 2, 4, 4, 5, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (18, 4, N'Có sẵn', 30000, N'MacBook_03', 4, 6, 2, 4, 3, 4, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (19, 5, N'Có sẵn', 31000, N'MacBook_04', 4, 7, 3, 4, 4, 2, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (20, 3, N'Có sẵn', 32000, N'MacBook_05', 4, 8, 1, 5, 3, 1, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (21, 4, N'Có sẵn', 30000, N'Lenovo_01', 5, 6, 1, 1, 4, 5, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (22, 5, N'Có sẵn', 31000, N'Lenovo_02', 5, 7, 2, 4, 3, 3, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (23, 6, N'Có sẵn', 32000, N'Lenovo_03', 5, 8, 2, 7, 4, 1, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (24, 4, N'Có sẵn', 33000, N'Lenovo_04', 5, 7, 1, 3, 4, 1, NULL)
INSERT [dbo].[san_pham_chi_tiet] ([id], [so_luong], [trang_thai], [don_gia], [ma_spct], [id_sp], [id_ram], [id_o_luu_tru], [id_man_hinh], [id_cpu], [id_gpu], [trang_thai_spct]) VALUES (25, 5, N'Có sẵn', 34000, N'Lenovo_05', 5, 6, 3, 2, 4, 2, NULL)
SET IDENTITY_INSERT [dbo].[san_pham_chi_tiet] OFF
GO
SET IDENTITY_INSERT [dbo].[tai_khoan_nguoi_dung] ON 

INSERT [dbo].[tai_khoan_nguoi_dung] ([id], [ten_tai_khoan], [mat_khau], [id_chuc_vu], [trang_thai]) VALUES (1, N'user1', N'password1', 1, NULL)
INSERT [dbo].[tai_khoan_nguoi_dung] ([id], [ten_tai_khoan], [mat_khau], [id_chuc_vu], [trang_thai]) VALUES (2, N'user2', N'password2', 2, NULL)
INSERT [dbo].[tai_khoan_nguoi_dung] ([id], [ten_tai_khoan], [mat_khau], [id_chuc_vu], [trang_thai]) VALUES (3, N'user3', N'password3', 3, NULL)
INSERT [dbo].[tai_khoan_nguoi_dung] ([id], [ten_tai_khoan], [mat_khau], [id_chuc_vu], [trang_thai]) VALUES (4, N'user4', N'password4', 1, NULL)
INSERT [dbo].[tai_khoan_nguoi_dung] ([id], [ten_tai_khoan], [mat_khau], [id_chuc_vu], [trang_thai]) VALUES (5, N'user5', N'password5', 2, NULL)
SET IDENTITY_INSERT [dbo].[tai_khoan_nguoi_dung] OFF
GO
SET IDENTITY_INSERT [dbo].[thong_tin_tai_khoan] ON 

INSERT [dbo].[thong_tin_tai_khoan] ([id], [ho_ten], [dia_chi], [so_cccd], [so_dien_thoai], [email], [id_tai_khoan], [trang_thai]) VALUES (1, N'Nguyễn Văn A', N'Số 1, Đường ABC, Hà Nội', N'123456789012', N'0901234567', N'user1@domain.com', 1, NULL)
INSERT [dbo].[thong_tin_tai_khoan] ([id], [ho_ten], [dia_chi], [so_cccd], [so_dien_thoai], [email], [id_tai_khoan], [trang_thai]) VALUES (2, N'Phan Thị B', N'Số 2, Đường XYZ, Hồ Chí Minh', N'234567890123', N'0912345678', N'user2@domain.com', 2, NULL)
INSERT [dbo].[thong_tin_tai_khoan] ([id], [ho_ten], [dia_chi], [so_cccd], [so_dien_thoai], [email], [id_tai_khoan], [trang_thai]) VALUES (3, N'Đặng Minh C', N'Số 3, Đường DEF, Đà Nẵng', N'345678901234', N'0923456789', N'user3@domain.com', 3, NULL)
INSERT [dbo].[thong_tin_tai_khoan] ([id], [ho_ten], [dia_chi], [so_cccd], [so_dien_thoai], [email], [id_tai_khoan], [trang_thai]) VALUES (4, N'Lê Thị D', N'Số 4, Đường GHI, Hải Phòng', N'456789012345', N'0934567890', N'user4@domain.com', 4, NULL)
INSERT [dbo].[thong_tin_tai_khoan] ([id], [ho_ten], [dia_chi], [so_cccd], [so_dien_thoai], [email], [id_tai_khoan], [trang_thai]) VALUES (5, N'Trần Quốc E', N'Số 5, Đường JKL, Cần Thơ', N'567890123456', N'0945678901', N'user5@domain.com', 5, NULL)
SET IDENTITY_INSERT [dbo].[thong_tin_tai_khoan] OFF
GO
SET IDENTITY_INSERT [dbo].[voucher] ON 

INSERT [dbo].[voucher] ([id], [ma_voucher], [so_luong], [thoi_gian_hen_ket], [so_tien_toi_da], [dieu_kien_ap_dung], [so_tien_ap_dung], [phan_tram_ap_dung], [thoi_gian_ap_dung], [trang_thai]) VALUES (1, N'SUMMER10', 100, CAST(N'2024-12-31T00:00:00.000' AS DateTime), 500000, 300000, 100000, NULL, CAST(N'2024-11-17T02:30:54.513' AS DateTime), NULL)
INSERT [dbo].[voucher] ([id], [ma_voucher], [so_luong], [thoi_gian_hen_ket], [so_tien_toi_da], [dieu_kien_ap_dung], [so_tien_ap_dung], [phan_tram_ap_dung], [thoi_gian_ap_dung], [trang_thai]) VALUES (2, N'WINTER20', 50, CAST(N'2024-11-30T00:00:00.000' AS DateTime), 200000, 1500000, NULL, 0.2, CAST(N'2024-11-17T02:30:54.513' AS DateTime), NULL)
INSERT [dbo].[voucher] ([id], [ma_voucher], [so_luong], [thoi_gian_hen_ket], [so_tien_toi_da], [dieu_kien_ap_dung], [so_tien_ap_dung], [phan_tram_ap_dung], [thoi_gian_ap_dung], [trang_thai]) VALUES (3, N'DISCOUNT5', 200, CAST(N'2024-12-15T00:00:00.000' AS DateTime), 100000, 100000, 50000, NULL, CAST(N'2024-11-17T02:30:54.513' AS DateTime), NULL)
INSERT [dbo].[voucher] ([id], [ma_voucher], [so_luong], [thoi_gian_hen_ket], [so_tien_toi_da], [dieu_kien_ap_dung], [so_tien_ap_dung], [phan_tram_ap_dung], [thoi_gian_ap_dung], [trang_thai]) VALUES (4, N'BLACKFRIDAY50', 30, CAST(N'2024-11-25T00:00:00.000' AS DateTime), 1000000, 2000000, NULL, 0.5, CAST(N'2024-11-17T02:30:54.513' AS DateTime), NULL)
INSERT [dbo].[voucher] ([id], [ma_voucher], [so_luong], [thoi_gian_hen_ket], [so_tien_toi_da], [dieu_kien_ap_dung], [so_tien_ap_dung], [phan_tram_ap_dung], [thoi_gian_ap_dung], [trang_thai]) VALUES (5, N'NEWYEAR25', 150, CAST(N'2025-01-01T00:00:00.000' AS DateTime), 500000, 1500000, 300000, NULL, CAST(N'2024-11-17T02:30:54.513' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[voucher] OFF
GO
/****** Object:  Index [uq_id_tai_khoan]    Script Date: 17/11/2024 2:35:59 SA ******/
ALTER TABLE [dbo].[gio_hang] ADD  CONSTRAINT [uq_id_tai_khoan] UNIQUE NONCLUSTERED 
(
	[id_tai_khoan] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [uq_gio_hang_spct]    Script Date: 17/11/2024 2:35:59 SA ******/
ALTER TABLE [dbo].[gio_hang_chi_tiet] ADD  CONSTRAINT [uq_gio_hang_spct] UNIQUE NONCLUSTERED 
(
	[id_gio_hang] ASC,
	[id_spct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[card_do_hoa] ADD  DEFAULT ((1)) FOR [trang_thai]
GO
ALTER TABLE [dbo].[hoa_don] ADD  DEFAULT ((0)) FOR [trang_thai_thanh_toan]
GO
ALTER TABLE [dbo].[o_luu_tru] ADD  DEFAULT ((1)) FOR [trang_thai]
GO
ALTER TABLE [dbo].[ram] ADD  DEFAULT ((1)) FOR [trang_thai]
GO
ALTER TABLE [dbo].[gio_hang]  WITH CHECK ADD  CONSTRAINT [fk_id_tai_khoan_gio_hang] FOREIGN KEY([id_tai_khoan])
REFERENCES [dbo].[tai_khoan_nguoi_dung] ([id])
GO
ALTER TABLE [dbo].[gio_hang] CHECK CONSTRAINT [fk_id_tai_khoan_gio_hang]
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_gio_hang] FOREIGN KEY([id_gio_hang])
REFERENCES [dbo].[gio_hang] ([id])
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet] CHECK CONSTRAINT [fk_id_gio_hang]
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_spct] FOREIGN KEY([id_spct])
REFERENCES [dbo].[san_pham_chi_tiet] ([id])
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet] CHECK CONSTRAINT [fk_id_spct]
GO
ALTER TABLE [dbo].[hinh_anh]  WITH CHECK ADD  CONSTRAINT [fk_id_san_pham] FOREIGN KEY([id_san_pham])
REFERENCES [dbo].[san_pham] ([id])
GO
ALTER TABLE [dbo].[hinh_anh] CHECK CONSTRAINT [fk_id_san_pham]
GO
ALTER TABLE [dbo].[hoa_don]  WITH CHECK ADD  CONSTRAINT [fk_id_cua_hang] FOREIGN KEY([id_cua_hang])
REFERENCES [dbo].[cua_hang] ([id])
GO
ALTER TABLE [dbo].[hoa_don] CHECK CONSTRAINT [fk_id_cua_hang]
GO
ALTER TABLE [dbo].[hoa_don]  WITH CHECK ADD  CONSTRAINT [fk_id_hinh_thuc_thanh_toan] FOREIGN KEY([hinh_thuc_thanh_toan])
REFERENCES [dbo].[hinh_thuc_thanh_toan] ([id])
GO
ALTER TABLE [dbo].[hoa_don] CHECK CONSTRAINT [fk_id_hinh_thuc_thanh_toan]
GO
ALTER TABLE [dbo].[hoa_don]  WITH CHECK ADD  CONSTRAINT [fk_id_ttkh_hd] FOREIGN KEY([id_ttkh])
REFERENCES [dbo].[thong_tin_tai_khoan] ([id])
GO
ALTER TABLE [dbo].[hoa_don] CHECK CONSTRAINT [fk_id_ttkh_hd]
GO
ALTER TABLE [dbo].[hoa_don]  WITH CHECK ADD  CONSTRAINT [fk_id_voucher] FOREIGN KEY([id_voucher])
REFERENCES [dbo].[voucher] ([id])
GO
ALTER TABLE [dbo].[hoa_don] CHECK CONSTRAINT [fk_id_voucher]
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_hoa_don] FOREIGN KEY([id_hoa_don])
REFERENCES [dbo].[hoa_don] ([id])
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet] CHECK CONSTRAINT [fk_id_hoa_don]
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_san_pham_chi_tiet] FOREIGN KEY([id_san_pham_chi_tiet])
REFERENCES [dbo].[san_pham_chi_tiet] ([id])
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet] CHECK CONSTRAINT [fk_id_san_pham_chi_tiet]
GO
ALTER TABLE [dbo].[san_pham]  WITH CHECK ADD  CONSTRAINT [fk_id_card_do_hoa] FOREIGN KEY([id_card_do_hoa])
REFERENCES [dbo].[card_do_hoa] ([id])
GO
ALTER TABLE [dbo].[san_pham] CHECK CONSTRAINT [fk_id_card_do_hoa]
GO
ALTER TABLE [dbo].[san_pham]  WITH CHECK ADD  CONSTRAINT [fk_id_chat_lieu] FOREIGN KEY([id_chat_lieu])
REFERENCES [dbo].[chat_lieu] ([id])
GO
ALTER TABLE [dbo].[san_pham] CHECK CONSTRAINT [fk_id_chat_lieu]
GO
ALTER TABLE [dbo].[san_pham]  WITH CHECK ADD  CONSTRAINT [fk_id_loai] FOREIGN KEY([id_loai])
REFERENCES [dbo].[loai_san_pham] ([id])
GO
ALTER TABLE [dbo].[san_pham] CHECK CONSTRAINT [fk_id_loai]
GO
ALTER TABLE [dbo].[san_pham]  WITH CHECK ADD  CONSTRAINT [fk_id_nguon_nhap] FOREIGN KEY([id_nguon_nhap])
REFERENCES [dbo].[nguon_nhap] ([id])
GO
ALTER TABLE [dbo].[san_pham] CHECK CONSTRAINT [fk_id_nguon_nhap]
GO
ALTER TABLE [dbo].[san_pham]  WITH CHECK ADD  CONSTRAINT [fk_kich_thuoc_laptop] FOREIGN KEY([kich_thuoc_laptop_id])
REFERENCES [dbo].[kich_thuoc_laptop] ([id])
GO
ALTER TABLE [dbo].[san_pham] CHECK CONSTRAINT [fk_kich_thuoc_laptop]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_cpu] FOREIGN KEY([id_cpu])
REFERENCES [dbo].[cpu] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_id_cpu]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_gpu] FOREIGN KEY([id_gpu])
REFERENCES [dbo].[gpu] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_id_gpu]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_man_hinh] FOREIGN KEY([id_man_hinh])
REFERENCES [dbo].[man_hinh] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_id_man_hinh]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_o_luu_tru] FOREIGN KEY([id_o_luu_tru])
REFERENCES [dbo].[o_luu_tru] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_id_o_luu_tru]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_ram] FOREIGN KEY([id_ram])
REFERENCES [dbo].[ram] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_id_ram]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_sp] FOREIGN KEY([id_sp])
REFERENCES [dbo].[san_pham] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_id_sp]
GO
ALTER TABLE [dbo].[tai_khoan_nguoi_dung]  WITH CHECK ADD  CONSTRAINT [fk_id_chuc_vu] FOREIGN KEY([id_chuc_vu])
REFERENCES [dbo].[chuc_vu] ([id])
GO
ALTER TABLE [dbo].[tai_khoan_nguoi_dung] CHECK CONSTRAINT [fk_id_chuc_vu]
GO
ALTER TABLE [dbo].[thong_tin_tai_khoan]  WITH CHECK ADD  CONSTRAINT [fk_id_tai_khoan] FOREIGN KEY([id_tai_khoan])
REFERENCES [dbo].[tai_khoan_nguoi_dung] ([id])
GO
ALTER TABLE [dbo].[thong_tin_tai_khoan] CHECK CONSTRAINT [fk_id_tai_khoan]
GO
ALTER TABLE [dbo].[voucher]  WITH CHECK ADD  CONSTRAINT [chk_voucher] CHECK  (([so_tien_ap_dung] IS NOT NULL AND [phan_tram_ap_dung] IS NULL OR [so_tien_ap_dung] IS NULL AND [phan_tram_ap_dung] IS NOT NULL))
GO
ALTER TABLE [dbo].[voucher] CHECK CONSTRAINT [chk_voucher]
GO

USE [AINO]
GO
/****** Object:  Table [dbo].[chuc_vu]    Script Date: 29/10/2024 6:08:26 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[chuc_vu](
	[ma_chuc_vu] [varchar](10) NOT NULL,
	[vai_tro] [nvarchar](30) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ma_chuc_vu] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cpu]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cpu](
	[ma_so] [int] IDENTITY(1000,1) NOT NULL,
	[hang_san_xuat] [nvarchar](20) NOT NULL,
	[kien_truc_cong_nghe] [nvarchar](30) NULL,
	[toc_do_toi_thieu] [int] NULL,
	[toc_do_toi_da] [int] NULL,
	[so_nhan] [int] NULL,
	[so_luong] [int] NULL,
	[bo_nho_dem] [int] NULL,
	[ten] [varchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ma_so] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[don_hang]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[don_hang](
	[id] [int] IDENTITY(1000,1) NOT NULL,
	[id_nguoi_dung] [int] NULL,
	[tong_tien] [decimal](19, 4) NOT NULL,
	[thoi_gian_thanh_toan] [datetime] NULL,
	[hinh_thuc_thanh_toan] [nvarchar](15) NOT NULL,
	[dia_chi_nhan_hang] [nvarchar](255) NOT NULL,
	[sdt] [varchar](15) NOT NULL,
	[ma_phieu_gui] [varchar](15) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[gio_hang]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[gio_hang](
	[id] [int] IDENTITY(1000,1) NOT NULL,
	[id_don_hang] [int] NULL,
	[so_luong] [int] NOT NULL,
	[thanh_tien] [decimal](19, 4) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[gpu]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[gpu](
	[ma_so] [int] IDENTITY(1000,1) NOT NULL,
	[hang_san_xuat] [nvarchar](20) NOT NULL,
	[xung_nhip_toi_thieu] [int] NULL,
	[xung_nhip_toi_da] [int] NULL,
	[vram] [int] NULL,
	[dien_ap] [int] NULL,
	[kien_truc_cong_nghe] [nvarchar](30) NULL,
	[ten] [nvarchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ma_so] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hinh_anh]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hinh_anh](
	[id] [int] IDENTITY(1000,1) NOT NULL,
	[link_hinh_anh] [nvarchar](255) NULL,
	[id_san_pham] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[loai_san_pham]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[loai_san_pham](
	[ma_loai] [varchar](10) NOT NULL,
	[ten_loai] [nvarchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ma_loai] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[man_hinh]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[man_hinh](
	[ma_so] [int] IDENTITY(1000,1) NOT NULL,
	[kich_thuoc] [decimal](3, 1) NULL,
	[do_phan_giai] [varchar](20) NULL,
	[tan_so_quet] [int] NULL,
	[tam_nen] [varchar](10) NULL,
	[do_sang] [int] NULL,
	[ty_le_man_hinh] [varchar](10) NULL,
	[do_phu_mau] [decimal](3, 1) NULL,
PRIMARY KEY CLUSTERED 
(
	[ma_so] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[nguon_nhap]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[nguon_nhap](
	[ma_nha_cung_ung] [varchar](10) NOT NULL,
	[ten_nha_cung_ung] [nvarchar](30) NOT NULL,
	[sdt] [varchar](15) NOT NULL,
	[email] [varchar](30) NOT NULL,
	[dia_chi] [nvarchar](255) NOT NULL,
	[ghi_chu] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[ma_nha_cung_ung] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[o_luu_tru]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[o_luu_tru](
	[ma_so] [int] IDENTITY(1000,1) NOT NULL,
	[dung_luong] [int] NULL,
	[loai_o_cung] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[ma_so] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ram]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ram](
	[ma_so] [int] IDENTITY(1000,1) NOT NULL,
	[dung_luong] [int] NULL,
	[toc_do] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ma_so] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[san_pham]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[san_pham](
	[id] [int] IDENTITY(1000,1) NOT NULL,
	[ma_loai] [varchar](10) NULL,
	[ma_nha_cung_ung] [varchar](10) NULL,
	[ten_san_pham] [nvarchar](50) NOT NULL,
	[hang_san_xuat] [nvarchar](20) NOT NULL,
	[nam_san_xuat] [int] NOT NULL,
	[trong_luong] [decimal](3, 2) NOT NULL,
	[hinh_anh] [nvarchar](255) NULL,
	[mau_sac] [nvarchar](15) NOT NULL,
	[chat_lieu] [nvarchar](15) NOT NULL,
	[gioi_thieu] [nvarchar](255) NULL,
	[thoi_han_bao_hanh] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[san_pham_chi_tiet]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[san_pham_chi_tiet](
	[ma_dinh_danh] [varchar](20) NOT NULL,
	[so_luong] [int] NOT NULL,
	[trang_thai] [nvarchar](20) NOT NULL,
	[don_gia] [decimal](19, 4) NOT NULL,
	[id_gio_hang] [int] NULL,
	[id_sp] [int] NULL,
	[ma_so_ram] [int] NULL,
	[ma_so_o_luu_tru] [int] NULL,
	[ma_so_man_hinh] [int] NULL,
	[ma_so_cpu] [int] NULL,
	[ma_so_gpu] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ma_dinh_danh] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tai_khoan_nguoi_dung]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tai_khoan_nguoi_dung](
	[id] [int] IDENTITY(1000,1) NOT NULL,
	[ten_tai_khoan] [varchar](20) NOT NULL,
	[mat_khau] [varchar](20) NOT NULL,
	[email] [varchar](30) NOT NULL,
	[ma_chuc_vu] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[voucher]    Script Date: 29/10/2024 6:08:27 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[voucher](
	[id] [int] IDENTITY(1000,1) NOT NULL,
	[id_don_hang] [int] NULL,
	[ma_voucher] [varchar](10) NOT NULL,
	[giam_gia] [decimal](3, 2) NOT NULL,
	[dieu_kien_ap_dung] [int] NOT NULL,
	[thoi_gian_ap_dung] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[chuc_vu] ([ma_chuc_vu], [vai_tro]) VALUES (N'CV01', N'ADMIN')
INSERT [dbo].[chuc_vu] ([ma_chuc_vu], [vai_tro]) VALUES (N'CV02', N'STAFF')
INSERT [dbo].[chuc_vu] ([ma_chuc_vu], [vai_tro]) VALUES (N'CV03', N'CUSTOMER')
GO
SET IDENTITY_INSERT [dbo].[cpu] ON 

INSERT [dbo].[cpu] ([ma_so], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten]) VALUES (1000, N'Apple', N'ARM', 1100, 1600, 8, 16, 12, N'Apple M2')
INSERT [dbo].[cpu] ([ma_so], [hang_san_xuat], [kien_truc_cong_nghe], [toc_do_toi_thieu], [toc_do_toi_da], [so_nhan], [so_luong], [bo_nho_dem], [ten]) VALUES (1001, N'Intel', N'Tiger Lake', 2200, 4200, 4, 8, 12, N'i7-1165G7')
SET IDENTITY_INSERT [dbo].[cpu] OFF
GO
SET IDENTITY_INSERT [dbo].[gpu] ON 

INSERT [dbo].[gpu] ([ma_so], [hang_san_xuat], [xung_nhip_toi_thieu], [xung_nhip_toi_da], [vram], [dien_ap], [kien_truc_cong_nghe], [ten]) VALUES (1000, N'Apple', 850, 1450, 2, 60, N'M2', N'Apple M2 GPU')
INSERT [dbo].[gpu] ([ma_so], [hang_san_xuat], [xung_nhip_toi_thieu], [xung_nhip_toi_da], [vram], [dien_ap], [kien_truc_cong_nghe], [ten]) VALUES (1001, N'Intel', 1200, 1350, 2, 45, N'Xe', N'Iris Xe Graphics')
SET IDENTITY_INSERT [dbo].[gpu] OFF
GO
SET IDENTITY_INSERT [dbo].[hinh_anh] ON 

INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1000, N'https://i.postimg.cc/J47PBp3b/mbp-16-spaceblack-cto-hero-202310.jpg', 1000)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1001, N'https://i.postimg.cc/zB1kD7XH/surface-laptop-4-pl-07-R5-FACIAL-768x768.jpg', 1001)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1002, N'https://i.postimg.cc/vTBrBHkC/HP-Spectre-x360-1.jpg', 1002)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1003, N'https://i.postimg.cc/7hzqkSX6/umcrxcnsm2br1itju6gvundeb9s6tf364734.avif', 1003)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1004, N'https://i.postimg.cc/J0D9XmBd/notebook-xps-15-9530-t-black-gallery-1.avif', 1004)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1005, N'https://i.postimg.cc/zGKpgv2g/Acer-Swift-5-1.webp', 1005)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1006, N'https://i.postimg.cc/268xMwkQ/Asus-Zen-Book-14-1.png', 1006)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1007, N'https://i.postimg.cc/sxM4DgZ1/Razer-Blade-15-1.jpg', 1007)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1008, N'https://i.postimg.cc/9XkBgZv9/Mac-Book-Air-M2-1.webp', 1008)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1009, N'https://i.postimg.cc/t4QNpyRC/Dell-Inspiron-14-1.jpg', 1009)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1010, N'https://i.postimg.cc/Z5NGfTn8/Mac-Book-Pro-16-2.jpg', 1000)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1011, N'https://i.postimg.cc/WpfxTDJm/Mac-Book-Pro-16-3.jpg', 1001)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1012, N'https://i.postimg.cc/N04PVLcH/Mac-Book-Pro-16-4.jpg', 1002)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1013, N'https://i.postimg.cc/mgWXg7Z9/Mac-Book-Pro-16-5.jpg', 1003)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1014, N'https://i.postimg.cc/cHCTbmhp/Mac-Book-Pro-16-6.jpg', 1004)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1015, N'https://i.postimg.cc/DZ3LqPDQ/Dell-XPS-15-2.jpg', 1005)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1016, N'https://i.postimg.cc/NM8Tbrq3/Dell-XPS-15-3.jpg', 1006)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1017, N'https://i.postimg.cc/cCs3z4dr/Dell-XPS-15-4.jpg', 1007)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1018, N'https://i.postimg.cc/XqQ56Svx/Dell-XPS-15-5.jpg', 1008)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1019, N'https://i.postimg.cc/CLxDH1v2/Dell-XPS-15-6.jpg', 1009)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1020, N'https://i.postimg.cc/qvXLMR7M/HP-Spectre-x360-2.jpg', 1000)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1021, N'https://i.postimg.cc/dQyGV1HP/HP-Spectre-x360-3.jpg', 1001)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1022, N'https://i.postimg.cc/vTb8y32m/HP-Spectre-x360-4.jpg', 1002)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1023, N'https://i.postimg.cc/Y0r7ZjjG/HP-Spectre-x360-5.jpg', 1003)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1024, N'https://i.postimg.cc/wTbz4qzM/HP-Spectre-x360-6.jpg', 1004)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1025, N'https://i.postimg.cc/gj8MVKG3/Lenovo-Think-Pad-X1-Carbon-2.webp', 1005)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1026, N'https://i.postimg.cc/MpWsBRNj/Lenovo-Think-Pad-X1-Carbon-3.webp', 1006)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1027, N'https://i.postimg.cc/Hx73mtcF/Lenovo-Think-Pad-X1-Carbon-4.webp', 1007)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1028, N'https://i.postimg.cc/L6VDm554/Lenovo-Think-Pad-X1-Carbon-5.webp', 1008)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1029, N'https://i.postimg.cc/Hs3wfNvV/Lenovo-Think-Pad-X1-Carbon-6.webp', 1009)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1030, N'https://i.postimg.cc/wTszPKjk/Microsoft-Surface-Laptop-4-2.webp', 1000)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1031, N'https://i.postimg.cc/3x5hQLyQ/Microsoft-Surface-Laptop-4-3.webp', 1001)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1032, N'https://i.postimg.cc/sgYrjpSQ/Microsoft-Surface-Laptop-4-4.webp', 1002)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1033, N'https://i.postimg.cc/pdPtppY0/Microsoft-Surface-Laptop-4-5.webp', 1003)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1034, N'https://i.postimg.cc/ZRMk7jkg/Microsoft-Surface-Laptop-4-6.webp', 1004)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1035, N'https://i.postimg.cc/bYSNXS6b/Acer-Swift-5-2.webp', 1005)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1036, N'https://i.postimg.cc/d0SvpJr4/Acer-Swift-5-3.webp', 1006)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1037, N'https://i.postimg.cc/bvdfQ4Wb/Acer-Swift-5-4.jpg', 1007)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1038, N'https://i.postimg.cc/G3vwJF7M/Acer-Swift-5-5.webp', 1008)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1039, N'https://i.postimg.cc/MG1brpC8/Asus-Zen-Book-14-2.png', 1009)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1040, N'https://i.postimg.cc/mr3Cy69L/Asus-Zen-Book-14-3.png', 1000)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1041, N'https://i.postimg.cc/kMY8sS2b/Asus-Zen-Book-14-4.png', 1001)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1042, N'https://i.postimg.cc/hPHmWqb4/Asus-Zen-Book-14-5.png', 1002)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1043, N'https://i.postimg.cc/gJSwM92W/Asus-Zen-Book-14-6.png', 1003)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1044, N'https://i.postimg.cc/pd08S5s4/Razer-Blade-15-2.jpg', 1004)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1045, N'https://i.postimg.cc/zBVWYDMB/Razer-Blade-15-3.jpg', 1005)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1046, N'https://i.postimg.cc/L5P1hCmF/Razer-Blade-15-4.jpg', 1006)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1047, N'https://i.postimg.cc/8z4rFrgc/Razer-Blade-15-5.jpg', 1007)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1048, N'https://i.postimg.cc/CK6B7T1V/Razer-Blade-15-6.jpg', 1008)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1049, N'https://i.postimg.cc/15HzMhCY/Mac-Book-Air-M2-2.webp', 1009)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1050, N'https://i.postimg.cc/s2BDVBVt/Mac-Book-Air-M2-3.webp', 1000)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1051, N'https://i.postimg.cc/yxKVXvFH/Mac-Book-Air-M2-4.webp', 1001)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1052, N'https://i.postimg.cc/7ZRwQxgX/Mac-Book-Air-M2-5.webp', 1002)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1053, N'https://i.postimg.cc/ZqyZG1Hm/Mac-Book-Air-M2-6.webp', 1003)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1054, N'https://i.postimg.cc/4dgCrnnv/Dell-Inspiron-14-2.jpg', 1004)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1055, N'https://i.postimg.cc/RhSkZ87N/Dell-Inspiron-14-3.jpg', 1005)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1056, N'https://i.postimg.cc/prsghZCk/Dell-Inspiron-14-4.jpg', 1006)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1057, N'https://i.postimg.cc/SQV0vS48/Dell-Inspiron-14-5.jpg', 1007)
INSERT [dbo].[hinh_anh] ([id], [link_hinh_anh], [id_san_pham]) VALUES (1058, N'https://i.postimg.cc/653ssk6P/Dell-Inspiron-14-6.jpg', 1008)
SET IDENTITY_INSERT [dbo].[hinh_anh] OFF
GO
INSERT [dbo].[loai_san_pham] ([ma_loai], [ten_loai]) VALUES (N'LSP01', N'Máy tính xách tay')
GO
SET IDENTITY_INSERT [dbo].[man_hinh] ON 

INSERT [dbo].[man_hinh] ([ma_so], [kich_thuoc], [do_phan_giai], [tan_so_quet], [tam_nen], [do_sang], [ty_le_man_hinh], [do_phu_mau]) VALUES (1000, CAST(14.0 AS Decimal(3, 1)), N'3024x1964', 60, N'IPS', 500, N'16:10', CAST(10.0 AS Decimal(3, 1)))
INSERT [dbo].[man_hinh] ([ma_so], [kich_thuoc], [do_phan_giai], [tan_so_quet], [tam_nen], [do_sang], [ty_le_man_hinh], [do_phu_mau]) VALUES (1001, CAST(13.3 AS Decimal(3, 1)), N'1920x1080', 60, N'IPS', 400, N'16:9', CAST(10.0 AS Decimal(3, 1)))
INSERT [dbo].[man_hinh] ([ma_so], [kich_thuoc], [do_phan_giai], [tan_so_quet], [tam_nen], [do_sang], [ty_le_man_hinh], [do_phu_mau]) VALUES (1002, CAST(14.0 AS Decimal(3, 1)), N'3024x1964', 60, N'IPS', 500, N'16:10', CAST(10.0 AS Decimal(3, 1)))
INSERT [dbo].[man_hinh] ([ma_so], [kich_thuoc], [do_phan_giai], [tan_so_quet], [tam_nen], [do_sang], [ty_le_man_hinh], [do_phu_mau]) VALUES (1003, CAST(13.3 AS Decimal(3, 1)), N'1920x1080', 60, N'IPS', 400, N'16:9', CAST(10.0 AS Decimal(3, 1)))
SET IDENTITY_INSERT [dbo].[man_hinh] OFF
GO
INSERT [dbo].[nguon_nhap] ([ma_nha_cung_ung], [ten_nha_cung_ung], [sdt], [email], [dia_chi], [ghi_chu]) VALUES (N'NCC01', N'Công ty A', N'0909112233', N'contact@companya.com', N'789 Đường DEF, TP.HCM', NULL)
INSERT [dbo].[nguon_nhap] ([ma_nha_cung_ung], [ten_nha_cung_ung], [sdt], [email], [dia_chi], [ghi_chu]) VALUES (N'NCC02', N'Công ty B', N'0909445566', N'contact@companyb.com', N'321 Đường GHI, Hà Nội', NULL)
GO
SET IDENTITY_INSERT [dbo].[o_luu_tru] ON 

INSERT [dbo].[o_luu_tru] ([ma_so], [dung_luong], [loai_o_cung]) VALUES (1000, 512, N'SSD NVMe')
INSERT [dbo].[o_luu_tru] ([ma_so], [dung_luong], [loai_o_cung]) VALUES (1001, 1024, N'SSD NVMe')
SET IDENTITY_INSERT [dbo].[o_luu_tru] OFF
GO
SET IDENTITY_INSERT [dbo].[ram] ON 

INSERT [dbo].[ram] ([ma_so], [dung_luong], [toc_do]) VALUES (1000, 16, 3200)
INSERT [dbo].[ram] ([ma_so], [dung_luong], [toc_do]) VALUES (1001, 32, 3600)
SET IDENTITY_INSERT [dbo].[ram] OFF
GO
SET IDENTITY_INSERT [dbo].[san_pham] ON 

INSERT [dbo].[san_pham] ([id], [ma_loai], [ma_nha_cung_ung], [ten_san_pham], [hang_san_xuat], [nam_san_xuat], [trong_luong], [hinh_anh], [mau_sac], [chat_lieu], [gioi_thieu], [thoi_han_bao_hanh]) VALUES (1000, N'LSP01', N'NCC01', N'MacBook Pro 16', N'Apple', 2023, CAST(2.00 AS Decimal(3, 2)), N'https://i.postimg.cc/50c6zDRf/1.webp', N'Xám', N'Nhôm', N'Laptop mạnh mẽ dành cho chuyên nghiệp', CAST(N'2025-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[san_pham] ([id], [ma_loai], [ma_nha_cung_ung], [ten_san_pham], [hang_san_xuat], [nam_san_xuat], [trong_luong], [hinh_anh], [mau_sac], [chat_lieu], [gioi_thieu], [thoi_han_bao_hanh]) VALUES (1001, N'LSP01', N'NCC02', N'Dell XPS 15', N'Dell', 2022, CAST(1.80 AS Decimal(3, 2)), N'https://i.postimg.cc/3xvywKtt/2.webp', N'Bạc', N'Hợp kim', N'Laptop dành cho người dùng di động', CAST(N'2024-12-31T00:00:00.000' AS DateTime))
INSERT [dbo].[san_pham] ([id], [ma_loai], [ma_nha_cung_ung], [ten_san_pham], [hang_san_xuat], [nam_san_xuat], [trong_luong], [hinh_anh], [mau_sac], [chat_lieu], [gioi_thieu], [thoi_han_bao_hanh]) VALUES (1002, N'LSP01', N'NCC01', N'HP Spectre x360', N'HP', 2023, CAST(1.30 AS Decimal(3, 2)), N'https://i.postimg.cc/DyKsb4bt/3.webp', N'Đen', N'Nhôm', N'Laptop 2-in-1 với màn hình cảm ứng', CAST(N'2024-11-01T00:00:00.000' AS DateTime))
INSERT [dbo].[san_pham] ([id], [ma_loai], [ma_nha_cung_ung], [ten_san_pham], [hang_san_xuat], [nam_san_xuat], [trong_luong], [hinh_anh], [mau_sac], [chat_lieu], [gioi_thieu], [thoi_han_bao_hanh]) VALUES (1003, N'LSP01', N'NCC02', N'Lenovo ThinkPad X1 Carbon', N'Lenovo', 2022, CAST(1.20 AS Decimal(3, 2)), N'https://i.postimg.cc/qvDxnMry/5.png', N'Đen', N'Carbon', N'Laptop bền bỉ cho doanh nhân', CAST(N'2024-10-01T00:00:00.000' AS DateTime))
INSERT [dbo].[san_pham] ([id], [ma_loai], [ma_nha_cung_ung], [ten_san_pham], [hang_san_xuat], [nam_san_xuat], [trong_luong], [hinh_anh], [mau_sac], [chat_lieu], [gioi_thieu], [thoi_han_bao_hanh]) VALUES (1004, N'LSP01', N'NCC01', N'Microsoft Surface Laptop 4', N'Microsoft', 2023, CAST(1.25 AS Decimal(3, 2)), N'https://i.postimg.cc/9fGz2JL0/6.webp', N'Bạc', N'Hợp kim', N'Laptop mỏng nhẹ với hiệu suất mạnh mẽ', CAST(N'2025-03-01T00:00:00.000' AS DateTime))
INSERT [dbo].[san_pham] ([id], [ma_loai], [ma_nha_cung_ung], [ten_san_pham], [hang_san_xuat], [nam_san_xuat], [trong_luong], [hinh_anh], [mau_sac], [chat_lieu], [gioi_thieu], [thoi_han_bao_hanh]) VALUES (1005, N'LSP01', N'NCC02', N'Acer Swift 5', N'Acer', 2022, CAST(1.10 AS Decimal(3, 2)), N'https://i.postimg.cc/YSqqcMLn/7.png', N'Vàng', N'Hợp kim', N'Laptop siêu nhẹ và tiện dụng', CAST(N'2024-09-01T00:00:00.000' AS DateTime))
INSERT [dbo].[san_pham] ([id], [ma_loai], [ma_nha_cung_ung], [ten_san_pham], [hang_san_xuat], [nam_san_xuat], [trong_luong], [hinh_anh], [mau_sac], [chat_lieu], [gioi_thieu], [thoi_han_bao_hanh]) VALUES (1006, N'LSP01', N'NCC01', N'Asus ZenBook 14', N'Asus', 2023, CAST(1.40 AS Decimal(3, 2)), N'https://i.postimg.cc/Y01hr8rb/9.png', N'Xanh', N'Nhôm', N'Laptop siêu mỏng với hiệu năng mạnh mẽ', CAST(N'2025-02-01T00:00:00.000' AS DateTime))
INSERT [dbo].[san_pham] ([id], [ma_loai], [ma_nha_cung_ung], [ten_san_pham], [hang_san_xuat], [nam_san_xuat], [trong_luong], [hinh_anh], [mau_sac], [chat_lieu], [gioi_thieu], [thoi_han_bao_hanh]) VALUES (1007, N'LSP01', N'NCC02', N'Razer Blade 15', N'Razer', 2022, CAST(2.10 AS Decimal(3, 2)), N'https://i.postimg.cc/XvJLrByw/10.webp', N'Đen', N'Hợp kim', N'Laptop chơi game cao cấp', CAST(N'2024-12-01T00:00:00.000' AS DateTime))
INSERT [dbo].[san_pham] ([id], [ma_loai], [ma_nha_cung_ung], [ten_san_pham], [hang_san_xuat], [nam_san_xuat], [trong_luong], [hinh_anh], [mau_sac], [chat_lieu], [gioi_thieu], [thoi_han_bao_hanh]) VALUES (1008, N'LSP01', N'NCC01', N'MacBook Air M2', N'Apple', 2023, CAST(1.25 AS Decimal(3, 2)), N'https://i.postimg.cc/mDSgKk85/11.webp', N'Xám', N'Nhôm', N'Laptop siêu nhẹ và tiết kiệm pin', CAST(N'2025-04-01T00:00:00.000' AS DateTime))
INSERT [dbo].[san_pham] ([id], [ma_loai], [ma_nha_cung_ung], [ten_san_pham], [hang_san_xuat], [nam_san_xuat], [trong_luong], [hinh_anh], [mau_sac], [chat_lieu], [gioi_thieu], [thoi_han_bao_hanh]) VALUES (1009, N'LSP01', N'NCC02', N'Dell Inspiron 14', N'Dell', 2022, CAST(1.50 AS Decimal(3, 2)), N'https://i.postimg.cc/WpKBTjCW/12.webp', N'Bạc', N'Hợp kim', N'Laptop phổ thông cho mọi đối tượng', CAST(N'2024-08-01T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[san_pham] OFF
GO
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT101', 10, N'Còn hàng', CAST(30000000.0000 AS Decimal(19, 4)), NULL, 1000, 1000, 1000, 1002, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT1017666666', 10, N'Còn hàng', CAST(30000000.0000 AS Decimal(19, 4)), NULL, 1000, 1000, 1000, 1002, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT102', 8, N'Còn hàng', CAST(35000000.0000 AS Decimal(19, 4)), NULL, 1000, 1001, 1001, 1003, 1001, 1001)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT103', 15, N'Còn hàng', CAST(25000000.0000 AS Decimal(19, 4)), NULL, 1001, 1000, 1000, 1001, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT104', 12, N'Còn hàng', CAST(27000000.0000 AS Decimal(19, 4)), NULL, 1001, 1001, 1001, 1002, 1001, 1001)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT105', 20, N'Còn hàng', CAST(24000000.0000 AS Decimal(19, 4)), NULL, 1002, 1000, 1000, 1003, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT106', 5, N'Còn hàng', CAST(32000000.0000 AS Decimal(19, 4)), NULL, 1002, 1001, 1001, 1001, 1001, 1001)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT107', 7, N'Còn hàng', CAST(22000000.0000 AS Decimal(19, 4)), NULL, 1003, 1000, 1000, 1002, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT108', 6, N'Còn hàng', CAST(34000000.0000 AS Decimal(19, 4)), NULL, 1003, 1001, 1001, 1003, 1001, 1001)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT109', 9, N'Còn hàng', CAST(28000000.0000 AS Decimal(19, 4)), NULL, 1004, 1000, 1000, 1001, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT110', 11, N'Còn hàng', CAST(29000000.0000 AS Decimal(19, 4)), NULL, 1004, 1001, 1001, 1002, 1001, 1001)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT111', 8, N'Còn hàng', CAST(30000000.0000 AS Decimal(19, 4)), NULL, 1005, 1000, 1000, 1003, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT112', 10, N'Còn hàng', CAST(31000000.0000 AS Decimal(19, 4)), NULL, 1005, 1001, 1001, 1001, 1001, 1001)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT113', 14, N'Còn hàng', CAST(27000000.0000 AS Decimal(19, 4)), NULL, 1006, 1000, 1000, 1002, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT114', 12, N'Còn hàng', CAST(33000000.0000 AS Decimal(19, 4)), NULL, 1006, 1001, 1001, 1003, 1001, 1001)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT115', 5, N'Còn hàng', CAST(25000000.0000 AS Decimal(19, 4)), NULL, 1007, 1000, 1000, 1001, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT116', 6, N'Còn hàng', CAST(36000000.0000 AS Decimal(19, 4)), NULL, 1007, 1001, 1001, 1002, 1001, 1001)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT117', 10, N'Còn hàng', CAST(28000000.0000 AS Decimal(19, 4)), NULL, 1008, 1000, 1000, 1003, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT118', 15, N'Còn hàng', CAST(30000000.0000 AS Decimal(19, 4)), NULL, 1008, 1001, 1001, 1001, 1001, 1001)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT119', 7, N'Còn hàng', CAST(26000000.0000 AS Decimal(19, 4)), NULL, 1009, 1000, 1000, 1002, 1000, 1000)
INSERT [dbo].[san_pham_chi_tiet] ([ma_dinh_danh], [so_luong], [trang_thai], [don_gia], [id_gio_hang], [id_sp], [ma_so_ram], [ma_so_o_luu_tru], [ma_so_man_hinh], [ma_so_cpu], [ma_so_gpu]) VALUES (N'SPCT120', 9, N'Còn hàng', CAST(32000000.0000 AS Decimal(19, 4)), NULL, 1009, 1001, 1001, 1003, 1001, 1001)
GO
SET IDENTITY_INSERT [dbo].[tai_khoan_nguoi_dung] ON 

INSERT [dbo].[tai_khoan_nguoi_dung] ([id], [ten_tai_khoan], [mat_khau], [email], [ma_chuc_vu]) VALUES (1000, N'admin', N'123456', N'admin@example.com', N'CV01')
INSERT [dbo].[tai_khoan_nguoi_dung] ([id], [ten_tai_khoan], [mat_khau], [email], [ma_chuc_vu]) VALUES (1001, N'nhanvien01', N'pass123', N'nv01@example.com', N'CV02')
INSERT [dbo].[tai_khoan_nguoi_dung] ([id], [ten_tai_khoan], [mat_khau], [email], [ma_chuc_vu]) VALUES (1002, N'khachhang01', N'customer01', N'kh01@example.com', N'CV03')
INSERT [dbo].[tai_khoan_nguoi_dung] ([id], [ten_tai_khoan], [mat_khau], [email], [ma_chuc_vu]) VALUES (1003, N'khachhang02', N'customer02', N'kh02@example.com', N'CV03')
SET IDENTITY_INSERT [dbo].[tai_khoan_nguoi_dung] OFF
GO
SET IDENTITY_INSERT [dbo].[voucher] ON 

INSERT [dbo].[voucher] ([id], [id_don_hang], [ma_voucher], [giam_gia], [dieu_kien_ap_dung], [thoi_gian_ap_dung]) VALUES (1000, NULL, N'VC1001', CAST(0.10 AS Decimal(3, 2)), 20000000, CAST(N'2023-12-01T00:00:00.000' AS DateTime))
INSERT [dbo].[voucher] ([id], [id_don_hang], [ma_voucher], [giam_gia], [dieu_kien_ap_dung], [thoi_gian_ap_dung]) VALUES (1001, NULL, N'VC1002', CAST(0.05 AS Decimal(3, 2)), 25000000, CAST(N'2023-11-15T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[voucher] OFF
GO
ALTER TABLE [dbo].[don_hang]  WITH CHECK ADD  CONSTRAINT [fk_id_nguoi_dung] FOREIGN KEY([id_nguoi_dung])
REFERENCES [dbo].[tai_khoan_nguoi_dung] ([id])
GO
ALTER TABLE [dbo].[don_hang] CHECK CONSTRAINT [fk_id_nguoi_dung]
GO
ALTER TABLE [dbo].[gio_hang]  WITH CHECK ADD  CONSTRAINT [fk_id_don_hang_2] FOREIGN KEY([id_don_hang])
REFERENCES [dbo].[don_hang] ([id])
GO
ALTER TABLE [dbo].[gio_hang] CHECK CONSTRAINT [fk_id_don_hang_2]
GO
ALTER TABLE [dbo].[hinh_anh]  WITH CHECK ADD  CONSTRAINT [fk_hinh_anh_sp] FOREIGN KEY([id_san_pham])
REFERENCES [dbo].[san_pham] ([id])
GO
ALTER TABLE [dbo].[hinh_anh] CHECK CONSTRAINT [fk_hinh_anh_sp]
GO
ALTER TABLE [dbo].[san_pham]  WITH CHECK ADD  CONSTRAINT [fk_ma_loai] FOREIGN KEY([ma_loai])
REFERENCES [dbo].[loai_san_pham] ([ma_loai])
GO
ALTER TABLE [dbo].[san_pham] CHECK CONSTRAINT [fk_ma_loai]
GO
ALTER TABLE [dbo].[san_pham]  WITH CHECK ADD  CONSTRAINT [fk_ma_nha_cung_ung] FOREIGN KEY([ma_nha_cung_ung])
REFERENCES [dbo].[nguon_nhap] ([ma_nha_cung_ung])
GO
ALTER TABLE [dbo].[san_pham] CHECK CONSTRAINT [fk_ma_nha_cung_ung]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_gio_hang] FOREIGN KEY([id_gio_hang])
REFERENCES [dbo].[gio_hang] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_id_gio_hang]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_id_sp] FOREIGN KEY([id_sp])
REFERENCES [dbo].[san_pham] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_id_sp]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_ma_so_cpu] FOREIGN KEY([ma_so_cpu])
REFERENCES [dbo].[cpu] ([ma_so])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_ma_so_cpu]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_ma_so_gpu] FOREIGN KEY([ma_so_gpu])
REFERENCES [dbo].[gpu] ([ma_so])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_ma_so_gpu]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_ma_so_man_hinh] FOREIGN KEY([ma_so_man_hinh])
REFERENCES [dbo].[man_hinh] ([ma_so])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_ma_so_man_hinh]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_ma_so_o_luu_tru] FOREIGN KEY([ma_so_o_luu_tru])
REFERENCES [dbo].[o_luu_tru] ([ma_so])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_ma_so_o_luu_tru]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [fk_ma_so_ram] FOREIGN KEY([ma_so_ram])
REFERENCES [dbo].[ram] ([ma_so])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [fk_ma_so_ram]
GO
ALTER TABLE [dbo].[tai_khoan_nguoi_dung]  WITH CHECK ADD  CONSTRAINT [fk_ma_chuc_vu] FOREIGN KEY([ma_chuc_vu])
REFERENCES [dbo].[chuc_vu] ([ma_chuc_vu])
GO
ALTER TABLE [dbo].[tai_khoan_nguoi_dung] CHECK CONSTRAINT [fk_ma_chuc_vu]
GO
ALTER TABLE [dbo].[voucher]  WITH CHECK ADD  CONSTRAINT [fk_id_don_hang_1] FOREIGN KEY([id_don_hang])
REFERENCES [dbo].[don_hang] ([id])
GO
ALTER TABLE [dbo].[voucher] CHECK CONSTRAINT [fk_id_don_hang_1]
GO

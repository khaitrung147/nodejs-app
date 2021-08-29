-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 27, 2021 lúc 10:27 AM
-- Phiên bản máy phục vụ: 10.4.13-MariaDB
-- Phiên bản PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `asm`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `catalog`
--

CREATE TABLE `catalog` (
  `id_loaisp` int(11) NOT NULL,
  `ten_loaisp` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `an_hien` tinyint(4) NOT NULL DEFAULT 1,
  `thu_tu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `catalog`
--

INSERT INTO `catalog` (`id_loaisp`, `ten_loaisp`, `an_hien`, `thu_tu`) VALUES
(1, 'Cà phê', 1, 2),
(2, 'Bánh ngọt', 1, 2),
(3, 'Smoothies', 1, 2),
(4, 'Trà hoa quả', 1, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id_khachhang` int(11) NOT NULL,
  `ho_khachhang` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `ten_khachhang` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `matkhau` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sdt` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `phan_quyen` int(11) NOT NULL,
  `trang_thai` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`id_khachhang`, `ho_khachhang`, `ten_khachhang`, `email`, `matkhau`, `sdt`, `phan_quyen`, `trang_thai`) VALUES
(4, 'Nguyễn Trần Trung', 'Khải', 'khaintt9a1@gmail.com', '$2b$10$Per0cngXmf78tan7mn/o3.w5tEOySfoCKicHm0dV0xrwXepABqsZ6', '0929441157', 0, 0),
(5, 'Nguyễn ', 'Khải', 'khaitrung147@gmail.com', '$2b$10$9f51rOYINO2OPxp4H/N9kOF7utJNret5iqSC7ZGMnV0.euNYFHSBi', '0909090998', 0, 0),
(6, 'Nguyễn ', 'găgawg', 'khainttps12314@fpt.edu.vn', '$2b$10$3T4VK.c.mZPOG327ci4ER.xgN9LCv0G1TQdfusOIwjj/zfemNUt..', '0929441157', 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detail_order`
--

CREATE TABLE `detail_order` (
  `id_donhang` int(11) NOT NULL,
  `id_sanpham` int(11) NOT NULL,
  `soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id_donhang` int(11) NOT NULL,
  `id_khachhang` int(11) NOT NULL,
  `thanh_tien` double NOT NULL,
  `thoi_gian` datetime NOT NULL,
  `ten_nguoinhan` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `dia_chi` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `sdt` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `ghi_chu` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
  `tinh_trang` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id_sanpham` int(11) NOT NULL,
  `id_loaisp` int(11) NOT NULL,
  `ten_sanpham` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `gia_sanpham` double NOT NULL,
  `ngayramat` date NOT NULL,
  `hinh_sanpham` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `thu_tu` int(11) NOT NULL DEFAULT 2,
  `an_hien` tinyint(4) NOT NULL DEFAULT 1,
  `view` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id_sanpham`, `id_loaisp`, `ten_sanpham`, `gia_sanpham`, `ngayramat`, `hinh_sanpham`, `thu_tu`, `an_hien`, `view`) VALUES
(1, 1, 'Latte', 55000, '2021-02-01', 'https://i.imgur.com/ckSKF7v.jpg', 2, 1, 200),
(3, 1, 'Espresso', 55000, '2021-02-02', 'https://i.imgur.com/hMJy7vD.jpg', 2, 1, 765),
(4, 2, 'Tiramisu', 25000, '2021-02-10', 'https://i.imgur.com/zrCkrel.jpg', 2, 1, 11),
(5, 1, 'Cappuccino', 55000, '2021-02-18', 'https://i.imgur.com/4QBoz5W.jpg', 2, 1, 987),
(6, 1, 'Caramel Macchiato', 50000, '2021-02-19', 'https://i.imgur.com/JaGnKCS.jpg', 2, 1, 214),
(7, 2, 'Bánh cà phê phô mai', 25000, '2021-02-15', 'https://i.imgur.com/Fcbiswk.jpg', 2, 1, 234234),
(8, 2, 'Caramel Phomai', 25000, '2021-02-28', 'https://i.imgur.com/Bh4eMNi.jpg', 2, 1, 24),
(9, 2, 'Bông lan cuộn trà xanh', 25000, '2021-02-06', 'https://i.imgur.com/9EGG5Zm.jpg', 2, 1, 23525),
(10, 3, 'Smoothies chuối dừa', 55000, '2021-02-07', 'https://i.imgur.com/liBrWZ4.jpg', 2, 1, 464),
(11, 3, 'Smoothies dâu việt', 55000, '2021-02-20', 'https://i.imgur.com/6AIxa0r.jpg', 2, 1, 3446),
(12, 3, 'Smoothies dâu', 55000, '2021-02-21', 'https://i.imgur.com/9H8GeQz.jpg', 2, 1, 232),
(13, 3, 'Smoothies dâu chuối', 55000, '2021-02-24', 'https://i.imgur.com/Q0YafT4.jpg', 2, 1, 445),
(14, 4, 'Trà phúc bồn tử', 40000, '2021-02-26', 'https://i.imgur.com/nmxrMcy.jpg', 2, 1, 6768),
(15, 4, 'Trà việt quất', 40000, '2021-02-10', 'https://i.imgur.com/7PTKZKy.jpg', 2, 1, 23242),
(16, 4, 'Trà vải', 40000, '2021-02-01', 'https://i.imgur.com/qqjPunx.jpg', 2, 1, 98),
(17, 4, 'Trà dâu tây', 40000, '2021-02-20', 'https://i.imgur.com/bffjkQP.jpg', 2, 1, 4545);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id_loaisp`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id_khachhang`);

--
-- Chỉ mục cho bảng `detail_order`
--
ALTER TABLE `detail_order`
  ADD KEY `fk_idDonhang` (`id_donhang`),
  ADD KEY `fk_idSanpham` (`id_sanpham`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_donhang`),
  ADD KEY `fk_idKhachhang` (`id_khachhang`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_sanpham`),
  ADD KEY `fk_idsp` (`id_loaisp`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `catalog`
--
ALTER TABLE `catalog`
  MODIFY `id_loaisp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `id_khachhang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id_donhang` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id_sanpham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `detail_order`
--
ALTER TABLE `detail_order`
  ADD CONSTRAINT `fk_idDonhang` FOREIGN KEY (`id_donhang`) REFERENCES `orders` (`id_donhang`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idSanpham` FOREIGN KEY (`id_sanpham`) REFERENCES `product` (`id_sanpham`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_idKhachhang` FOREIGN KEY (`id_khachhang`) REFERENCES `customer` (`id_khachhang`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_idsp` FOREIGN KEY (`id_loaisp`) REFERENCES `catalog` (`id_loaisp`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

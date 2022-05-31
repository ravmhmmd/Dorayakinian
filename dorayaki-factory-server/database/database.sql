-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Nov 2021 pada 06.39
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pabrikdorayaki`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bahan_baku`
--

CREATE TABLE `bahan_baku` (
  `ID_bahan_baku` int(11) NOT NULL,
  `nama_bahan` varchar(35) NOT NULL,
  `stok` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `bahan_baku`
--

INSERT INTO `bahan_baku` (`ID_bahan_baku`, `nama_bahan`, `stok`) VALUES
(1, 'coklat', 100);

-- --------------------------------------------------------

--
-- Struktur dari tabel `log_request`
--

CREATE TABLE `log_request` (
  `ID_log_request` int(11) NOT NULL,
  `ID_request` int(11) NOT NULL,
  `waktu_respon` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `hasil_request` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `request`
--

CREATE TABLE `request` (
  `ID_request` int(11) NOT NULL,
  `ID_resep` int(11) NOT NULL,
  `jumlah_tambah` int(11) NOT NULL,
  `waktu_request` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `resep`
--

CREATE TABLE `resep` (
  `ID_resep` int(11) NOT NULL,
  `nama_resep` varchar(35) NOT NULL,
  `deskripsi_resep` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `resep`
--

INSERT INTO `resep` (`ID_resep`, `nama_resep`, `deskripsi_resep`) VALUES
(1, 'dorayakan', 'dorayaki coklat'),
(2, 'dorayaya', 'alsdaflsd');

-- --------------------------------------------------------

--
-- Struktur dari tabel `resep_bahan`
--

CREATE TABLE `resep_bahan` (
  `ID_resep_bahan` int(11) NOT NULL,
  `ID_resep` int(11) NOT NULL,
  `ID_bahan_baku` int(11) NOT NULL,
  `jumlah_bahan` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `resep_bahan`
--

INSERT INTO `resep_bahan` (`ID_resep_bahan`, `ID_resep`, `ID_bahan_baku`, `jumlah_bahan`) VALUES
(1, 1, 1, 1),
(2, 2, 1, 10);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `ID_user` int(11) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `pass` varchar(11) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`ID_user`, `nama`, `pass`, `email`) VALUES
(1, 'bintang', 'bintang', ''),
(2, 'dorayaya', '$2b$10$DQmg', 'dora@mgai.co');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `bahan_baku`
--
ALTER TABLE `bahan_baku`
  ADD PRIMARY KEY (`ID_bahan_baku`),
  ADD UNIQUE KEY `ID_bahan_baku_2` (`ID_bahan_baku`),
  ADD UNIQUE KEY `nama_bahan` (`nama_bahan`),
  ADD KEY `ID_bahan_baku` (`ID_bahan_baku`,`nama_bahan`);

--
-- Indeks untuk tabel `log_request`
--
ALTER TABLE `log_request`
  ADD PRIMARY KEY (`ID_log_request`),
  ADD UNIQUE KEY `ID_log_request` (`ID_log_request`),
  ADD KEY `ID_request` (`ID_request`);

--
-- Indeks untuk tabel `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`ID_request`),
  ADD UNIQUE KEY `ID_request` (`ID_request`),
  ADD KEY `ID_resep` (`ID_resep`);

--
-- Indeks untuk tabel `resep`
--
ALTER TABLE `resep`
  ADD PRIMARY KEY (`ID_resep`),
  ADD UNIQUE KEY `ID_resep_2` (`ID_resep`),
  ADD UNIQUE KEY `nama_resep_2` (`nama_resep`),
  ADD KEY `nama_resep` (`nama_resep`),
  ADD KEY `ID_resep` (`ID_resep`);

--
-- Indeks untuk tabel `resep_bahan`
--
ALTER TABLE `resep_bahan`
  ADD PRIMARY KEY (`ID_resep_bahan`),
  ADD UNIQUE KEY `ID_resep_bahan` (`ID_resep_bahan`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_user`),
  ADD UNIQUE KEY `ID_user` (`ID_user`),
  ADD UNIQUE KEY `user_2` (`nama`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `user` (`nama`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `bahan_baku`
--
ALTER TABLE `bahan_baku`
  MODIFY `ID_bahan_baku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `log_request`
--
ALTER TABLE `log_request`
  MODIFY `ID_log_request` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `request`
--
ALTER TABLE `request`
  MODIFY `ID_request` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `resep`
--
ALTER TABLE `resep`
  MODIFY `ID_resep` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `resep_bahan`
--
ALTER TABLE `resep_bahan`
  MODIFY `ID_resep_bahan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `ID_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `log_request`
--
ALTER TABLE `log_request`
  ADD CONSTRAINT `log_request_ibfk_1` FOREIGN KEY (`ID_request`) REFERENCES `request` (`ID_request`);

--
-- Ketidakleluasaan untuk tabel `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `request_ibfk_1` FOREIGN KEY (`ID_resep`) REFERENCES `resep` (`ID_resep`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

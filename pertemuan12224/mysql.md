### Sistem Manajemen Penjualan Online:
Membangun database untuk toko online yang mencakup informasi produk, pembeli, pesanan, transaksi, dan manajemen inventaris.

### kita siapkan 5 tabel, produk, pembeli, pesanan, detail_pesanan, transaksi

### tabel produk
CREATE TABLE produk (
  id_produk INT(11) NOT NULL AUTO_INCREMENT,
  nama_produk VARCHAR(255) NOT NULL,
  harga_produk DECIMAL(10,2) NOT NULL,
  deskripsi_produk TEXT,
  stok_produk INT(11) NOT NULL,
  PRIMARY KEY (id_produk)
);

### table pembeli
CREATE TABLE pembeli (
  id_pembeli INT(11) NOT NULL AUTO_INCREMENT,
  nama_pembeli VARCHAR(255) NOT NULL,
  alamat_pembeli TEXT,
  email_pembeli VARCHAR(255),
  PRIMARY KEY (id_pembeli)
);

### table pesanan
CREATE TABLE pesanan (
  id_pesanan INT(11) NOT NULL AUTO_INCREMENT,
  id_pembeli INT(11) NOT NULL,
  tanggal_pesanan DATE NOT NULL,
  status_pesanan ENUM('Belum Dibayar', 'Sudah Dibayar', 'Dikirim', 'Selesai') NOT NULL,
  PRIMARY KEY (id_pesanan),
  FOREIGN KEY (id_pembeli) REFERENCES pembeli(id_pembeli)
);

### table detain_pesanan
CREATE TABLE detail_pesanan (
  id_detail_pesanan INT(11) NOT NULL AUTO_INCREMENT,
  id_pesanan INT(11) NOT NULL,
  id_produk INT(11) NOT NULL,
  jumlah_produk INT(11) NOT NULL,
  PRIMARY KEY (id_detail_pesanan),
  FOREIGN KEY (id_pesanan) REFERENCES pesanan(id_pesanan),
  FOREIGN KEY (id_produk) REFERENCES produk(id_produk)
);

### table transaksi
CREATE TABLE transaksi (
  id_transaksi INT(11) NOT NULL AUTO_INCREMENT,
  id_pesanan INT(11) NOT NULL,
  total_transaksi DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id_transaksi),
  FOREIGN KEY (id_pesanan) REFERENCES pesanan(id_pesanan)
);

### menambahkan beberapa data ke masing" tabel

### data produk
INSERT INTO produk (nama_produk, harga_produk, deskripsi_produk, stok_produk) VALUES
('Produk 1', 10000, 'Deskripsi produk 1', 10),
('Produk 2', 20000, 'Deskripsi produk 2', 5),
('Produk 3', 30000, 'Deskripsi produk 3', 20);

### pembeli
INSERT INTO pembeli (nama_pembeli, alamat_pembeli, email_pembeli) VALUES
('Pembeli 1', 'Alamat pembeli 1', 'email1@example.com'),
('Pembeli 2', 'Alamat pembeli 2', 'email2@example.com');

### pesanan
INSERT INTO pesanan (id_pembeli, tanggal_pesanan, status_pesanan) VALUES
(1, '2022-01-01', 'Belum Dibayar');

### detail_pesanan
INSERT INTO detail_pesanan (id_pesanan, id_produk, jumlah_produk) VALUES
(1, 1, 2),
(1, 2, 1);

### transaksi
INSERT INTO transaksi (id_pesanan, total_transaksi) VALUES
(1, 30000);

### contoh query JOIN untuk mendapatkan detail pesanan dan transaksi berdasarkan id_pesanan:
SELECT p.id_pesanan, p.tanggal_pesanan, p.status_pesanan, d.id_produk, d.jumlah_produk, t.total_transaksi
FROM pesanan p
JOIN detail_pesanan d ON p.id_pesanan = d.id_pesanan
JOIN transaksi t ON p.id_pesanan = t.id_pesanan;

Hasil dari query di atas akan menampilkan detail pesanan dan transaksi berdasarkan id_pesanan. Contohnya seperti ini:

id_pesanan	tanggal_pesanan	status_pesanan	id_produk	jumlah_produk	total_transaksi
    1	       2022-01-01	Belum Dibayar       1	        2	            30000
    1	       2022-01-01	Belum Dibayar	    2	        1	            30000

### Tambah foreign key id_pembeli pada tabel pesanan dengan clause ON DELETE SET NULL dan ON UPDATE CASCADE:
ALTER TABLE pesanan
ADD CONSTRAINT pesanan_ibfk_1 FOREIGN KEY (id_pembeli) REFERENCES pembeli(id) ON DELETE SET NULL ON UPDATE CASCADE;

### left join
SELECT *
FROM produk
LEFT JOIN detail_pesanan ON produk.id_produk = detail_pesanan.id_produk;

### right join
SELECT *
FROM produk
RIGHT JOIN detail_pesanan ON produk.id_produk = detail_pesanan.id_produk;

### inner join
SELECT *
FROM produk
JOIN detail_pesanan ON produk.id_produk = detail_pesanan.id_produk
JOIN pesanan ON detail_pesanan.id_pesanan = pesanan.id_pesanan;

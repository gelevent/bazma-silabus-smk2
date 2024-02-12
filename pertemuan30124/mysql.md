## pertemuan 1

### Cara membuat database baru

Buka terminal lalu ketikan 'mysql -u root -p' dan passwordnya (enter aja)

default mysql adalah usernamenya: root dan passwordnya: (kosong)

### Cara membuat databse baru

Berikan kode yang ada di module dengan cara create database nama_database

### Membuat table baru di smk_personal

Disini akan membuat table baru dengan nama biodata dan kolumnya;
-id, mama, kelas, jurusan, umur;

-id int primary key not null,
-nama varchar(255),
-kelas varchar(10),
-jurusan varchar(255),
-umur int

### Lihat data table biodata

Dapat menggunakan query desc biodata;
Dapat juga menggunakan select * form biodata;

### Membuat data baru pada table biodata

Disini kita akan menambahkan data baru dengan query berikut:

insert into biodata (id, nama, kelas, jurusan, umur) values (1,"Attar", "XI", "SIJA", 16);

Bagaimana jika ingin melihat datanya? select * from biodata

* = mengambil seluruh data tipenya

+----+-------+-------+---------+------+
| id | nama  | kelas | jurusan | umur |
+----+-------+-------+---------+------+
|  1 | Attar | XI    | SIJA    |   16 |
+----+-------+-------+---------+------+

### Mencari data berdasarkan id

Disini menggunakan query:

select * from biodata where id = ?


+----+-------+-------+---------+------+
| id | nama  | kelas | jurusan | umur |
+----+-------+-------+---------+------+
|  1 | Attar | XI    | SIJA    |   16 |
+----+-------+-------+---------+------+

kita akan memfilter data berdasarkan kelas

select * from biodata where kelas = "XI";

memfilter berdasarkan jurusan 

select * from biodata where jurusan = "SIJA";

### update data berdasarkan id

Disini kita dapat mengubah data berdasarkan  id. Misalnya kita ingin mengganti nama Attar menjadi Aulia dan kelasnya juga menjadi X. Berikut

UPDATE biodata SET NAMA="namanya" WHERE id=1

### hapus berdasarkan id

Dengan menggunakan query seperti ini

DELETE FROM biodata WHERE id=1;

## order by 
descending +> dimulai dari tulisan z-a /id / created_at (tanggal_buat)
ascending > dimulai dari a-z / tanggal_buat / id

...sql
<!-- mengambil jurusa dari z-a -->
select * from sekolah order by jurusan desc;

<!-- mengambil jurusan dari z-a -->
select  * from sekolah order by jurusan asc;

### limit 
digunakan untuk membatasi jumlah baris yang dihasilkan oleh suatu perintah SQL. Misalnya, Anda ingin menampilkan hanya lima orang pendaftar terbaik:
digunakan untuk membuat pagination, jika ingin menampilkan hanya beberapa baris saja. Misalnya kita ingin menampilkan 5 orang siswa terbaru yang ada di database
digunakan untuk membuat halaman, jika di gunakan dengan offset maka akan menampilkan halaman ke -2 dan seterus
digunakan untuk membuat halaman. Misalnya jika ingin menampilkan 5 orang siswa per halaman, maka gunakan query berikut :
select * from sekolah limit 5;

select * from tabel
where condition
limit limitation;

select from sekolahan where jurusan = "RPL" ORDER BY id desc limit 5;

### like select * from tabel
where field like "custome%" ; 

### in
select * from sekolah where jurusan in ("sija","rpl");

<!-- insert into perpustakaan (judul, kategori, deskripsi, penulis, penerbit, tahun_terbit, jumlah_halaman, batas_umur, isbn, harga) values ("Petualangan", "Novel", "kisah petualangan", "Budi Ceria", "BacaBuku Junior", 2022, 50, 8, 54321, 65000), ("Pulang", "Novel", "kisah penuh liku-liku", "Siti Aminah", "Pustaka", 2021, 280, 16, 52349, 95000),("Ilmuwan Terhebat", "Non-Fiksi", "bidang ilmu pengetahuan", "Dr.Ilmawan", "Pintar Publishing", 2023, 300, 18, 12345, 135000),("Sejarawan Terhebat", "Non-Fiksi", "bidang ilmu pengetahuan", "Dr.Ilmawan", "Pintar Publishing", 2022, 257, 18, 123456, 135000),("Manusia Terhebat", "Fiksi", "Cerita seorang dani", "Danianwas", "Gramedia", 2023, 398, 17, 12375, 99000);

insert into perpustakaan (judul, kategori, deskripsi, penulis, penerbit, tahun_terbit, jumlah_halaman, batas_umur, isbn, harga) values ("Sejarawan", "Non-Fiksi", "bidang ilmu pengetahuan", "Dr.Ilmawan", "Pintar Publishing", 2022, 257, 18, 123456, 135000),("Manusia Terhebat", "Fiksi", "Cerita seorang dani", "Danianwas", "Gramedia", 2023, 398, 17, 12375, 99000);
create table perpustakaan(
    -> id int primary key auto_increment not null,
    -> judul varchar(255),
    -> kategori varchar(255),
    -> deskripsi text,
    -> penulis varchar(255),
    -> penerbit varchar(255),
    -> tahun_terbit int,
    -> jumlah_halaman int,
    -> batas_umur int,
    -> isbn int,           
    -> harga int); -->




1. Filtering data (where)
 SELECT * FROM perpustakaan WHERE kategori = 'Novel';

2. Cari data dengan (like) = judul, kategori, penulis
SELECT * FROM perpustakaan WHERE judul LIKE '%petualangan%' OR kategori LIKE '%pulang%' OR penulis LIKE '%budi%';

3. Data id Desc
SELECT * FROM perpustakaan ORDER BY id DESC;

4. Filtering jumlah halaman >= & < & = (bebas)
SELECT * FROM perpustakaan WHERE jumlah_halaman >= 200 AND jumlah_halaman < 300;

5. Tahun terbit >= 2020 =< 2026
SELECT * FROM perpustakaan WHERE tahun_terbit >= 2020 AND tahun_terbit <= 2026;

6. Batas Umur dimulai dari 8 s/d 20
SELECT * FROM perpustakaan WHERE batas_umur >= 8 AND batas_umur <= 20;

7. Harga dimulai dari desc / asc
SELECT * FROM perpustakaan ORDER BY harga DESC; -- atau ORDER BY harga ASC;

8. Harga range dari bebas - bebas (1  - 100000000)
SELECT * FROM perpustakaan WHERE harga >= 1 AND harga <= 100000000;

9. Harus ada update delete

UPDATE perpustakaan SET harga = 120000 WHERE id = 1;

DELETE FROM perpustakaan WHERE id = 1;










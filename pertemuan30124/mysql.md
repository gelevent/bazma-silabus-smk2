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
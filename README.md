# Elemes-Food

Aplikasi elemes-food rating makanan menyediakan tampilan interaktif dengan beberapa warna 
yang tampil dengan interaksi visual antar user untuk menyediakan nuansa positif design.

### **Fitur Utama:**
- Fitur 1: Menampilkan Beberapa makanan dengan rating tinggi menggunakan fitur rekomendasi.
- Fitur 2: Mencari Kategori makanan dari berbagai jenis untuk mendapatkan makanan dengan slera yang diginkan.

---

## **Prasyarat**

Sebelum menjalankan proyek ini, pastikan Anda sudah menginstal perangkat berikut:

- **Node.js** - [Instalasi Node.js](https://nodejs.org/)
- **NPM** - (NPM sudah termasuk dalam instalasi Node.js)
- **NexJs** - Jika menggunakan 

---

## **Instalasi**

Langkah-langkah untuk menginstal proyek ini di komputer lokal Anda:

1. **Clone repositori ke mesin lokal:**

    ```bash
    git clone https://github.com/IhratPramudya/elemes-teknikal-interview.git
    cd repository-name
    ```

2. **Instal dependensi:**

    Jika Anda menggunakan **npm**:
    ```bash
    npm install
    ```


3. **Menjalankan Proyek:**

    Setelah berhasil menginstal semua dependensi, jalankan proyek dengan perintah berikut:

    Jika Anda menggunakan **npm**:
    ```bash
    npm start
    ```

    Jika ingin menjalankan mode development **npm**:
    ```bash
    npm run dev
    ```

---

## **Penggunaan**

Deskripsikan bagaimana cara menggunakan aplikasi atau program ini setelah instalasi selesai.

Contoh penggunaan atau demonstrasi aplikasi:

1. **Buka aplikasi:** Di browser Anda, buka alamat lokal atau port yang sesuai seperti `http://localhost:3000`.
2. **Langkah-langkah penggunaannya:** Cara melihat responsive aplikasi web yaitu pertama klik kanan dan memilih inspect.

### **U**
![Demo](assets/images/Inspect.png)

3. Kemudian kita buka icon berbentuk hp dan mulai memilih ukuran layar yang ingin digunakan.

![Demo](assets/images/devtools.png)


## **Teknologi yang Digunakan**

Sebutkan teknologi yang digunakan dalam proyek ini.

- **React.js** - Untuk membangun antarmuka pengguna.
- **Node.js** - Untuk menjalankan backend.
- **TailwindCSS** - Untuk styling frontend.
- **NextJs** - Sebagai basis data.

---

## **Gambar**


### **Mendeploy aplikasi elemes-food kedalam heroku**

1. Tambahkan Script -p $PORT dan  "heroku-postbuild" di dalam package-json.
2. Lihat seprti gambar di bawah ini:

![Gambar Demo](assets/images/package.png)

3. kemudian buat repository Github dengan nama yang diginkan kemudian tekan tombol "create repository"

![Gambar Demo](assets/images/package.png)

4. Lanjutkan dengan langkah penggunaan git di lokal komputer jika git sudah terpasang di lokal komputer

**Penggunaan git dilokal komputer:**

    1. Inisialisasi Git dalam folder proyek lokal Anda **git**:
    ```bash
    git init
    ```
    2. Salin URL repositori GitHub Anda (misalnya https://github.com/username/my-project.git).

    3. Ketikkan perintah berikut untuk menambahkan remote:

    ```bash
    git remote add origin https://github.com/username/my-project.git
    ```
    5. Menambahkan File ke Staging Area Setelah Git terinisialisasi dan remote repository ditambahkan, Anda perlu menambahkan file proyek Anda ke staging area agar Git tahu file mana yang akan di-commit.
    ```bash
    git add .
    ```

    6. Commit Perubahan Setelah menambahkan file ke staging area, Anda perlu melakukan commit untuk menyimpan perubahan tersebut di repositori lokal Anda.

       ```bash
    git commit -m "Initial commit"
    ```

    7. Mengirim (Push) Perubahan ke GitHub Sekarang, Anda siap untuk mengirim perubahan yang telah di-commit ke GitHub.

       ```bash
    git push -u origin main
    ```

    8. Memverifikasi Perubahan di GitHub Setelah melakukan push, buka repositori GitHub Anda, dan Anda akan melihat file proyek Anda sudah ada di sana.
# AR Coffee Menu ☕

**Aplikasi WebAR Visualisasi Menu Kopi 3D Menggunakan A-Frame dan AR.js**

---

## Deskripsi

Aplikasi WebAR ini memungkinkan pengguna melihat menu kopi dalam bentuk objek 3D melalui browser smartphone. Aplikasi menggunakan teknologi Augmented Reality berbasis web (WebAR) sehingga tidak memerlukan instalasi APK, Unity, atau perangkat khusus.

**Studi Kasus:**
Coffee shop ingin memberikan pengalaman visual interaktif kepada pelanggan. Pelanggan membuka aplikasi melalui browser HP, mengizinkan akses kamera, lalu mengarahkan kamera ke marker Hiro yang ada di meja/menu. Aplikasi menampilkan objek 3D gelas kopi beserta informasi menu secara real-time.

---

## Teknologi yang Digunakan

| Teknologi | Keterangan |
|-----------|------------|
| **HTML5** | Struktur halaman web |
| **CSS3** | Styling dan responsive design |
| **JavaScript** | Logika interaksi dan kontrol |
| **A-Frame 1.4** | Framework WebXR berbasis Three.js untuk membuat scene 3D |
| **AR.js** | Library AR untuk tracking marker di browser |
| **Marker Hiro** | Marker bawaan AR.js untuk deteksi posisi |

---

## Fitur

- ✅ Halaman landing dengan deskripsi dan tombol "Mulai AR"
- ✅ Mode AR yang membuka kamera smartphone
- ✅ Marker tracking menggunakan AR.js (Hiro marker)
- ✅ Objek 3D gelas kopi muncul di atas marker
- ✅ Teks nama menu, harga, dan deskripsi
- ✅ Tombol **Rotate** untuk memutar objek 3D
- ✅ Tombol **Next Menu** untuk mengganti menu kopi
- ✅ Tombol **Info** untuk menampilkan/menyembunyikan detail
- ✅ Desain responsive untuk smartphone
- ✅ Bisa dijalankan lokal dengan VS Code Live Server
- ✅ Bisa dideploy ke GitHub Pages atau Netlify

---

## Struktur Folder

```
ar-coffee-menu/
├── index.html          # Halaman landing
├── ar.html             # Halaman AR (kamera + scene 3D)
├── style.css           # Stylesheet utama
├── script.js           # Logika JavaScript
├── assets/
│   ├── models/         # (Opsional) File model 3D .glb
│   ├── markers/        # (Opsional) Custom marker
│   └── images/         # (Opsional) Gambar pendukung
└── README.md           # Dokumentasi ini
```

---

## Cara Menjalankan (Lokal)

### Prasyarat

- Browser modern (Chrome, Edge, Firefox)
- VS Code dengan extension **Live Server**
- Kamera pada device (webcam atau HP)

### Langkah-langkah

1. **Clone atau download** repository ini:
   ```bash
   git clone https://github.com/username/ar-coffee-menu.git
   ```

2. **Buka folder** `ar-coffee-menu` di VS Code.

3. **Jalankan Live Server**:
   - Klik kanan pada `index.html`
   - Pilih **"Open with Live Server"**
   - Browser akan terbuka di `http://127.0.0.1:5500`

4. **Klik tombol "Mulai AR"** pada halaman landing.

5. **Izinkan akses kamera** ketika browser meminta permission.

6. **Arahkan kamera ke marker Hiro** (lihat bagian "Cara Menggunakan Marker" di bawah).

---

## Cara Menggunakan Marker

Aplikasi ini menggunakan **marker Hiro** yang merupakan marker default dari AR.js.

### Mendapatkan Marker Hiro

1. **Cetak marker** dari link berikut:
   - [Download Marker Hiro (PNG)](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)

2. **Atau tampilkan di layar lain:**
   - Buka link marker di HP/laptop/tablet kedua
   - Arahkan kamera device utama ke layar tersebut

3. **Tips cetak:**
   - Cetak ukuran minimal **6 x 6 cm**
   - Gunakan kertas putih, pastikan kontras hitam-putih jelas
   - Jangan lipat atau rusak area hitam marker

### Tampilan Marker Hiro

```
┌─────────────────────┐
│  ███████████████████ │
│  █                 █ │
│  █    H I R O      █ │
│  █                 █ │
│  █   (pattern)     █ │
│  █                 █ │
│  ███████████████████ │
└─────────────────────┘
```

---

## Cara Demo di HP (Smartphone)

### Opsi 1: Jalankan di jaringan lokal (WiFi)

1. Pastikan HP dan laptop terhubung ke **WiFi yang sama**.
2. Jalankan Live Server di VS Code.
3. Cari **IP lokal laptop**:
   ```bash
   # Windows
   ipconfig
   # Cari IPv4 Address, contoh: 192.168.1.100
   ```
4. Buka browser HP, ketik:
   ```
   http://192.168.1.100:5500
   ```
5. Klik "Mulai AR" dan izinkan kamera.

> **Catatan:** Beberapa browser HP memerlukan HTTPS untuk mengakses kamera. Jika kamera tidak terbuka, gunakan Opsi 2.

### Opsi 2: Deploy ke GitHub Pages

1. Buat repository baru di GitHub.
2. Upload semua file `ar-coffee-menu/` ke repository.
3. Pergi ke **Settings → Pages → Source → main → / (root)**.
4. Tunggu deploy selesai, buka URL yang diberikan GitHub.
5. Buka URL tersebut di browser HP.

### Opsi 3: Deploy ke Netlify

1. Buka [netlify.com](https://www.netlify.com/).
2. Drag & drop folder `ar-coffee-menu/` ke Netlify.
3. Netlify akan memberikan URL HTTPS otomatis.
4. Buka URL di browser HP.

---

## Troubleshooting

| Masalah | Solusi |
|---------|--------|
| **Kamera tidak terbuka** | Pastikan browser memiliki izin kamera. Gunakan HTTPS (deploy ke GitHub Pages/Netlify). Chrome di Android memerlukan HTTPS untuk akses kamera. |
| **Marker tidak terdeteksi** | Pastikan marker Hiro dicetak/ditampilkan dengan jelas. Cahaya ruangan cukup terang. Jangan terlalu dekat atau terlalu jauh. |
| **Objek 3D tidak muncul** | Pastikan marker terdeteksi (cek indikator status di kiri atas). Coba refresh halaman. |
| **Halaman blank putih** | Cek koneksi internet (A-Frame dan AR.js dimuat dari CDN). Buka Developer Tools (F12) untuk cek error. |
| **Lambat / lag** | Tutup aplikasi lain di HP. Gunakan browser Chrome terbaru. Pastikan HP mendukung WebGL. |
| **Error CORS** | Jangan buka file HTML langsung dengan `file://`. Gunakan Live Server atau web server. |

---

## Data Menu Kopi

| No | Nama | Harga | Kategori |
|----|------|-------|----------|
| 1 | Espresso | Rp 25.000 | Classic |
| 2 | Cappuccino | Rp 32.000 | Milk Based |
| 3 | Caramel Latte | Rp 38.000 | Signature |
| 4 | Matcha Latte | Rp 35.000 | Non-Coffee |
| 5 | Cold Brew | Rp 30.000 | Iced |

---

## Konsep AR yang Diterapkan

| Konsep | Implementasi |
|--------|-------------|
| **Augmented Reality** | Overlay objek 3D virtual di atas dunia nyata melalui kamera |
| **Marker-based Tracking** | Menggunakan Hiro marker untuk menentukan posisi objek 3D |
| **3D Objects** | Gelas kopi dibentuk dari primitives A-Frame (cylinder, torus, text) |
| **Real-time Rendering** | Objek 3D dirender secara real-time menggunakan Three.js via A-Frame |
| **User Interaction** | Tombol rotate, next menu, dan info untuk interaksi pengguna |
| **AR Control Flow** | Deteksi marker → tampilkan objek → interaksi pengguna → update scene |
| **Camera Integration** | Menggunakan webcam/kamera HP sebagai input AR |

---

## Referensi

- [A-Frame Documentation](https://aframe.io/docs/)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [AR.js GitHub](https://github.com/AR-js-org/AR.js)
- [Hiro Marker](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)

---

## Lisensi

Tugas Mata Kuliah Virtual & Augmented Reality.
Dibuat untuk keperluan akademik.

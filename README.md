# ☕ AR Coffee Experience

**Aplikasi WebAR Visualisasi Menu Kopi 3D — A-Frame + AR.js**

---

## Deskripsi

Aplikasi WebAR ini memungkinkan pengguna melihat menu kopi dalam bentuk objek 3D melalui browser smartphone. Menggunakan teknologi Augmented Reality berbasis web sehingga tidak memerlukan instalasi APK atau perangkat khusus.

Pengguna membuka website, menekan tombol "Mulai AR", mengarahkan kamera ke marker Hiro, dan objek 3D cangkir kopi akan muncul secara real-time.

---

## Fitur

- Landing page modern dengan tema premium coffee
- Mode AR yang membuka kamera smartphone
- Marker-based tracking menggunakan Hiro marker
- Model 3D cangkir kopi (GLB) muncul di atas marker
- Menu kopi interaktif: Espresso, Cappuccino, Caramel Latte, Matcha Latte, Cold Brew
- Tombol **Rotate** untuk memutar objek 3D
- Tombol **Next** untuk mengganti menu kopi
- Tombol **Zoom+** dan **Zoom-** untuk memperbesar/memperkecil objek
- Tombol **Info** untuk menampilkan/menyembunyikan detail menu
- Status marker real-time (terdeteksi/belum)
- Loading state dan error handling untuk kamera
- Responsive design untuk mobile, tablet, dan desktop
- Animasi ringan: floating particles, steam, scroll reveal

---

## Teknologi

| Teknologi | Keterangan |
|-----------|------------|
| HTML5 | Struktur halaman web |
| CSS3 | Styling, animasi, responsive design |
| JavaScript | Logika interaksi dan kontrol AR |
| A-Frame 1.4 | Framework WebXR untuk scene 3D |
| AR.js | Library AR untuk marker tracking |
| GLB Model | Model 3D cangkir kopi |
| Marker Hiro | Marker bawaan AR.js |

---

## Struktur Folder

```
Tugas VAR/
├── index.html          # Halaman landing page
├── ar.html             # Halaman mode AR
├── style.css           # Stylesheet utama
├── script.js           # Logika JavaScript AR
├── assets/
│   ├── models/
│   │   └── coffee_cup.glb  # Model 3D cangkir kopi
│   ├── markers/        # Custom marker (opsional)
│   └── images/         # Gambar pendukung (opsional)
├── docs/               # Dokumentasi project
└── README.md           # Dokumentasi ini
```

---

## Cara Menjalankan (Lokal)

### Prasyarat

- Browser modern (Chrome, Edge, Firefox)
- VS Code dengan extension **Live Server**
- Kamera pada device (webcam atau HP)

### Langkah

1. Clone atau download repository ini.
2. Buka folder project di VS Code.
3. Klik kanan pada `index.html` → **Open with Live Server**.
4. Browser terbuka di `http://127.0.0.1:5500`.
5. Klik tombol **Mulai AR**.
6. Izinkan akses kamera.
7. Arahkan kamera ke marker Hiro.

---

## Cara Menggunakan Marker Hiro

### Mendapatkan Marker

1. **Cetak** dari: [Download Marker Hiro (PNG)](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)
2. **Atau tampilkan** di layar HP/laptop/tablet lain, lalu arahkan kamera ke layar tersebut.

### Tips Cetak

- Ukuran minimal **6 × 6 cm**
- Gunakan kertas putih, kontras hitam-putih jelas
- Jangan lipat atau rusak area hitam marker
- Pencahayaan ruangan cukup terang

---

## Cara Testing di HP (Smartphone)

### Opsi 1: Jaringan Lokal (WiFi)

1. HP dan laptop terhubung ke **WiFi yang sama**.
2. Jalankan Live Server di VS Code.
3. Cari IP lokal laptop: `ipconfig` (Windows) → cari IPv4 Address.
4. Buka browser HP: `http://[IP_LAPTOP]:5500`.
5. Klik "Mulai AR" dan izinkan kamera.

### Opsi 2: Deploy ke GitHub Pages

1. Upload semua file ke repository GitHub.
2. Settings → Pages → Source → main → / (root).
3. Buka URL GitHub Pages di browser HP.

### Opsi 3: Deploy ke Netlify

1. Drag & drop folder project ke [netlify.com](https://www.netlify.com/).
2. Buka URL HTTPS otomatis di browser HP.

---

## Catatan Penting: HTTPS untuk Kamera

Akses kamera di smartphone **memerlukan HTTPS**. Opsi:

- **GitHub Pages** dan **Netlify** otomatis menyediakan HTTPS.
- **Localhost** (`127.0.0.1`) biasanya diizinkan tanpa HTTPS.
- **IP lokal** (`192.168.x.x`) mungkin memerlukan pengaturan tambahan di Chrome flags.

Jika kamera tidak terbuka, pastikan halaman diakses melalui HTTPS.

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

## Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Kamera tidak terbuka | Pastikan HTTPS. Deploy ke GitHub Pages/Netlify. |
| Marker tidak terdeteksi | Cetak/tampilkan marker dengan jelas. Cahaya cukup. Jarak 15–40 cm. |
| Objek 3D tidak muncul | Pastikan marker terdeteksi (cek indikator status). Refresh halaman. |
| Halaman blank | Cek koneksi internet (A-Frame/AR.js dimuat dari CDN). |
| Lambat/lag | Tutup aplikasi lain. Gunakan Chrome terbaru. |

---

## Referensi

- [A-Frame Documentation](https://aframe.io/docs/)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [Hiro Marker](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)

---

## Lisensi

Tugas Mata Kuliah **Virtual & Augmented Reality** — Dibuat untuk keperluan akademik.

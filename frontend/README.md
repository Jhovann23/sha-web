# Sinar Harapan Alumunium — React

Landing page company profile yang dikonversi dari HTML + Tailwind menjadi React + Vite dan CSS biasa.

## Menjalankan proyek

Pastikan Node.js sudah terpasang, lalu buka terminal pada folder proyek:

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat lokal (biasanya `http://localhost:5173`).

Untuk build produksi:

```bash
npm run build
npm run preview
```

## Struktur

```text
sinar-harapan-react/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    └── styles.css
```

## Catatan

- Menu navigasi mobile sudah interaktif menggunakan `useState`.
- Ikon menggunakan `lucide-react`.
- URL gambar dan data kontak masih mengikuti contoh pada HTML awal. Ganti dengan aset, alamat, nomor WhatsApp, dan email perusahaan yang benar sebelum dipublikasikan.
- Gambar saat ini dimuat dari URL eksternal; untuk produksi, sebaiknya simpan aset yang memang dimiliki/diizinkan di folder `public`.

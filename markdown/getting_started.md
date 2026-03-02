# Getting Started

Dokumentasi ini membantu kamu menjalankan dan mengembangkan project portfolio ini secara lokal.

## Ringkasan Project

Project ini adalah website portofolio berbasis:

- HTML
- Tailwind CSS (CLI)
- JavaScript (vanilla)

Halaman utama yang tersedia:

- `index.html` untuk landing/home portfolio
- `page_project.html` untuk daftar project
- `page_documentation.html` untuk dokumentasi berbasis Markdown

## Struktur Folder Penting

- `index.html`: halaman utama
- `page_project.html`: halaman daftar project
- `page_documentation.html`: viewer dokumentasi
- `markdown/`: file dokumentasi `.md`
- `src/input.css`: input Tailwind
- `dist/output.css`: hasil compile Tailwind
- `src/script.js`: interaksi JS halaman

## Prasyarat

Sebelum mulai, pastikan sudah terpasang:

- Node.js (disarankan versi LTS)
- npm
- Browser modern (Chrome/Edge/Firefox)
- Live Server (opsional, direkomendasikan)

## Jalankan Project (Development)

1. Install dependency:

```bash
npm install
```

2. Jalankan Tailwind watcher:

```bash
npm run tw
```

Perintah ini akan compile `src/input.css` ke `dist/output.css` secara otomatis saat ada perubahan.

3. Jalankan halaman dengan server lokal:

- Pakai VS Code Live Server, atau
- server statis lain (contoh `127.0.0.1:5500`)

4. Buka halaman:

- `http://127.0.0.1:5500/index.html`
- `http://127.0.0.1:5500/page_documentation.html`

## Catatan Penting

- Jangan buka halaman dokumentasi via `file://` karena fetch file Markdown bisa gagal.
- Gunakan URL HTTP lokal agar file `.md` dapat dibaca normal.
- Saat menambah dokumen baru, simpan di folder `markdown/` lalu daftarkan di array `docs` di `page_documentation.html`.


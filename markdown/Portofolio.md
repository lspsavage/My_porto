# Portofolio Project

Dokumen ini menjelaskan cara instalasi project, teknologi yang digunakan, dan kapan penggunaannya.

## Tujuan Project

Project ini adalah website portofolio pribadi untuk menampilkan:

- profil diri
- daftar project
- kontak
- dokumentasi internal

## Teknologi yang Dipakai

### 1. HTML

Dipakai untuk struktur halaman:

- `index.html`
- `page_project.html`
- `page_documentation.html`

### 2. Tailwind CSS

Dipakai untuk styling cepat berbasis utility class.

Pada project ini Tailwind digunakan melalui:

- `src/input.css` sebagai input
- `dist/output.css` sebagai hasil build
- script npm `tw` untuk mode watch

### 3. JavaScript (Vanilla)

Dipakai untuk interaksi frontend seperti:

- navbar/hamburger behavior
- efek visual (typing, particles, reveal)
- filter project
- markdown loader di halaman dokumentasi

### 4. Library Frontend via CDN

Dipakai langsung di HTML:

- `marked` untuk render Markdown ke HTML
- `highlight.js` untuk syntax highlight code block
- `typed.js` untuk efek typing
- `tsparticles` untuk background particle
- `scrollreveal` untuk animasi reveal elemen

## Instalasi

### 1. Clone repository

```bash
git clone <url-repo-kamu>
cd My_project
```

### 2. Install dependency Node

```bash
npm install
```

Dependency utama di `package.json`:

- `tailwindcss`
- `postcss`
- `autoprefixer`

### 3. Jalankan Tailwind watch

```bash
npm run tw
```

Perintah ini memonitor perubahan file styling dan update `dist/output.css`.

### 4. Jalankan lewat local server

Direkomendasikan:

- VS Code Live Server

Contoh URL:

- `http://127.0.0.1:5500/index.html`

## Di Mana Saja Dipakai

### Lokal (development)

- untuk pengembangan harian
- testing UI/UX
- testing konten markdown

### Deployment statis

Cocok untuk:

- GitHub Pages
- Netlify
- Vercel (static mode)
- shared hosting statis

Karena project berbasis HTML statis + asset CSS/JS, tidak butuh backend khusus untuk menjalankan fitur utama.

## Alur Kerja Pengembangan yang Disarankan

1. Jalankan `npm run tw`
2. Jalankan local server
3. Edit halaman HTML/CSS/JS
4. Tambah/update dokumentasi di folder `markdown/`
5. Validasi tampilan desktop dan mobile


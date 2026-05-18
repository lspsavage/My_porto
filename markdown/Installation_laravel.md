# Panduan Instalasi Laravel dan Tailwind CSS v4

Panduan ini akan menjelaskan langkah-langkah untuk menginstal Laravel dan Tailwind CSS v4. Asumsi pada panduan ini adalah Anda sudah membuat folder kosong untuk project dan sudah berada di dalam folder tersebut melalui terminal.

## Langkah 1: Install Laravel di Folder Saat Ini

Karena Anda sudah berada di dalam folder project, gunakan tanda titik (`.`) di akhir perintah agar Laravel di-install langsung di dalam folder tersebut (tidak membuat sub-folder baru). Jalankan perintah berikut:

```bash
composer create-project laravel/laravel .
```

## Langkah 2: Install Tailwind CSS & Plugin Vite

Setelah instalasi Laravel selesai, jalankan perintah ini untuk menginstall Tailwind v4 dan plugin Vite-nya:

```bash
npm install tailwindcss @tailwindcss/vite
```

## Langkah 3: Konfigurasi `vite.config.js`

Buka file `vite.config.js` di editor Anda. Tambahkan import dan plugin Tailwind ke dalamnya sehingga bentuknya menjadi seperti ini:

```javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite'; // <--- 1. Tambahkan ini

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(), // <--- 2. Tambahkan ini
    ],
});
```

## Langkah 4: Hubungkan Tailwind ke CSS Utama

Buka file `resources/css/app.css`, hapus isinya (jika ada), dan cukup tuliskan satu baris ini:

```css
@import "tailwindcss";
```

## Langkah 5: Load CSS di HTML / Blade

Buka file tampilan utama Anda, biasanya di `resources/views/welcome.blade.php`. Tambahkan kode `@vite` di dalam tag `<head>` agar desainnya bisa di-render:

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Wajib ditambahkan agar CSS dan JS dari Vite termuat -->
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
  <h1 class="text-3xl font-bold underline text-blue-500">
    Hello Tailwind v4 di Laravel!
  </h1>
</body>
</html>
```

## Langkah 6: Jalankan Project

Anda membutuhkan 2 terminal yang berjalan bersamaan:

Di **Terminal 1**, jalankan Vite (untuk meng-compile otomatis CSS saat ada perubahan):

```bash
npm run dev
```

Buka **Terminal 2**, jalankan server PHP Laravel:

```bash
php artisan serve
```

Sekarang Anda bisa membuka `http://127.0.0.1:8000` di browser. Tailwind CSS v4 sudah berhasil terintegrasi dengan Laravel!

> **Catatan:** Silakan di-copy atau di-save panduan ini untuk referensi ke depannya!

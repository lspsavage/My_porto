# Instalasi Tailwind CSS v4.2.1

Panduan ini menjelaskan langkah-langkah instalasi **Tailwind CSS v4.2.1** pada project berbasis **Node.js** untuk digunakan pada project HTML sederhana.

---

# Prasyarat

Pastikan sistem sudah memiliki:

- Node.js **>= 18**
- npm **>= 9**

Cek versi dengan:

```bash
node -v
npm -v
```

# 1. Membuat Project Baru

Buat folder project:

```bash
mkdir my-tailwind-project
cd my-tailwind-project
```

---

# 2. Inisialisasi Node Project

Buat file `package.json`:

```bash
npm init -y
```

---

# 3. Install Tailwind CSS

Install Tailwind sebagai dependency development:

```bash
npm install -D tailwindcss @tailwindcss/cli
```

Catatan:

Pada **Tailwind v4**, CLI dipisahkan ke package:

```
@tailwindcss/cli
```

---

# 4. Membuat Struktur Project

Contoh struktur project:

```
my-tailwind-project
│
├── src
│   └── input.css
│
├── dist
│   └── output.css
│
├── index.html
├── package.json
└── node_modules
```

Buat folder dan file:

```bash
mkdir src
mkdir dist
touch src/input.css
touch index.html
```

---

# 5. Menambahkan Tailwind ke CSS

Edit file:

```
src/input.css
```

Isi dengan:

```css
@import "tailwindcss";
```

---

# 6. Build Tailwind CSS

Jalankan command berikut:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Penjelasan parameter:

| Parameter | Fungsi                             |
| --------- | ---------------------------------- |
| `-i`      | file CSS input                     |
| `-o`      | file CSS hasil build               |
| `--watch` | rebuild otomatis jika file berubah |

---

# 7. Menggunakan Tailwind di HTML

Edit file:

```
index.html
```

Tambahkan CSS hasil build:

```html
<link rel="stylesheet" href="./dist/output.css" />
```

Contoh penggunaan class Tailwind:

```html
<h1 class="text-3xl font-bold text-blue-500">Hello Tailwind CSS v4</h1>
```

---

# 8. Menjalankan Project

Pastikan command Tailwind berjalan:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Kemudian buka file:

```
index.html
```

di browser.

---

# 9. Konfigurasi Tailwind (Opsional)

Pada Tailwind v4, file konfigurasi **tidak wajib**.

Jika ingin menggunakan konfigurasi, buat file:

```
tailwind.config.js
```

Contoh isi:

```javascript
export default {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

# 10. Tips Pengembangan

Disarankan install extension VS Code:

```
Tailwind CSS IntelliSense
```

Fitur yang didapat:

- Autocomplete class Tailwind
- Preview warna
- Validasi class

---

# Kesimpulan

| Tailwind v3                           | Tailwind v4                       |
| ------------------------------------- | --------------------------------- |
| `npx tailwindcss init` tersedia       | `init` **dihapus**                |
| CLI built-in                          | CLI dipisah ke `@tailwindcss/cli` |
| `@tailwind base/components/utilities` | diganti `@import "tailwindcss"`   |
| config sering dipakai                 | config **opsional**               |

---

# Referensi

- [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

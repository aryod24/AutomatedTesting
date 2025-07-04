# 🎭 Panduan Penggunaan Playwright dengan MCP untuk Testing di v3.maxchat.id

Panduan ini bertujuan untuk memberikan langkah-langkah terstruktur dalam menggunakan Playwright untuk melakukan pengujian terhadap aplikasi yang berjalan di `https://v3.maxchat.id`.

---

## A. Instalasi Awal Playwright

Pertama-tama, pastikan Node.js telah terinstal. Kemudian jalankan perintah berikut di terminal:

```bash
npm init playwright@latest
```

Lalu ikuti wizard untuk memilih:
- Framework: `Playwright Test`
- Bahasa: `TypeScript` (atau JavaScript sesuai preferensi)
- Install browser: `Yes`

📦 Hasil: Struktur direktori `tests/`, `playwright.config.ts`, dan dependensi terinstal.

---

## B. Menggunakan Fitur Recorder

Playwright menyediakan 2 cara merekam interaksi browser:

### 1. Menggunakan `codegen`

```bash
npx playwright codegen https://v3.maxchat.id
```

🎥 Hasil:
- Playwright membuka browser interaktif.
- Setiap klik, input, dan navigasi akan direkam dan dikonversi menjadi skrip otomatis.

### 2. Menggunakan Extension di Cursor (jika menggunakan Cursor Editor)

- Buka file test `.spec.ts`
- Klik ikon `Playwright` pada bar sebelah kiri
- Pilih “Record New” → Masukkan URL → Klik tombol `Start`

🧠 Catatan: Extension akan langsung menulis ulang ke file test aktif dengan langkah yang direkam.

➡️ Lanjut ke langkah penyesuaian test case atau assertion yang dibutuhkan.

---

## C. Menjalankan Test

Playwright dapat dijalankan dengan beberapa cara:

### 1. Via Command Line

```bash
npx playwright test
```

Untuk menjalankan secara paralel (default), atau Anda bisa atur jumlah worker:

```bash
npx playwright test --workers=4
```

### 2. Via UI Test Runner

```bash
npx playwright test --ui
```

🖼️ Akan muncul UI interaktif untuk memilih test, melihat hasil, dan debugging.

### 3. Melalui Extension di Cursor

- Klik tombol ▶️ di bagian atas file atau ikon "Run Test" di sidebar
- Cocok untuk menjalankan test file tunggal saat development

➡️ Setelah test berjalan, lanjut ke proses pelaporan.

---

## D. Pelaporan Hasil Test

### 1. Menggunakan HTML Reporter

```bash
npx playwright show-report
```

📂 File report default di `playwright-report/index.html`

### 2. Menggunakan Trace Viewer

Pastikan trace diaktifkan pada config:

```ts
// playwright.config.ts
use: {
  trace: 'on-first-retry',
},
```

Lalu setelah test dijalankan:

```bash
npx playwright show-trace trace.zip
```

📌 Akan menampilkan UI interaktif untuk melihat semua step test, log, console, dan snapshot visual.

➡️ Selesai. Anda kini siap menggunakan Playwright untuk pengujian otomatis sistem MCP.

---

## E. Bonus Tips

- Gunakan `.only()` atau `.skip()` untuk fokus/abaikan test tertentu.
- Integrasikan dengan CI seperti GitHub Actions untuk workflow otomatis.
- Gunakan `fixtures` dan `custom commands` untuk skenario kompleks.

---

🔁 **Selamat Mencoba!** Jika terjadi error selama testing, gunakan fitur `trace` atau `debug mode` untuk investigasi mendalam.

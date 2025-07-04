# 🎭 Panduan Penggunaan Playwright dengan MCP untuk Testing di `v3.maxchat.id`

Panduan ini terbagi menjadi tiga bagian utama:

1. **Step Instalasi & Requirement**
2. **How to Create Test Case (Recorder vs AI Agent)**
3. **How to Run & Report**

---

## 1️⃣ Step Instalasi & Requirement

### A. Clone Repository

```bash
git clone https://github.com/your-org/maxchat-playwright-tests.git
cd maxchat-playwright-tests
```

### B. Siapkan Software Prasyarat

#### ✅ Terminal (PowerShell / CMD / VS Code Terminal)

#### ✅ Node.js

```bash
# Install dengan NVM (disarankan)
nvm install --lts
nvm use --lts
```

Atau unduh dari: [https://nodejs.org](https://nodejs.org)

#### ✅ Code Editor

Rekomendasi:

* [Visual Studio Code](https://code.visualstudio.com)
* [Cursor](https://cursor.so)

### D. Mencari Extension Playwright

Buka tab Extensions (`Ctrl+Shift+X`) → cari **Playwright** → klik **Install** untuk:

* VS Code
* Cursor

---

### C. Instalasi Dependency

```bash
npm install
```

Akan mengunduh semua dependensi termasuk `@playwright/test`.

---

## 2️⃣ How to Create Test Case

Terdapat **dua metode utama** untuk membuat skrip test otomatis:
![WhatsApp Image 2025-07-03 at 14 51 24_680e01d8](https://gist.github.com/user-attachments/assets/0e41f539-7c25-42b5-b425-b7b832f765f6)
---

### 🛠️ A. Metode Manual — **Playwright Recorder (Codegen)**

**Langkah-langkah:**

```bash
npx playwright codegen https://v3.maxchat.id
```

* Akan membuka browser dengan toolbar perekam
* Klik elemen, isi input → otomatis dibuatkan kode
* Assertion tersedia: 👁️ (visibility), `ab` (text), 📋 (value), `{}` (snapshot)

### 🔎 Penjelasan Toolbar Recorder (dari kiri ke kanan):

| Ikon | Nama               | Fungsi                                                                             |
| ---- | ------------------ | ---------------------------------------------------------------------------------- |
| 🔴   | Record             | Merekam semua aksi di halaman (klik, input, navigasi)                              |
| 🖱️  | Pick Locator       | Memilih elemen secara manual di halaman                                            |
| 👁️  | Assert Visibility  | Menambahkan pengecekan apakah elemen terlihat                                      |
| `ab` | Assert Text        | Menambahkan pengecekan apakah elemen mengandung teks tertentu                      |
| 📋   | Assert Value       | Menambahkan pengecekan apakah elemen input memiliki nilai tertentu                 |
| `{}` | Snapshot Assertion | Menambahkan pengecekan snapshot seperti ARIA tree, struktur teks, atau gaya elemen |

### 2. Contoh Output dari Fitur Assertion

#### ✅ Assert Visibility

```ts
await expect(page.getByText('tees').nth(4)).toBeVisible();
```

> Elemen kelima dengan teks 'tees' harus terlihat di layar.

#### ✅ Assert Text

```ts
await expect(page.locator('#app')).toContainText('tees');
```

> Elemen `#app` harus mengandung teks 'tees'.

#### ✅ Assert Value

```ts
await expect(page.getByLabel('Email')).toHaveValue('supportmax@maxchat.id');
```

> Field input dengan label Email harus memiliki nilai '[supportmax@maxchat.id](mailto:supportmax@maxchat.id)'.

#### ✅ Assert Snapshot

```ts
await expect(page.locator('#app')).toMatchAriaSnapshot(`- paragraph: tees`);
```

> Struktur ARIA dari elemen `#app` harus cocok dengan snapshot yang disimpan.

### 3. Jalankan Codegen Lewat Extension

**Menggunakan Extension di Cursor atau VS Code**

* Buka file `.spec.ts`
* Klik ikon Playwright → “Record New”
* Masukkan URL → Start
* Gunakan toolbar seperti di atas untuk merekam aksi dan menambahkan assertion secara visual

✅ **Gunakan saat:**

* Butuh kontrol penuh
* Test kompleks seperti broadcast
* Perlu debugging langsung

---

### 🤖 B. Metode AI — **AI Agent dari MCP**

**Langkah-langkah:**

1. Jalankan **MCP Server**, pilih model AI (misal: Gemini Flash 2.5)
2. Masukkan API Key
3. Masukkan prompt:

   > "Buka situs v3.maxchat.id dan buat test untuk login lalu unduh laporan"

⚠️ Cocok untuk test cepat & sederhana
❌ Tidak ideal untuk alur kompleks

---

### 🌟 Perbandingan Metode

| Aspek          | Playwright Recorder  | AI Agent          |
| -------------- | -------------------- | ----------------- |
| Kontrol Manual | ✅ Penuh              | ❌ Terbatas        |
| Kecepatan      | ⚠️ Sedang            | ✅ Cepat           |
| Risiko Error   | ⚠️ Rendah            | ⚠️ Sedang-Tinggi  |
| Cocok untuk    | Test kompleks, debug | Test dasar, cepat |

---

## 3️⃣ How to Run & Report

### A. Menjalankan Test

#### Jalankan Semua

```bash
npx playwright test
```

#### Jalankan Chromium Saja

Pastikan `playwright.config.ts`:

```ts
projects: [
  {
    name: 'chromium',
    use: { browserName: 'chromium' },
  },
],
```

```bash
npx playwright test --project=chromium
```

#### Mode UI (Visual)

```bash
npx playwright test --ui
```

### 📌 Kapan Menggunakan CLI vs UI Mode?

| Mode                                     | Kapan Digunakan                                                                                    |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **CLI** (`npx playwright test`)          | Untuk menjalankan test secara otomatis (CI/CD atau terminal biasa). Cocok untuk semua test.        |
| **UI Mode** (`npx playwright test --ui`) | Jika ingin melihat daftar test, klik manual, atau menjalankan test tertentu dari antarmuka visual. |

---

### B. Report & Debug

#### HTML Report

```bash
npx playwright show-report
```

> Membuka file `playwright-report/index.html`

#### Trace Viewer (Debug Detail)

Aktifkan di `playwright.config.ts`:

```ts
use: { trace: 'on-first-retry' },
```

Lalu jalankan:

```bash
npx playwright show-trace trace.zip
```

---

### C. Tips Tambahan

* Gunakan `.only()` untuk test tertentu
* Gunakan `--debug` untuk step-by-step:

```bash
npx playwright test --debug
```

---

🧪 **Selamat Menguji Sistem `v3.maxchat.id` dengan Playwright + MCP!**
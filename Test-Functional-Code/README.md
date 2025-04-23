# Test Functional Code

Dalam Test Functional Code ini, setiap fungsi ditulis ke dalam file terpisah untuk menjaga keterbacaan dan modularitas kode. Setiap fungsi kemudian diuji menggunakan Jest, framework testing yang ringan namun powerful.

## 📁 Struktur Folder

- **src/**  
  Berisi semua fungsi utama yang ditulis menggunakan TypeScript, beserta file unit test-nya menggunakan Jest.

  - Contoh:
    - `sortDesc.ts` - fungsi untuk mengurutkan angka secara manual
    - `maxSubarraySum.ts` - fungsi mencari jumlah maksimum dari subarray
    - `nestedEvenSum.ts` - fungsi menjumlahkan bilangan genap dalam nested object
    - `*.test.ts` - file untuk unit test masing-masing fungsi

- **jest.config.js**  
  File konfigurasi untuk Jest agar dapat menjalankan test pada file TypeScript (`.ts` dan `.tsx`) dengan benar. Mengatur transformasi menggunakan `ts-jest`.

- **tsconfig.json**  
  Konfigurasi TypeScript untuk menentukan environment, versi target JavaScript, module system, dan agar kompatibel dengan Jest.

---

## 🧪 Mengapa Menggunakan Jest?

Jest adalah framework testing modern yang dibuat oleh Meta (Facebook). Alasan penggunaan Jest:

- 🚀 **Cepat dan efisien**: Memiliki test runner bawaan yang cepat dan paralel.
- 📦 **All-in-one**: Mendukung mocking, assertion, coverage tanpa konfigurasi tambahan.
- 🔍 **Readable Output**: Memberikan output error dan hasil test yang mudah dipahami.
- 🤝 **Kompatibel dengan TypeScript**: Dengan `ts-jest`, integrasi TypeScript jadi seamless.

---

## ▶️ Menjalankan Test

Untuk menjalankan semua test:

```bash
yarn install
yarn test
```

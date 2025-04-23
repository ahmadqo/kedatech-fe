// Menggunakan pendeketan rekursif untuk struktur data yang bersarang
// Fungsi ini akan menjumlahkan semua nilai genap dalam objek bersarang

export function nestedEvenSum(obj: any): number {
  let sum = 0;

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    } else if (typeof value === "object" && value !== null) {
      sum += nestedEvenSum(value);
    }
  }

  return sum;
}

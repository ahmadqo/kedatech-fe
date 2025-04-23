// Menggunakan algorima Sliding Window
// Fungsi ini menerima dua parameter: array angka dan ukuran subarray
// Fungsi ini mengembalikan jumlah maksimum dari subarray dengan ukuran yang ditentukan
// Fungsi ini menggunakan pendekatan Sliding Window untuk menghitung jumlah maksimum dari subarray dengan ukuran yang ditentukan
// Fungsi ini mengembalikan 0 jika panjang array lebih kecil dari ukuran subarray

export function maxSubArraySum(arr: number[], num: number): number {
  // Jika panjang array lebih kecil dari num, kembalikan 0
  if (arr.length < num) return 0;

  let maxSum = 0;
  let tempSum = 0;

  // Hitung jumlah awal dari window pertama
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // Geser window ke kanan
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

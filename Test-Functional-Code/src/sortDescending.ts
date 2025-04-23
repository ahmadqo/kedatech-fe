// Fungsi ini akan mengurutkan array angka dalam urutan menurun
// Menggunakan algoritma Bubble Sort
// Fungsi ini menerima satu parameter: array angka
// Fungsi ini mengembalikan array yang sudah diurutkan dalam urutan menurun

export function sortDescending(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] < arr[k]) {
        const temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
      }
    }
  }
  return arr;
}

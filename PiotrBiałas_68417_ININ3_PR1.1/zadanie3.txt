function Szukajpary(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] in arr.slice(j + 1)) {
        return [i, j, arr.slice(j + 1).indexOf(arr[i] * arr[j]) + j + 1];
      }
    }
  }
  return [];
}
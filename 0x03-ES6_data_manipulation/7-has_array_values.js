function hasValuesFromArray(set, arr) {
  if (set instanceof Set && arr instanceof Array) {
    return arr.every((value) => set.has(value));
  }
  return 0;
}

export default hasValuesFromArray;

function cleanSet(set, startString) {
  if (!startString || !startString.length || startString instanceof String) return '';

  let result = '';
  set.forEach((element) => {
    if (element && element.startsWith(startString)) result += `${element.slice(startString.length)}-`;
  });
  return result.slice(0, result.length - 1);
}

export default cleanSet;

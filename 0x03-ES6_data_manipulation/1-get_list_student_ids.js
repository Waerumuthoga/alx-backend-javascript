function getListStudentIds(arrOfObjects) {
  if (arrOfObjects instanceof Array) {
    return arrOfObjects.map((arg) => arg.id);
  }
  return [];
}

export default getListStudentIds;

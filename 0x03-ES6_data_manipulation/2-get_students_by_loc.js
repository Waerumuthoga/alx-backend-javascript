function getStudentsByLocation(studentsList, city) {
  if (studentsList instanceof Array) {
    return studentsList.filter((item) => item.location === city);
  }
  return [];
}

export default getStudentsByLocation;

function getStudentIdsSum(studentsList) {
  if (studentsList instanceof Array) {
    return studentsList.reduce(
      (prevStud, currStud) => prevStud.id || prevStud + currStud.id,
      0,
    );
  }
  return 0;
}

export default getStudentIdsSum;

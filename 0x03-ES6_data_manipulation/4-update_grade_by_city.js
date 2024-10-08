function updateStudentGradeByCity(studentsList, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (studentsList && newGrades instanceof Array) {
    return studentsList
      .filter((item) => item.location === city)
      .map((item) => ({
        id: item.id,
        firstName: item.firstName,
        location: item.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === item.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}

export default updateStudentGradeByCity;

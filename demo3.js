function maxStudents(n) {
  if (n === 1) {
    return 3;
  } else if (n === 2) {
    return 6;
  } else {
    return maxStudents(n - 1) + maxStudents(n - 2);
  }
}

function getCombinations(n) {
  let students = ["A", "B", "C"];
  let courses = ["1", "2", "3", "4"];
  let combinations = [];
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      for (let k = j + 1; k < courses.length; k++) {
        let courseCombination = [courses[i], courses[j], courses[k]];
        let studentCombination = [];
        for (let l = 0; l < students.length; l++) {
          if (
            courseCombination.includes(students[l] + "1") ||
            courseCombination.includes(students[l] + "2") ||
            courseCombination.includes(students[l] + "3")
          ) {
            studentCombination.push(students[l]);
          }
        }
        if (studentCombination.length >= n) {
          combinations.push(courseCombination);
        }
      }
    }
  }
  return combinations;
}

console.log(maxStudents(4));
console.log(getCombinations(6));

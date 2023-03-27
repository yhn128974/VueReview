// 定义课程和学生数目
const numCourses = 4;
const numStudentsPerCourse = 2;

// 生成学生编号
let studentIds = [];
for (let i = 1; i <= numCourses * numStudentsPerCourse; i++) {
  studentIds.push(i);
}

// 生成排课方案
let courses = [];
let studentIndex = 0;
for (let i = 1; i <= numCourses; i++) {
  let course = [];
  for (let j = 1; j <= numStudentsPerCourse; j++) {
    let studentId = studentIds[studentIndex++];
    while (course.includes(studentId)) { // 确保每门课程的学生不相同
      studentId = studentIds[studentIndex++];
    }
    course.push(`学生 ${studentId}`);
  }
  courses.push(course);
}

// 在其中一门课程中增加一名学生
let extraStudentId = studentIds[studentIndex++];
courses[numCourses - 1].push(`学生 ${extraStudentId}`);

// 输出排课方案
console.log(`最多可以有 ${numStudentsPerCourse * numCourses + 1} 名学生参加。`);
console.log(`排课方案如下：`);
for (let i = 0; i < numCourses; i++) {
  console.log(`第 ${i + 1} 门课：${courses[i].join(", ")}`);
}


有四门课，每门课都有三个不同的学生参加，学生中任意两人至少参加一门相同的课，求最多可以有多少个学生参加课程并输出该条件下的排课组合。
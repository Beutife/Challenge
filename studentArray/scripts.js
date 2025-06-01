const students = [
  { name: "Beulah", score: 85 },
  { name: "John", score: 58 },
  { name: "Ada", score: 91 },
  { name: "Chinedu", score: 45 },
  { name: "Zara", score: 73 }
];

students.forEach((student)=>{
  console.log(student.name)
})

//to get students who passed (score ≥ 60)
//array of only the students who passed (score ≥ 60),\
const studentPassed = students.filter(student =>{
    if(student.score >= 60 ){
        console.log(`${student.name} passed`)
    }
})

const studentStatus = students.map(student => {
    let status;
    if(student.score > 90){
         status = 'excellent'
    }else if(student.score > 80 && student.score< 90){
         status = 'very good'
    }else if(student.score > 70 && student.score < 80){
         status = 'good'
    }else {
         status = 'You did well , do better'
    }
      return{...student, status}      
        
})
console.log(studentStatus)

const studentWithA = students.find((e)=>{
    if(e.name.includes('a')){
        console.log(e)
    }
})
console.log(studentWithA);

students.reduce(student.score , total)
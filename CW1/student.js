function createstudent (name, age, agree, rating) {
  let student = {
    name: name,
    age: age,
    agree: agree,
    rating: rating,
    birthYear(){
     let today = new Date();
     let year = today.getFullYear();
      if(this.agree) return (year - this.age)
      else 
      return (year - this.age - 1);
     },
    
    leapYear(){
        let leapY = 0;
        let bY = this.birthYear();
            if(bY%4 == 0) {
                if(bY%100 == 0) {
                    if(bY%400 == 0) {
                        return 1;
                    }
                    else
                        return 0;
                }
                else
                    return 1;
            }
            return 0;
    },
    
    predictedPoints(){
        let cP = this.rating;
        let mP = 100;
        let leapY = student.leapYear();
        let pP = (cP / mCP) * mP - 3 * leapY;
            return pP;
    },
    
    finalGrade(){
        let fG = 2;
        let pP = student.predictedPoints();
        if (pP >= 85){
            fG = 5;
            }
            else if (pP >= 60 && pP < 85){
            fG = 4;
            }
            else if (pP >= 40 && pP < 60){
            fG = 3;
            }
            return fG;
    }
    
  } 
  return student 
}

let mCP = prompt("Укажите текущее максимально возможное количество баллов");

do{
let student = createstudent(prompt("Введите ваше имя"), prompt("Введите ваш возраст"), confirm("Вы уже отмечали День рождения в этом году?"), prompt("Введите ваш текущий рейтинг"));
  console.log ("Имя студента: " + student.name + ". Возраст студента: " + student.age + ". Рейтинг студента: " + student.rating + ". Год рождения студента: " + student.birthYear() + ". Прогноз финального рейтинга: " + student.predictedPoints() + ". Предполагаемая итоговая оценка: " + student.finalGrade());
} while(confirm ("Хотите продолжить?") === true);

var students = [createstudent];

/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。
 *
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */

//使用列舉
enum AgeRank {
    Child = "Child", //0-12
    Teenager = "Teenager", //13-17
    Adult = "Adult", //18-64
    Senior = "Senior", //65~
  }

export function classifyAge(age: number): string {
    // 請在此處寫下你的程式碼
    switch (true){
        case (age>0 && age<=12):
          return AgeRank.Child;
          break;
        case (age>=13 && age<18 ):
          return AgeRank.Teenager;
          break;
        case (age>=18 && age<65 ):
          return AgeRank.Adult;
          break;
        case (age>=65):
          return AgeRank.Senior;
          break; 
      // 條件均不符    
       default:                         
          return "Error input!";
          break;            
      }    
}
console.log(classifyAge(70));
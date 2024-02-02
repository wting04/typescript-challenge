/**
 * 計算數字陣列的總和
 * @param numbers - 要計算總和的數字陣列
 * 
 * 範例:
 * 輸入: [1, 2, 3, 4, 5]
 * 輸出: 15
 * 
 * 輸入: [-1, -2, -3]
 * 輸出: -6
 * 
 * 輸入: []
 * 輸出: 0
 */
export function arraySum(numbers: number[]): number {
    // 在此實現函式
    return numbers.reduce((sum: number,num: number)=>sum+num, 0);
}
console.log(arraySum([]));
console.log(arraySum([50,60,72,88,33]));//303

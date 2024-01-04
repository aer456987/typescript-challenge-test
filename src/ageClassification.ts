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

export function classifyAge(age: number): string {
    let result = age >= 65 ? 'Senior' : '';
    if (18 <= age && age <= 64) {
        result = 'Adult';
    }
    if (13 <= age && age < 17) {
        result = 'Teenager';
    }
    if (12 >= age) {
        result = 'Child';
    }
    return result;
}
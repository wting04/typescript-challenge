/**
 * 待辦事項介面已被移除，你需要自己定義一個新的待辦事項介面。
 * 待辦事項介面應該包含 id、task 和 completed 三個屬性，分別為數字型別、字串型別和布林型別。
 */
interface Todo {
    id: number, 
    task: string,
    completed: boolean
}

/**
 * 新增待辦事項
 * @param todos - 現有的待辦事項陣列
 * @param task - 新的待辦事項的內容
 * 
 * 範例:
 * 輸入: ([{ id: 1, task: 'Buy milk', completed: false }], 'Walk the dog')
 * 輸出: [{ id: 1, task: 'Buy milk', completed: false }, { id: 2, task: 'Walk the dog', completed: false }]
 */

export function addTodo(todos: Todo[], task: string): Todo[] {
    // 在此實現函式
    //新ID: 取陣列物件屬性id最大值+1
    let newList = todos.map(item => item.id);
    let newId = Math.max(...newList) + 1;
    let newTodo: Todo = {
        id: newId,
        task: task,
        completed: false        
    } 
    return [...todos, newTodo];
}
let data = addTodo([{ id: 1, task: 'Buy milk', completed: false }], 'Walk the dog');
console.log(data);
import { combineReducers } from 'redux'
import { ADD, DELETE } from '../constants/todos'

// 定义初始状态
const INITIAL_STATE = {
    todos: [
        { id: 0, text: 'First todo item' }
    ]
}

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 **/
function todos (state = INITIAL_STATE, action) {
    // 获取当前todos条数，用以id自增
    const todoNum = state.todos.length
    
    // 根据指令处理todos
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: state.todos.concat({
                    id: todoNum,
                    text: action.data
                })
            }
        
        case DELETE:
            let newTodos = state.todos.filter(item => {
                return item.id !== action.id
            })

            return {
                ...state,
                todos: newTodos
            }

        default:
            return state
    }
}

export default combineReducers({
    todos
})

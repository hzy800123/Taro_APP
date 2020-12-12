import Taro, { Component } from '@tarojs/taro';
import { View, Input, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux'
import './index.scss';
import { AtCalendar, AtIcon, AtButton } from 'taro-ui'

import { add, del } from '../../actions/index'

class Index extends Component {

  config = {
    navigationBarTitleText: 'Todo List (测试版) 首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }

  saveNewTodo(e) {
    let { newTodo } = this.state
    if (!e.detail.value || e.detail.value === newTodo )
      return
    
    this.setState({
      newTodo: e.detail.value
    })
  }

  addTodo() {
    let { newTodo } = this.state
    let { add } = this.props

    if (!newTodo) {
      return
    }      
    
    add(newTodo)

    this.setState({
      newTodo: ''
    })
  }

  delTodo(id) {
    let { del } = this.props
    del(id)
  }

  render() {
    let { newTodo } = this.state
    let { todos, add, del } = this.props

    const todosJsx = todos.map(todo => {
      return (
        <View key={todo.id} className='list'>
          <AtIcon value='play' size='25' className='icon_play'></AtIcon>          
          <Text className='todo_text'>{todo.text}</Text>
          <AtIcon value='trash' size='23' className='del' onClick={this.delTodo.bind(this, todo.id)}></AtIcon>
        </View>
      )
    })

    return (
      <View>
        <AtCalendar className='calendar' />
        <Input placeholder= ' > Input new item' onBlur={this.saveNewTodo.bind(this)} value={newTodo} className='input' />
        <AtIcon value='add-circle' size='32' className='add' onClick={this.addTodo.bind(this)}></AtIcon>
        {/* <Text className='todo_title'>Todo List</Text> */}
        <AtButton type='primary' size='normal' className='todo_title'>Todo List</AtButton>
        <View>
          { todosJsx }
        </View>
      </View>
    )
  }
}

function mapStateToProps({todos}) {
  return {
    todos: todos.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add(data) {
      dispatch(add(data))
    },

    del(id) {
      dispatch(del(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(Index)

// export default connect (
//   ({ todos }) => ({
//     todos: todos.todos
//   }),
  
//   (dispatch) => ({
//     add(data) {
//       dispatch(add(data))    
//     },

//     del(id) {
//       dispatch(del(id))
//     }
//   })
// )(Index)

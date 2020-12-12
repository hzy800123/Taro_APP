import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  constructor (props) {
    super (props)
    this.state = {
      // 创建一个初始的 Todolist
      list: [
        'get up',
        'coding',
        'sleep',
      ],
      inputVal: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  addItem () {
    let { list } = this.state
    const inputVal = this.inputVal
    if (inputVal == '') return
    else{
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal: ''
    })
  }

  delItem (index) {
    let { list } = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  inputHandler (e) {
    // 不参与渲染的变量可不使用state储存，提高性能
    this.inputVal = e.target.value
  }

  render () {
    let { list, inputVal } = this.state

    return (
      <View className='index'>
        <Input className='input' type='text' value={inputVal} onInput={this.inputHandler.bind(this)} />
        <Text className='add' onClick={this.addItem.bind(this)}>添加</Text>
        <View>
          <AtIcon value='clock' size='300' color='#F00'></AtIcon>
        </View>        
        <View className='list_wrap'>
          <Text>Todo list</Text>
          {
            list.map((item, index) => {
              return <View key={index} className='list'>
                <Text>{index + 1}.{item}</Text>
                <Text className='del' onClick={this.delItem.bind(this, index)}>删除</Text>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}

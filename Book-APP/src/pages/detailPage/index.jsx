import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtDivider, AtModal, AtModalHeader, AtModalContent, 
        AtModalAction, AtForm, AtInput, AtTextarea, AtRate, AtIcon } from 'taro-ui'
import './index.scss'
import ServerURL from './Const'


export default class Index extends Component {

  constructor(props) {
    super(props)
    this.onInputNewTitleChange = this.onInputNewTitleChange.bind(this)
    this.onInputNewRatingChange = this.onInputNewRatingChange.bind(this)
    this.cancelNewBookClick = this.cancelNewBookClick.bind(this)
    this.toggleInvalidModal = this.toggleInvalidModal.bind(this)
  }  

  state = {
    editBookDataId: 0,
    editBookDataTitle: '',
    editBookDataRating: 0,
    openInvalidModal: false
  }

  componentWillMount () {
    let {id, title, rating} = this.$router.params

    this.setState({
      editBookDataId: parseInt(id) > 0 ? parseInt(id) : 0,
      editBookDataTitle: title !== '' ? title : '',
      editBookDataRating: parseInt(rating) > 0 ? parseInt(rating) : 0,
      openInvalidModal: false      
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  toggleInvalidModal = () => {
    this.setState({
      openInvalidModal: false
    })
  }

  
  onInputNewTitleChange(value) {
    this.setState({
      editBookDataTitle: value
    })

    return value
  }


  onInputNewRatingChange = (value) => {
    this.setState({
      editBookDataRating: value
    })

    return value
  }

  cancelNewBookClick = () => {
    Taro.reLaunch({
      url: '/pages/index/index'
    })    
  }

  confirmNewBookClick = () => {
      const fullURLAdd = `${ServerURL}/book/AddNewBook`
      const fullURLEdit = `${ServerURL}/book/EditBook`
      let fullURL = ''
      if(this.state.editBookDataId === 0) {
        fullURL = fullURLAdd
      } else {
        fullURL = fullURLEdit
      }
      
      console.log(this.state.editBookDataId)
      console.log(fullURL)

      Taro.request({
        url: fullURL,
        data: {
          id: this.state.editBookDataId,
          title: this.state.editBookDataTitle, 
          rating: this.state.editBookDataRating
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST',
      }).then(res => {
        // Taro.reLaunch({
        //   url: '/pages/index/index'
        // })
        if(res.statusCode === 200) {
          Taro.reLaunch({
            url: '/pages/index/index'
          })
        } else {
          console.log('Failed to connect to AddNewBook. The statusCode is ', res.statusCode)
          this.setState({
            openInvalidModal: true
          })  
        }        
      }).catch(err =>{
        console.log('Failed to connect to AddNewBook. The err is ', err)
        this.setState({
          openInvalidModal: true
        })  
      })    
  }

    
  config = {
    navigationBarTitleText: '书籍详情页'
  }

  render () {
        
    return (


      <View>
        <AtModal name='Invalid Input' isOpened={this.state.openInvalidModal}>
          <AtModalHeader className='style-invalidModal'>请检查输入字符</AtModalHeader>                  
          <AtModalAction>            
            <Button onClick={() => this.toggleInvalidModal()}>OK</Button>
          </AtModalAction>
        </AtModal>

        <View className='style-ratingTitle'>
          <AtIcon className='style-atIcon' value='edit' size='18' color='dodgerblue'></AtIcon>
          <Text className='style-textTitle'>Title</Text>
          <View className='style-inputTitle'>
            <AtInput 
              name='title' 
              type='text'
              value={this.state.editBookDataTitle}
              placeholder='Input title'
              onChange={(value) => this.onInputNewTitleChange(value)}
            />
          </View>
        </View>

        <View className='style-ratingTitle'>
          <AtIcon className='style-atIcon' value='heart' size='18' color='dodgerblue'></AtIcon>
          <Text className='style-textTitle'>Rating</Text>
          <AtRate 
            className='style-atRating' 
            max={5} 
            value={this.state.editBookDataRating} 
            onChange={(value) => this.onInputNewRatingChange(value)}
          />
        </View>

        <AtButton 
          className='style-cancelButton'
          type='secondary'
          size='normal'
          onClick={() => this.cancelNewBookClick()}
        >
          取消
        </AtButton>
        <AtButton 
          className='style-confirmButton'
          type='primary'
          size='normal'
          onClick={() => this.confirmNewBookClick()}
        >
          确定
        </AtButton>        
      </View>
    )
  }
}

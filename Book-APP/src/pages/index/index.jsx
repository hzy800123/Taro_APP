import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtDivider, AtModal, AtModalHeader, AtModalContent, 
        AtModalAction, AtForm, AtInput, AtTextarea, AtRate, AtIcon } from 'taro-ui'
import './index.scss'
import ServerURL from './Const'


export default class Index extends Component {

  constructor(props) {
    super(props)
    this.editBook = this.editBook.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.getAllBooks = this.getAllBooks.bind(this)
    // this.onInputTitleChange = this.onInputTitleChange.bind(this)
    // this.onInputRatingChange = this.onInputRatingChange.bind(this)
    this.onInputNewTitleChange = this.onInputNewTitleChange.bind(this)

    this.toogleNewBookModal = this.toogleNewBookModal.bind(this)
    this.toogleEditBookModal = this.toogleEditBookModal.bind(this)
    this.clickEditBook = this.clickEditBook.bind(this)
    this.toggleInvalidModal = this.toggleInvalidModal.bind(this)
  }  

  state = {
    books: [],
    newBookDataTitle: '',
    newBookDataRating: 0,
    // newBookData: {
    //   title: '',
    //   rating: 0
    // },
    editBookData: {
      id: 0,
      title: '',
      rating: 0
    },
    newBookModal: false,
    editBookModal: false,
    openInvalidModal: false
  }

  componentWillMount () {
    this.getAllBooks()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  getAllBooks = () => {
    console.log('Try to connect to GetAllBook')

    // axios.get('http://47.107.105.61:8080/springboot-package/getallbook').then((response) => {
    // const fullURL = `https://${ServerURL}/book/GetAllBook`
    const fullURL = `${ServerURL}/book/GetAllBook`

    console.log(fullURL)

    Taro.request({
      url: fullURL,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      // method: 'POST'
      method: 'GET'

    }).then(res => {
      console.log('Start to connect to GetAllBook')
      this.setState({
        books:res.data
      })

    }).catch((err) =>{
      console.log('Failed to contact to getallbook again.')
      console.log('err status: ', err.response.status)
      console.log('err code: ', err.response.code)
      console.log('Failed to contact to getallbook again. The err is ', err)
    })    
  }


  toogleNewBookModal = () => {
    Taro.navigateTo({
      url: '/pages/detailPage/index'
    })
  }


  toogleEditBookModal = () => {
    let {title, rating} = this.state.title

    Taro.navigateTo({
      url: `/pages/detailPage/index?title=${title}&rating=${rating}`
    })
    // this.setState({
    //   editBookModal: !this.state.editBookModal
    // })
  }


  clickEditBook = (book) => {
    let {id, title, rating} = book
    Taro.navigateTo({
      url: `/pages/detailPage/index?id=${id}&title=${title}&rating=${rating}`
    })
  }


  // onInputNewTitleChange = (value) => {
  onInputNewTitleChange(value) {
    this.setState({
      newBookDataTitle: value
    })

    return value
  }


  onInputNewRatingChange = (value) => {

    this.setState({
      newBookDataRating: value
    })

    return value
  }


  onInputEditTitleChange = ((value) => {
    let {editBookData} = this.state
    let id = editBookData.id    
    let rating = editBookData.rating
    let title = value

    this.setState({
      editBookData: {
        id,
        title,
        rating
      }
    })

    return value
  })


  onInputEditRatingChange = ((value) => {
    let {editBookData} = this.state
    let id = editBookData.id
    let title = editBookData.title
    let rating = value

    this.setState({
      editBookData: {
        id,
        title,
        rating
      }
    })

    return value
  })  

  
  addNewBook = () => {
    // axios.post('http://47.107.105.61:9090/book/AddNewBook', this.state.newBookData).then((response) => {
    // const fullURL = `https://${ServerURL}/book/AddNewBook`
    const fullURL = `${ServerURL}/book/AddNewBook`

    Taro.request({
      url: fullURL,
      data: { 
        title: this.state.newBookDataTitle, 
        rating: this.state.newBookDataRating
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
    }).then(res => {
      // console.log('Start to connect to AddNewBook')  
      // console.log(res.data)
      if(res.statusCode === 200) {
        this.setState({
          books: res.data,
          newBookDataTitle: '',
          newBookDataRating: 0,
          newBookModal: false
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


  editBook = () => {
    // axios.post('http://47.107.105.61:9090/book/EditBook', this.state.editBookData).then((response) => {
    // const fullURL = `https://${ServerURL}/book/EditBook`
    const fullURL = `${ServerURL}/book/EditBook`

    this.setState({
      editBookModal: false
    })

    Taro.request({
      url: fullURL,
      data: this.state.editBookData,
      header: {
        'content-type': 'application/json'
      },
      method: 'POST'

    }).then(res => {
      // console.log('Start to connect to EditBook')  
      // console.log(res.data)
      if(res.statusCode === 200) {
        this.setState({
          books: res.data,
          editBookData: {
            id: 0,
            title: '',
            rating: 0
          },
          editBookModal: false
        })  
      } else {
        console.log('Failed to connect to EditBook. The statusCode is ', res.statusCode)
        this.setState({
          openInvalidModal: true
        })  
      }
    }).catch((err) =>{
      console.log('Failed to connect to EditBook. The err is ', err)
      this.setState({
        openInvalidModal: true
      })      
    })
  }


  deleteBook = (book) => {    
    // axios.post('http://47.107.105.61:9090/book/DeleteBook', {id}).then((response) => {
    // const fullURL = `https://${ServerURL}/book/DeleteBook`
    const fullURL = `${ServerURL}/book/DeleteBook`

    console.log(fullURL)
    
    Taro.request({
      url: fullURL,
      data: {
        id: book.id,
        title: book.title, 
        rating: book.rating
      },      
      header: {
        'content-type': 'application/json'
      },
      method: 'POST'

    }).then(res => {
      console.log('Start to connect to DeleteBook')  
      console.log(res.data)
      this.setState({
        books: res.data,
      })      

    }).catch((err) =>{
      console.log('Failed to connect to DeleteBook. The err is ', err)
    })
  }


  toggleInvalidModal = () => {
    this.setState({
      openInvalidModal: false
    })
  }
    
  config = {
    navigationBarTitleText: '首页'
  }

  render () {

    let booksList = this.state.books.map((book) => {
      return (
        <View key={book.id} className='at-row at-row__justify--around'>
          <View className='at-col at-col-2 style-id'>{book.id}</View>
          <View className='at-col at-col-3 at-col--wrap style-title'>{book.title}</View>
          <View className='at-col at-col-3 style-rating'>
            <AtRate max={5} size='15' value={book.rating} />
          </View>
          <View className='at-col at-col-2 style-buttonEditColumn'>
            <AtButton 
              type='primary' 
              size='small' 
              className='style-green'
              onClick={() => this.clickEditBook(book)}>
              Edit
            </AtButton>
          </View>
          <View className='at-col at-col-2 style-buttonDeleteColumn'>
            <AtButton 
              type='primary' 
              size='small' 
              className='style-red'
              onClick={() => this.deleteBook(book)}>
              Del
            </AtButton>        
          </View>         
        </View>
      )
    })
        
    return (
      <View className='index'>        

        <View className='at-article'>
          <View className='at-article__h1'>
            <Text className='style-header'>
              Book APP
            </Text>
          </View>
          <View className='style-new-book'>
            <AtButton 
              type='primary'
              className='style-blue'
              size='normal'
              onClick={() => this.toogleNewBookModal()}>
              Add Book
            </AtButton>        
          </View>             
        </View>

        <AtModal 
          name='New Book' 
          className='style-modal' 
          cancelText='取消'
          confirmText='确认'          
          isOpened={this.state.newBookModal}
          onCancel={() => this.toogleNewBookModal()}
          onConfirm={() => this.addNewBook()}          
        >
          {/* <AtModalHeader className='style-modalHeader'>- Add New Book -</AtModalHeader>                  
          <AtModalContent>
            <View className='style-ratingTitle'>
              <AtIcon className='style-atIcon' value='heart' size='18' color='dodgerblue'></AtIcon>
              <Text className='style-textTitle'>Rating</Text>
              <AtRate className='style-atRating' max={5} value={this.state.newBookDataRating} onChange={(value) => this.onInputNewRatingChange(value)} />
            </View>

            <View>
              <AtIcon className='style-atIcon' value='edit' size='18' color='dodgerblue'></AtIcon>
              <Text className='style-textTitle'>Title</Text>
              <AtInput 
                name='title' 
                type='text'
                value={this.state.newBookDataTitle} 
                onChange={(value) => this.onInputNewTitleChange(value)}
                // onChange={this.onInputNewTitleChange.bind(this)}                
                className='style-inputTitle'
              />
            </View>
          </AtModalContent> */}
          {/* <AtModalAction>
            <Button onClick={() => this.toogleNewBookModal()}>Cancel</Button>
            <Button className='style-modalOKButton' onClick={() => this.addNewBook()}>OK</Button>
          </AtModalAction> */}
        </AtModal>


        <AtModal name='Edit Book' isOpened={this.state.editBookModal}>
          <AtModalHeader className='style-modalHeader'>- Edit Book -</AtModalHeader>                  
          <AtModalContent>
            <View className='style-ratingTitle'>
              <AtIcon className='style-atIcon' value='heart' size='18' color='dodgerblue'></AtIcon>
              <Text className='style-textTitle'>Rating</Text>            
              <AtRate className='style-atRating' max={5} value={this.state.editBookData.rating} onChange={(value) => this.onInputEditRatingChange(value)} />
            </View>

            <View>
              <AtIcon className='style-atIcon' value='edit' size='18' color='dodgerblue'></AtIcon>
              <Text className='style-textTitle'>Title</Text>
              <AtInput 
                name='title' 
                type='text'
                value={this.state.editBookData.title} 
                onChange={(value) => this.onInputEditTitleChange(value)}
                className='style-inputTitle'
              />
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={() => this.toogleEditBookModal()}>Cancel</Button>
            <Button className='style-modalOKButton' onClick={() => this.editBook()}>OK</Button>
          </AtModalAction>
        </AtModal>


        <AtModal name='Invalid Input' isOpened={this.state.openInvalidModal}>
          <AtModalHeader className='style-invalidModal'>Input invalid data</AtModalHeader>                  
          <AtModalAction>            
            <Button onClick={() => this.toggleInvalidModal()}>OK</Button>
          </AtModalAction>
        </AtModal>

        <View className='at-row at-row__justify--around'>
          <View className='at-col at-col-2 style-id'><Text className='style-tableHeader'>#</Text></View>
          <View className='at-col at-col-3 style-title'><Text className='style-tableHeader'>Title</Text></View>
          <View className='at-col at-col-3 style-rating'><Text className='style-tableHeader'>Rating</Text></View>            
          <View className='at-col at-col-4 style-twoButton'><Text className='style-tableHeader'>Actions</Text></View>            
        </View>
        
        {/* <AtDivider className='style-divider' lineColor='#000' /> */}
        {booksList}
      </View>
    )
  }
}

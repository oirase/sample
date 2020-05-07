import React, { Component } from 'react'
import FileList from './FileList'
import { connect } from 'react-redux'
import { setStart } from '../actions'

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
     this.props.setData(setStart())
  }

  render(){
    console.log(this.props, 'render')
    //const error = 'error'
    //const data = [{id:1,name:'melon'}]
    return (
      <div className="home">
        <h1>PDFArchive</h1>
        <p className="error">
          { this.props.error || null }
        </p>
        <FileList />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  setData: action => dispatch(action)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React from 'react'
import PropTypes from 'prop-types'
import File from '../components/File'
import { connect } from 'react-redux'

const FileList = ({ data }) => {

  if(data){

    const List = data.map(value =>
        <File key={value.id}
              value={value} />
      )

    return (
      <ul>
        {List}
      </ul>
    )

  } else {
    return null
  }
}

FileList.propTypes = {
  data: PropTypes.array
}


const mapStateToProps = state => ({
  data: state.data
})

export default connect(mapStateToProps)(FileList)

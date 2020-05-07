import React from 'react'
import PropTypes from 'prop-types'

const File = ({ value }) => (

    <li>{value.name}</li>
  )

File.propTypes = {
  value: PropTypes.object.isRequired
  }

export default File
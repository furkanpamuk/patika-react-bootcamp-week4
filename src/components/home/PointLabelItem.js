import React from 'react'

const PointLabelItem = ({label, value}) => {
  return (
    <p>{label}: <span>{value}</span></p>
  )
}

export default PointLabelItem
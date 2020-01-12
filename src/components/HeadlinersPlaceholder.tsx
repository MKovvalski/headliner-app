import React from 'react'

const Placeholder: React.FC = () => (
  <div className='placeholder'>
    <div className='placeholder__img' />
    <div className='placeholder__content-wrapper'>
      <div className='placeholder__title' />
      <div className='placeholder__source' />
      <div className='placeholder__description' />
      <div className='placeholder__description' />
      <div className='placeholder__description' />
      <div className='placeholder__description placeholder__description--shorter' />
      <div className='placeholder__bottom'>
        <div className='placeholder__date' />
        <div className='placeholder__link' />
      </div>
    </div>
  </div>
)

const HeadlinersPlaceholder: React.FC<{ quantity: number }> = ({ quantity }) => {
  const placeholders = []

  for (let  i = 0; i < quantity; i++) {
    placeholders.push(<Placeholder key={i} />)
  }

  return (
    <div className='headliners-placeholder'>
      {placeholders}
    </div>
  )
}

export default HeadlinersPlaceholder

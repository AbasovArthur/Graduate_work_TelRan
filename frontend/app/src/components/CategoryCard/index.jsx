import React from 'react'

export default function CategoryCard({title, image, createdAt, updatedAt}) {
  return (
    <div>
      <p>{title}</p>
      <img src={image} alt={title} />
    </div>
  )
}

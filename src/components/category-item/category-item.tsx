
import React from 'react';

import './category-item.styles.scss';

interface ICategoryItemProps {
  id: number,
  name: string,
  price: number,
  imageUrl: string,
}

const CategoryItem: React.FC<ICategoryItemProps> = (props) => {
  const { name, price, imageUrl } = props;

  return (
    <div className="category-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="category-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default CategoryItem

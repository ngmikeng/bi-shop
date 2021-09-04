import React from 'react';
import { ICategoryItem } from '../../view-models/category-item';
import CategoryItem from '../category-item/category-item';

import './category-preview.styles.scss';

interface ICategoryPreviewProps {
  title: string,
  items: ICategoryItem[],
}

const CategoryPreview: React.FC<ICategoryPreviewProps> = (props) => {
  const { title, items } = props;

  return (
    <div className="category-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CategoryItem key={id} id={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview

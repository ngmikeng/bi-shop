import React, { Component } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview';
import { IShopData } from '../../view-models/shop-data';
import { SHOP_DATA } from './shop.data';

import './shop.styles.scss';

interface IShopPageProps {
}

interface IShopPageState {
  categories: IShopData[]
}

export class ShopPage extends Component<IShopPageProps, IShopPageState>  {

  constructor(props: IShopPageState) {
    super(props);

    this.state = {
      categories: SHOP_DATA
    }
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="shop-page">
        {categories.map(({ id, ...otherProps }) => (
          <CategoryPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

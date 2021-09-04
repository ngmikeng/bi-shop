import { ICategoryItem } from "./category-item";

export interface IShopData {
  id: number,
  title: string,
  routeName: string,
  items: ICategoryItem[]
}

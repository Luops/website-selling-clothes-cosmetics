import { BaseEntity } from "./BaseEntity";
import { Category } from "./Category";

export interface Product extends BaseEntity{
  name: string;
  categoryId: number;
  category?: Category,
  quantity: number;
  price: number;
}
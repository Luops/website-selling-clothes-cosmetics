import { BaseEntity } from "./BaseEntity";
import { Category } from "./Category";

export interface Product extends BaseEntity{
  name: string;
  categoryId: number;
  category?: Category,
  isPromo: boolean,
  promoPrice?: number
  quantity: number;
  price: number;
  description: string;
  imagePath: string;
  userId?: string;
}
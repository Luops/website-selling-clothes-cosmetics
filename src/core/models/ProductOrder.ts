import { BaseEntity } from "./BaseEntity";
import { Product } from "./Product";
import { PaymentMethod } from "./enums/PaymentMethod";

export interface ProductOrder extends BaseEntity{
  productId: number;
  product?: Product;
  quantity: number;
  total: number;
  discountAmount: number;
  paymentMethod: PaymentMethod;
}
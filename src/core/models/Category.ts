import { BaseEntity } from "./BaseEntity";

export interface Category extends BaseEntity{
  name: string;
  color: string;
  userId?: string;
}
import { isNumberObject } from "util/types";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface UserType {
  id: number;
  img: string;
  firstname: string;
  lastname: string;
  city: string;
  country: string;
  detail: string;
  password: string;
  email: string;
  fav: string[];
}

export interface ProductsType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  hasPrime?: any;
  quantity: number;
}

export interface Collections {
  id: number;
  mainImg: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  tag: string;
  view: string;
}

export interface ReusableInputType {
  type: string;
  label: string;
  labelType: string;
  className: string;
  setValue: any;
  value: any;
  placeholder?: string;
  inputRef?: any;
  spanText?: string;
  spanImgSrc?: string;
  spanImgAlt?: string;
  spanDir?: string;
  direction?: string;
}

import {Deserializable} from "../interfaces/deserializable.model";

export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  url: string;
}
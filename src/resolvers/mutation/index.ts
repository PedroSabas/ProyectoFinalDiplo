import { NonEmptyArray } from "type-graphql";
import { CategoryMutation } from "./category";
import { ProductMutation } from "./product";
import { StockMutation } from "./stock";

export const mutations: NonEmptyArray<Function> = [
    CategoryMutation,
    ProductMutation,
    StockMutation
]
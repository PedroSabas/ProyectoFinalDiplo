import { NonEmptyArray } from "type-graphql";
import { CategoryQuery } from "./category";
import { ProductQuery } from "./product";
import { StockQuery } from "./stock";

export const queries: NonEmptyArray<Function> = [
    CategoryQuery,
    ProductQuery,
    StockQuery
]
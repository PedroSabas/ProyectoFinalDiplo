import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { Category } from './Category';
import { Product } from './Product';

@ObjectType()
export class Stock {

    @Field((type) => ID)
    stockId: string

    @Field((type) => String)
    encoded?: string;

    @Field((type) => Date)
    createdAt?: Date

    @Field((type) => Date)
    updatedAt?: Date

    @Field((type) => Product, { nullable: true })
    product?: Product | null
 
    
}
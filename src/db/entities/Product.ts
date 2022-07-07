import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { Category } from './Category';

@ObjectType()
export class Product {
    @Field((type) => ID)
    productId: string

    @Field((type) => String) 
    producto?: string;

    @Field((type) => String)
    precio?: string;

    @Field((type) => String) 
    descripcion?: string;
    
    @Field((type) => Date)
    createdAt?: Date

    @Field((type) => Date)
    updatedAt?: Date

    @Field((type) => Category, { nullable: true })
    category?: Category | null
}
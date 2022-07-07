import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { Product } from './Product';


@ObjectType()
export class Category {
    @Field((type) => ID)
    categoryId: string

    @Field((type) => String) 
    categoria?: string;

    @Field((type) => String, { nullable: true })
    descripcion?: string;

    @Field((type) => Date, { nullable: true })
    createdAt?: Date | null

    @Field((type) => Date, { nullable: true })
    updatedAt?: Date | null

    @Field((type) => Product, { nullable: true })
    product?: Product[] | null


}
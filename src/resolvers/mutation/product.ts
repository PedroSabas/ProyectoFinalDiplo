import 'reflect-metadata';
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
    FieldResolver,
    Root,
    ID
} from 'type-graphql';
import { Category, Product } from '../../db/entities';
import { Context } from '../../config/context';


@InputType()
class ProductCreateInput {

    @Field((type) => ID)
    id?: string

    @Field()
    producto: string;

    @Field()
    precio: string;

    @Field()
    descripcion: string;

    // category

    //stock

    /*
    @Field()
    category: string;
    */
   
    /*
    @Field((type) => Date)
    createdAt: Date;

    @Field((type) => Date)
    updatedAt: Date;*/
    // Relaciones entre category
}

@Resolver(Product)
export class ProductMutation {

    // Creamos un producto
    @Mutation((returns) => Product) async createProduct(
        @Arg('data') data: ProductCreateInput, 
        @Arg('categoryId') categoryId: string,
        @Arg('stockId') stockId: string,
        @Ctx() ctx: Context
    ): Promise<Product> {
        return ctx.prisma.product.create({
            data: {
                producto: data.producto,
                precio: data.precio,
                descripcion: data.descripcion,
                category: {
                    connect: { categoryId }
                },
                stock: {
                    connect: { stockId }
                }
            }
        })
    }

    


}
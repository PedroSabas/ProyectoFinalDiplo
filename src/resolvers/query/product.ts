import 'reflect-metadata';
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Arg,
    Int
} from 'type-graphql';
import { Product } from '../../db/entities';
import { Context } from '../../config/context';


@Resolver(Product)
export class ProductQuery {

    // Obtenemos todos los prodcutos
    @Query(() => [Product])
    async allProduct(
        @Ctx() ctx: Context) {
        return ctx.prisma.product.findMany()
    }

    // Obtenemos un solo producto
    @Query(() => Product)
    async productById(
            @Arg('productId', (type) => Int) productId: string,
            @Ctx() ctx: Context
        ) {

        return ctx.prisma.product.findUnique({
            where: {
                productId: productId
            }
        })

    }

    // Obtenemos producto por categoria -- NOTA ESTA SE ENCUENTRA EN LAS MUTATIONS
    /*
    @Query(() => Product)
    async productByCategory(
        @Ctx() ctx: Context, 
        params: { categoryId: string } 
    ) {
        return ctx.prisma.product.findMany({
            where: {
                id: params.categoryId
            }
        })
    }*/
}
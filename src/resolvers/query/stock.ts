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
import { Stock } from '../../db/entities';
import { Context } from '../../config/context';

@Resolver(Stock)
export class StockQuery {

    // Obtenemos el stock
    @Query(() => [Stock])
    async allStock(@Ctx() ctx: Context) {
        return ctx.prisma.stock.findMany()
    }

    // Ontenemos stock
    @Query(() => Stock)
    async stockById(
            @Arg('stockId', (type) => Int) stockId: string,
            @Ctx() ctx: Context 
        ) {

        return ctx.prisma.stock.findUnique({
            where: {
                stockId: stockId
            }
        })

    }
}
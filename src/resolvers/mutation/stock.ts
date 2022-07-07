import 'reflect-metadata';
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
    ID
} from 'type-graphql';
import { Product, Stock } from '../../db/entities';
import { Context } from '../../config/context';



@InputType()
class StockCreateInput {

    @Field()
    encoded: string;
    /*
    @Field((type) => Date)
    createdAt: Date;

    @Field((type) => Date)
    updatedAt: Date;
    // Relaciones entre product

    @Field((type) => Product)
    product: Product*/
}

@Resolver(Stock)
export class StockMutation {
    @Mutation((returns) => Stock) async createStock(
        @Arg('data') data: StockCreateInput,
        @Ctx() ctx: Context
    ): Promise<Stock> {
        return ctx.prisma.stock.create({
            data: {
                encoded: data.encoded
            }
        });
    }
}
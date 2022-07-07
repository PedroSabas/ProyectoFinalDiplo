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
import { Category } from '../../db/entities';
import { Context } from '../../config/context';

@Resolver(Category)
export class CategoryQuery {

    // Obtenemos todas las categorias
    @Query(() => [Category])
    async allCategories(@Ctx() ctx: Context) {
        return ctx.prisma.category.findMany()
    }

    // Ontenemos una sola categoria
    @Query(() => Category)
    async categoryById(
            @Arg('categoryId', (type) => Int) categoryId: string,
            @Ctx() ctx: Context, 
        ) {

        return ctx.prisma.category.findUnique({
            where: {
                categoryId: categoryId || undefined
            }

        })

    }
}
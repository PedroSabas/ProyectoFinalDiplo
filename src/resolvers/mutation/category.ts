import 'reflect-metadata';
import {
    Resolver,
    Query,
    Ctx,
    InputType,
    Field,
    Mutation,
    Arg,
    ID,
    Root,
    FieldResolver
} from 'type-graphql';
import { Category, Product } from '../../db/entities';
import { Context } from '../../config/context';


@InputType()
class CategoryCreateInput {

    @Field((type) => ID, {nullable: true})
    categoryId: string

    @Field()
    categoria: string;

    @Field()
    descripcion: string;

    /*
    @Field((type) => Date)
    createdAt: Date;

    @Field((type) => Date)
    updatedAt: Date;*/

}

@Resolver(Category)
export class CategoryMutation {

    // Creamos categoria
    @Mutation((returns) => Category) async createCategory(
        @Arg('data') data: CategoryCreateInput,
        @Ctx() ctx: Context
    ): Promise<Category> {
        return ctx.prisma.category.create({
            data: {
                categoria: data.categoria,
                descripcion: data.descripcion
            }
        })
    }

    // Atualizamos categoria
    @Mutation((returns) => Category) async updateCategory(
        @Arg('data') data: CategoryCreateInput,
        @Ctx() ctx: Context
    ): Promise<Category> {
        return ctx.prisma.category.update({
            where: { categoryId: data.categoryId },
            data: {
                categoria: data.categoria,
                descripcion: data.descripcion,
            }
        })
    }


    // Obtenemos los productos por categoria
    @FieldResolver(returns => [Product])
    async category(
        @Root() category: Category,
        @Ctx() ctx: Context
    ): Promise<Product[]> {
        return ctx.prisma.category
        .findUnique({ where: { categoryId: category.categoryId } })
        .products()
    }

}

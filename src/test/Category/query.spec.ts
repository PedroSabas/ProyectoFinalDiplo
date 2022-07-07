import { Category } from ".prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../config/context";


import { CategoryQuery } from '../../resolvers/query/category';
import { CategoryMutation } from '../../resolvers/mutation/category';

const categoryClass = new CategoryQuery();

const categoryMutation = new CategoryMutation();

describe('Category query class and Mutation', () => {
    let mockCtx: MockContext;
    let ctx: Context;

    beforeEach(() => {
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context;
    });


    test('should find a category by id', async()=> {
        const expectCategory: Category = {
            categoryId: faker.database.mongodbObjectId(),
            categoria: faker.lorem.text(),
            createdAt: new Date(),
            updatedAt: new Date(),
            descripcion: faker.lorem.text()
        }
        mockCtx.prisma.category.findUnique.mockResolvedValue(expectCategory);
        const response = categoryClass.categoryById(expectCategory.categoryId, mockCtx);
        await expect(response).resolves.toEqual(response);
    });

    test('should create new category', async() => {
        const category: Category = {
            categoryId: "",
            categoria: "Postres",
            descripcion: "All cakes",
            createdAt: new Date('05-07-2022'),
            updatedAt: new Date('05-07-2022'),
            
        }
        mockCtx.prisma.category.create.mockResolvedValue(category);
        const response = categoryMutation.createCategory(category, mockCtx);
        await expect(response).resolves.toEqual(response);
    });


    test('should update a category', async() => {
        const category: Category = {
            categoryId: "",
            categoria: "Postres Updates",
            descripcion: "All cakes Updated",
            createdAt: new Date('05-07-2022'),
            updatedAt: new Date('05-07-2022'),
            
        }
        mockCtx.prisma.category.create.mockResolvedValue(category);
        const response = categoryMutation.updateCategory(category, mockCtx);
        await expect(response).resolves.toEqual(response);
    });


});


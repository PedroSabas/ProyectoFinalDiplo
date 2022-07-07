import { Product } from ".prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../config/context";
import { ProductMutation } from "../../resolvers/mutation/product";
import { ProductQuery } from '../../resolvers/query/product';

const productClass = new ProductQuery();
const productMutation = new ProductMutation();

describe('Product Query class and Mutation', () => {
    let mockCtx: MockContext;
    let ctx: Context;

    beforeEach(() => {
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context;
    });

    test('should find a product by id', async() => {
        const expectProduct: Product = {
            productId: faker.database.mongodbObjectId(),
            producto: faker.lorem.text(),
            precio: faker.lorem.text(),
            descripcion: faker.lorem.text(),
            createdAt: new Date(),
            updatedAt: new Date(),
            categoryId: faker.database.mongodbObjectId(),
            stockId: faker.database.mongodbObjectId()
        }
        mockCtx.prisma.product.findUnique.mockResolvedValue(expectProduct);
        const response = productClass.productById(expectProduct.categoryId, mockCtx);
        await expect(response).resolves.toEqual(response);
    });

    test('should create a new product', async() => {
        const product: Product = {
            productId: faker.database.mongodbObjectId(),
            producto: "Pastel de chocolate",
            precio: "25",
            descripcion: "Pastel de tres leches almendrado sabor chocolate",
            createdAt: new Date('05-07-2022'),
            updatedAt: new Date('05-07-2022'),
            categoryId: faker.database.mongodbObjectId(),
            stockId: faker.database.mongodbObjectId()
        }
        mockCtx.prisma.product.create.mockResolvedValue(product);
        const response = productMutation.createProduct(product, product.categoryId,  product.stockId, mockCtx);
        await expect(response).resolves.toEqual(response);
    });

    
});
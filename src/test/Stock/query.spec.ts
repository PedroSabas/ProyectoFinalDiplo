import { Stock } from ".prisma/client";
import { faker } from '@faker-js/faker';
import { MockContext, Context, createMockContext } from "../../config/context";
import { StockQuery } from "../../resolvers/query/stock";


const stockClass = new StockQuery();

describe('Stock Query class', () => {

    let mockCtx: MockContext;
    let ctx: Context;

    beforeEach(() => {
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context;
    });


    test('should find a category by id', async()=> {
        const expectStock: Stock = {
            stockId: faker.database.mongodbObjectId(),
            encoded: faker.lorem.text(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        mockCtx.prisma.stock.findUnique.mockResolvedValue(expectStock);
        const response = stockClass.stockById(expectStock.stockId, mockCtx);
        await expect(response).resolves.toEqual(response);
    });

});
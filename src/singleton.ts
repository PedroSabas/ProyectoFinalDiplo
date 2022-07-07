import { PrismaClient } from "@prisma/client"; 
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';

import prisma from './client';

// Iniciasión de mock
jest.mock('./client', () => [{
    __esModule: true,
    default: mockDeep<PrismaClient>(),
}]);

beforeEach(()=> {
    //mockClear, revisar
    mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
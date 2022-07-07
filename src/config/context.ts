import {  PrismaClient } from "@prisma/client";
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import prisma from "../client";


export interface Context {
    prisma: PrismaClient;
    
}

export type MockContext = {
    prisma: DeepMockProxy<PrismaClient>;

}
export const createMockContext = (): MockContext => {
    return {
        prisma: mockDeep<PrismaClient>(),   
    }
}
export const context: Context = {
    prisma
}

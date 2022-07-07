import 'reflect-metadata';
import * as tq from 'type-graphql';
//  Apollo proveé todo lo de GrapQl
import { ApolloServer } from 'apollo-server';
import { GraphQLScalarType } from 'graphql';
import { DateTimeResolver } from 'graphql-scalars';

import { context } from './config/context';

// Importamos resolvers y mutations
import { mutations } from './resolvers/mutation';
import { queries } from './resolvers/query';

const app = async () => {
    const schema = await tq.buildSchema({ // Junta todos los resolvers
        resolvers: [...mutations, ...queries],
        scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }]
    })

    new ApolloServer({schema, context}).listen({ port: 4000 }, () => {
        console.log('server ready');
    })
}

app();
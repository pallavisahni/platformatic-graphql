/// <reference path="../global.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import mercurius from 'mercurius';

const schema = `
    type Query {
        example: String
    }
    `
const resolvers = {
    Query: {
        example: async (root: any, args: any, context: any) => {
        return 'Welcome to Platformatic Demo'
        }
    }


}
export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
 // fastify.decorate('example', 'foobar');
    fastify.register(mercurius, {
        schema,
        resolvers,
        graphiql: true
    });
  }

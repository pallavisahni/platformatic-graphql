/// <reference path="../global.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import mercurius from "mercurius";

// schema.js
const schema = `
  type Query {
    example: String
  }
`;

const resolvers = {
  Query: {
    dummy: () => 'Welcome to Platformatic Dummy- service example',
  },
};


export default async function (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions
) {
  fastify.register(mercurius, {
    schema,
    resolvers,
    graphiql: true, // Enable GraphiQL for easy testing
  });}

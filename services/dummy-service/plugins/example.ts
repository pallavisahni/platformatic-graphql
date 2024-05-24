/// <reference path="../global.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from "fastify";

export default async function (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions
) {
  fastify.get('/dummy', async (request, reply) => {
    return { hello: fastify.example }
  })
}

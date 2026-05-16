import type { FastifyInstance } from "fastify";
import { authRoutes } from "./auth.routes";

export async function routes(fastify: FastifyInstance) {

    fastify.get('/check', async () => {
        return { data: 'Api gbriel online!' }
    });

    fastify.register(authRoutes, {prefix: '/auth'});

}
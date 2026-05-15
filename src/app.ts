import fastify from "fastify";
import { routes } from "./routes/index.js";
import { jwtplugin } from "./plugins/jwt.js";
import { authMiddleware } from "./middlewares/auth.js";
import { logger } from "./middlewares/logger.js";

export const app = fastify();
app.register(routes);
app.register(jwtplugin);
app.addHook('onRequest', authMiddleware);
app.addHook('onResponse', logger);
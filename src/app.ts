import fastify from "fastify";
import { routes } from "./routes/index.js";
import { jwtplugin } from "./plugins/jwt.js";
import { authMiddleware } from "./middlewares/auth.js";
import { logger } from "./middlewares/logger.js";
import docsPlugin from "./plugins/docs.js";

export const app = fastify();
app.register(jwtplugin);
app.register(docsPlugin);
app.addHook('onRequest', authMiddleware);
app.addHook('onResponse', logger);
app.register(routes);
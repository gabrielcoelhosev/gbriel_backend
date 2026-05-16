import type { FastifyInstance } from "fastify";
import { ProjectsController } from "../modules/projects/projects.cotroller";

const projectsController = new ProjectsController()

export async function projectsRoutes(fastify: FastifyInstance){
    fastify.post('/create', projectsController.create);
}
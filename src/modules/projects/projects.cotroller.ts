import type { FastifyRequest, FastifyReply } from "fastify"
import { ProjectsService } from "./projects.service"
import { createProjectSchema } from "./projects.schema";

const projectsService = new ProjectsService();

export class ProjectsController {
    async create(
        request: FastifyRequest,
        resply: FastifyReply
    ) {

        const body = createProjectSchema.parse(request.body);

        const project = await projectsService.create(body)
    }
}
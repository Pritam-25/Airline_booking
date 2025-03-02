import { PrismaClient, Prisma } from "@prisma/client";
import { logger } from "../config";

export class CrudRepository<T> {
    private model;

    constructor(model: any) {
        this.model = model;
    }

    async create(data: any): Promise<T> {
        try {
            return await this.model.create({ data });
        } catch (error) {
            logger.error("Something went wrong in the Crud Repository: create", error);
            throw error;
        }
    }

    async delete(id: number): Promise<T | null> {
        try {
            return await this.model.delete({
                where: { id },
            });
        } catch (error) {
            logger.error("Something went wrong in the Crud Repository: delete", error);
            throw error;
        }
    }

    async get(id: number): Promise<T | null> {
        try {
            return await this.model.findUnique({
                where: { id },
            });
        } catch (error) {
            logger.error("Something went wrong in the Crud Repository: get", error);
            throw error;
        }
    }

    async update(id: number, data: Partial<T>): Promise<T> {
        try {
            return await this.model.update({
                where: { id },
                data,
            });
        } catch (error) {
            logger.error("Something went wrong in the Crud Repository: update", error);
            throw error;
        }
    }

    async getAll(): Promise<T[]> {
        try {
            return await this.model.findMany();
        } catch (error) {
            logger.error("Something went wrong in the Crud Repository: getAll", error);
            throw error;
        }
    }
}

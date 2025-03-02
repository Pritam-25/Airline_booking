import { CrudRepository } from "./curd-repository";
import { Airplane, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


class AirplaneRepository extends CrudRepository<Airplane>{
    constructor(){
        super(prisma.airplane)
    }
}

export default AirplaneRepository
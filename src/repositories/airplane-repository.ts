import db from "../config/db-config";
import { CrudRepository } from "./crud-repository";
import { Airplane } from "@prisma/client";

class AirplaneRepository extends CrudRepository<Airplane> {
    constructor() {
        super(db.airplane)
    }
}

export default AirplaneRepository
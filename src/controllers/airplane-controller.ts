import { Request, Response } from "express";
import { Airplane } from "@prisma/client";
import AirplaneService from "../services";
import { StatusCodes } from "http-status-codes";

export async function createAirplane(req: Request, res: Response) {
    try {
        // ✅ Extract only modelNumber & capacity from Airplane model
        const { modelName, capacity }: Pick<Airplane, "modelName" | "capacity"> = req.body;

        if (!modelName || !capacity) {
            res.status(400).json({ error: "modelName and capacity are required" });
            return
        }

        // Call the service function
        const airplane = await AirplaneService.createAirplane({ modelName, capacity });

        // console.log(airplane);

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created an airplane",
            data: airplane,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while creating airplane",
            data: {},
            error: (error as Error).message
        });
    }
}

const AirplaneController = { createAirplane };
export { AirplaneController };

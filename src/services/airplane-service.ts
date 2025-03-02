import AirplaneRepository from "../repositories";

const airplaneRepository = new AirplaneRepository()

async function createAirplane(data:any) {
    try {
        console.log("Creating airplane with data:", data);
        const airplane = await airplaneRepository.create(data)
        return airplane;
    } catch (error) {
        console.error("Error in service layer:", error);
        throw error
    }
}

export default createAirplane
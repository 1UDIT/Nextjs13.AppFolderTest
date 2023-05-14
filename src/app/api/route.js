import { connectToDB } from "../../../utils/dbConn";
import ApiModel from "../model/ApiFormate";



export const GET = async (req, res) => {
    await connectToDB();
    try {
        console.log(res, "API");
        const RespData = await ApiModel.find({})
        console.log(RespData, "RespData");
        return new Response(RespData, { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 
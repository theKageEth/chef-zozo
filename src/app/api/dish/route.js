import dbConnect from "@/utils/mongo/db";
import Dish from "@/utils/models/schemas/Dish";

export const GET = async (req) => {
  try {
    await dbConnect();
    const dishes = await Dish.find();
    return new Response(JSON.stringify(dishes), { status: 200 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

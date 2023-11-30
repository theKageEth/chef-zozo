import dbConnect from "@/utils/mongo/db";
import Dish from "@/utils/mongo/models/schemas/Dish";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    await dbConnect();

    const dish = await Dish.findById(id);

    return new Response(JSON.stringify(dish), { status: 200 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await dbConnect();

    const dish = await Dish.findByIdAndDelete(id);

    return new Response("dish deleted", { status: 200 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

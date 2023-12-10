import dbConnect from "@/utils/mongo/db";
import Desert from "@/utils/mongo/models/schemas/Desert";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    await dbConnect();

    const dish = await Desert.findById(id);

    return new Response(JSON.stringify(dish), { status: 200 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await dbConnect();

    const dish = await Desert.findByIdAndDelete(id);

    return new Response("dish deleted", { status: 200 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

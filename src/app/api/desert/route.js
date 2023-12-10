import dbConnect from "@/utils/mongo/db";
import Desert from "@/utils/mongo/models/schemas/Desert";

export const GET = async (req) => {
  try {
    await dbConnect();
    const dishes = await Desert.find();
    return new Response(JSON.stringify(dishes), { status: 200 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

export const POST = async (req) => {
  const body = await req.json();
  const newDish = new Desert(body);
  try {
    await dbConnect();

    await newDish.save();

    return new Response("post has been created", { status: 201 });
  } catch (error) {
    return new Response("error in route dbConnect", { status: 500 });
  }
};

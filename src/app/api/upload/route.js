// api/upload.js
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const config = {
  api: {
    bodyParser: false, // Disabling default body parsing
  },
};

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");

  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    return NextResponse.json({ message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occurred: ", error);
    return NextResponse.json({ message: "Failed", status: 500 });
  }
};

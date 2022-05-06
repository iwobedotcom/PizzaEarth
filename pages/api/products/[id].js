import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product";
export default async function handler(request, response) {
  const {
    method,
    query: { id },
    cookies,
  } = request;

  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      response.status(200).json(product);
    } catch (error) {
      response.status(500).json(error);
    }
  }
  if (method === "PUT") {
    if (token !== process.env.token) {
      return response
        .status(401)
        .json("You are not allowed to perform this operation.");
    }
    try {
      const product = await Product.create(request.body);
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "max-age=180000");
      response.status(201).json(product);
    } catch (error) {
      response.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    if (token !== process.env.token) {
      return response
        .status(401)
        .json("You are not allowed to perform this operation.");
    }
    try {
      const product = await Product.findByIdAndDelete(id);
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "max-age=180000");
      response.status(200).json(product);
    } catch (error) {
      response.status(500).json(error);
    }
  }
}

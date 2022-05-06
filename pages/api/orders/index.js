import dbConnect from "../../../utils/dbConnect";
import Order from "../../../models/Order";

export default async function handler(request, response) {
  const { method } = request;

  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find();
      response.status(200).json(orders);
    } catch (error) {
      response.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const order = await Order.create(request.body);
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "max-age=180000");
      response.status(201).json(order);
    } catch (error) {
      response.status(500).json(error);
    }
  }
}

import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Payment } from "@prisma/client";

// POST /api/payment
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const payment: Payment = req.body;
  const result = await prisma.payment.create({
    data: {
      PaymentID: Number(payment.PaymentID),
      ClientID: Number(payment.ClientID),
      Amount: Number(payment.Amount),
      Date: new Date(String(payment.Date)),
    },
  });
  res.json(result);
}

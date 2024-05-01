import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Payment } from "@prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const paymentId = req.query.id;
  if (req.method === "DELETE") {
    // DELETE /api/payment/:id
    const post = await prisma.payment.delete({
      where: { PaymentID: Number(paymentId) },
    });
    res.json(post);
  } else if (req.method === "PUT") {
    // PUT /api/payment/:id
    const payment: Payment = req.body;
    const post = await prisma.payment.update({
      where: { PaymentID: Number(paymentId) },
      data: {
        PaymentID: Number(payment.PaymentID),
        ClientID: Number(payment.ClientID),
        Amount: Number(payment.Amount),
        Date: new Date(String(payment.Date)),
      },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}

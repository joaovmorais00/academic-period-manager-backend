import { PrismaClient } from "@prisma/client";
import express from "express";

import { Router, Request, Response } from "express";

import { z } from "zod";

const app = express();
const port = 3333;
const prisma = new PrismaClient();

const route = Router();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

app.post("/period", async (request: Request, response: Response) => {
  const createPeriodBody = z.object({
    title: z.string(),
  });

  const { title } = createPeriodBody.parse(request.body);

  const res = await prisma.period.create({
    data: {
      title,
    },
  });

  response.send(res);
});

app.use(route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

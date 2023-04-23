import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const addUser = async (req: Request, res: Response) => {
  const { id, email, name, social } = req.body;
  const newUser = await prisma.user.create({
    data: {
      id,
      email,
      name,
      social,
    },
  });
  res.json(`User added: ${newUser}`);
};

const getUserByID = async (req: Request, res: Response) => {
  const id = +req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  res.json(user);
};

const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({});
  res.json(users);
};

export { addUser, getUserByID, getAllUsers };

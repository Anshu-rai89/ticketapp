import { Response, Request } from "express";
import { Ticket } from "../Modals/Ticket";
import { NotFoundError } from "../../common/src/index";
export const create = async (req: Request, res: Response) => {
  const doc = req.body || {};
  const { title, price } = doc;
  let ticket = Ticket.build({ title, price, userId: req.currentUser!.id });
  await ticket.save();

  return res.status(201).send(ticket);
};

export const getTickets = async (req: Request, res: Response) => {
  try {
    let tickets = await Ticket.find({});
    return res.status(200).send(tickets);
  } catch (err) {
    throw new Error("Error in getting Tickets");
  }
};

export const getTicket = async (req: Request, res: Response) => {
  let ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    throw new NotFoundError();
  }

  res.status(200).send(ticket);
};

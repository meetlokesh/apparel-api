import { Request, Response } from 'express';
import { canFulfillOrder, calculateLowestCost } from '../services/apparelService';

export const checkOrder = (req: Request, res: Response) => {
  const canFulfill = canFulfillOrder(req.body);
  res.status(200).json({ canFulfill });
};

export const getLowestCost = (req: Request, res: Response) => {
  try {
    const cost = calculateLowestCost(req.body);
    res.status(200).json({ cost });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

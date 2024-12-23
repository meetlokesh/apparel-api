import { Request, Response } from 'express';
import { updateSingleApparel, updateMultipleApparels } from '../services/apparelService';

export const updateApparel = (req: Request, res: Response) => {
  updateSingleApparel(req.body);
  res.status(200).json({ message: 'Apparel updated successfully' });
};

export const bulkUpdateApparel = (req: Request, res: Response) => {
  updateMultipleApparels(req.body);
  res.status(200).json({ message: 'Bulk update successful' });
};

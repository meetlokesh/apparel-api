import { Router } from 'express';
import { checkOrder, getLowestCost } from '../controllers/customerController';

const router = Router();

router.post('/check-order', checkOrder);
router.post('/lowest-cost', getLowestCost);

export default router;

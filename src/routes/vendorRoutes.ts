import { Router } from 'express';
import { updateApparel, bulkUpdateApparel } from '../controllers/vendorController';

const router = Router();

router.put('/update', updateApparel);
router.put('/bulk-update', bulkUpdateApparel);

export default router;

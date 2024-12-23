import express from 'express';
import vendorRoutes from './routes/vendorRoutes';
import customerRoutes from './routes/customerRoutes';

const app = express();

app.use(express.json());
app.use('/vendor', vendorRoutes);
app.use('/customer', customerRoutes);

export default app;

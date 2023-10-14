import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
// import path from 'path';

import authRouter from './routes/auth.route.js';
import itemRouter from './routes/item.route.js';
import certificateRouter from './routes/certificate.router.js';
import serviceRouter from './routes/service.route.js';
import portfolioRouter from './routes/portfolio.route.js';
import socialRouter from './routes/social.route.js';

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
});

// const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/auth', authRouter);
app.use('/api/items', itemRouter);
app.use('/api/certificates', certificateRouter);
app.use('/api/services', serviceRouter);
app.use('/api/socials', socialRouter);
app.use('/api/portfolios', portfolioRouter);

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

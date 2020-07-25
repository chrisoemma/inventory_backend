import express from 'express';
import path from 'path';
import db from './config/database';
import cookieParser from 'cookie-parser'
const logger = require('morgan'); 
import ExpenseRouter  from './routes/api/expense';
import ExpenseCategoryRouter  from './routes/api/expenseCategory';
import PaymentMethodRouter from './routes/api/paymentMethod';
import LocationRouter from './routes/api/location';
import RegionRouter from './routes/api/region';
import OutletRouter from './routes/api/outlet';
import VendorRouter from './routes/api/vendor';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/expenses', ExpenseRouter);
app.use('/api/v1/expense_categories', ExpenseCategoryRouter);
app.use('/api/v1/payment_methods', PaymentMethodRouter);
app.use('/api/v1/locations', LocationRouter);
app.use('/api/v1/regions', RegionRouter);
app.use('/api/v1/outlets', OutletRouter);
app.use('/api/v1/vendors', VendorRouter);


//prevent cors errors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
	if (req.method === "OPTIONS") {
		res.header('Access-Control-Allow-Methods', 'PUT,PATCH,POST,GET,DELETE');
		return res.status(200).json({});
	}
	next();
  });

//error hundleling 
app.use((res, req, next) => {
	const error = new Error('Not found');
	res.status = 404;
	next(error);
  });
  
  app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
	  error: {
		message: error.message
	  }
	});
  });
  // error handler
  app.use(function (err, req, res, next) {

	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
  
	// render the error page
	res.status(err.status || 500);
	res.render('error');
  });


export default app
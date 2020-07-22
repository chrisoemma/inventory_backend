import express from 'express';
import path from 'path';
import db from './config/database';
import cookieParser from 'cookie-parser'
const logger = require('morgan'); 
import ExpenseRouter  from './routes/api/expense';
import ExpenseCategoryRouter  from './routes/api/expenseCategory';
import PaymentMethodRouter from './routes/api/paymentMethod'

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/expenses', ExpenseRouter);
app.use('/api/v1/expense_categories', ExpenseCategoryRouter);
app.use('/api/v1/payment_methods', PaymentMethodRouter);

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
import Expense from "../models/Expense";

export const getExpenses = (req, res, next) => {
  Expense.findAll()
    .then((docs) => {
      const reponse = {
		  code:200,
		  message:"successfully",
		  count:docs.length,
		  data:docs.map(doc=>{
			  return{
				  id:doc.id,
				  expenseCategoryId:doc.expCategory,
				  name:doc.name
			  }
		  })
	  }
	  res.status(200).json(reponse);
    })
    .catch((err) => {
      res.status(500).json({
        code: err.status,
        error: err,
        name: err.name,
        stack: err.stack,
      });
    });
};

export const newExpense= (req,res,next)=>{

	const expense = Expense.build({
		name : req.body.name,
		expCategory:req.body.expenseCategoryId,
        createdAt: new Date(),
        updatedAt: new Date()
	});
	
	expense
	.save()
	.then(result => {

		res.status(200).json({
			code: 201,
			message: "Succesfully",
			createdExpense: {
				id:result.id,
				expenseCategoryId:result.expCategory,
				name:result.name,
				createdAt: result.createdAt,
				updatedAt: result.updatedAt,
				request: {
					type: 'POST',
				}
			}
		});
	})
	.catch(err => {
		console.log(err)
		res.status(500).json({
			error: err
		});
	});
}


export const deleteExpense = (req,res,next)=>{
	const expenseId = req.params.expenseId;

	Expense.destroy({
		where: {
			id:expenseId
		}
	})
	.then(result=>{
		 res.status(200).json({
			code: 200,
			message: "Succesfully deleted", 
		 })
	})
	.catch(err => {
		console.log(err)
		res.status(500).json({
			error: err
		});
	});
 
}

export const editExpense = (req,res,next)=>{

	const expenseId = req.params.expenseId;

  Expense.findOne({ where: { id:expenseId  } })
  .then(expense=>{
	  expense.update({
		 name: req.body.name,
		 expCategory:req.body.expenseCategoryId
		
	  });
	  res.status(200).json({
		code: 200,
		message: "Succesfully updated", 
	 }) 
  })
  .catch(err => {
	console.log(err)
	res.status(500).json({
		error: err
	});
});
}









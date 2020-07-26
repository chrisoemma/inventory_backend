import ExpenseCategory from "../models/ExpenseCategory";

export const getExpenseCategories = (req, res, next) => {
  ExpenseCategory.findAll()
    .then((docs) => {
      const reponse = {
		  code:200,
		  message:"successfully",
		  count:docs.length,
		  data:docs.map(doc=>{
			  return{
				  id:doc.id,
          name:doc.name,
          code :doc.code
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

export const newExpenseCategory = (req,res,next)=>{
	const expenseCategory = ExpenseCategory.build({
        name : req.body.name,
        code:req.body.code,
        createdAt: new Date(),
        updatedAt: new Date()
	});
	
	expenseCategory
	.save()
	.then(result => {
		res.status(200).json({
			code: 201,
			message: "Succesfully",
			createdProduct: {
				id: result.id,
               name: result.name,
              code:result.code,
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

export const deleteExpenseCategory = (req,res,next)=>{
  const expenseCategoryId = req.params.categoryId;
  
 const notfound=ExpenseCategory.findOne({ where: { id: expenseCategoryId } });

 if(notfound){

ExpenseCategory.destroy({
		where: {
			id:expenseCategoryId
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
  
}else{

  res.status(404).json({
    code: 404,
    message: "The data not found"
});
 
}

}

export const editExpenseCategory = (req,res,next)=>{
  
	const categoryId = req.params.categoryId;

  ExpenseCategory.findOne({ where: { id:categoryId} })
  .then(expenseCategory=>{
	  expenseCategory.update({

     name: req.body.name,
     code:req.body.code
		
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



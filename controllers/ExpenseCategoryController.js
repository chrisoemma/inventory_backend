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




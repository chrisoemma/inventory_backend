import PaymentMethod from "../models/PaymentMethod";

export const getPaymentMethods = (req, res, next) => {

	PaymentMethod.findAll()
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

export const newPaymentMethod = (req,res,next)=>{

	const paymentMethod = PaymentMethod.build({
        name : req.body.name,
        createdAt: new Date(),
        updatedAt: new Date()
	});
	
	paymentMethod
	.save()
	.then(result => {
		res.status(200).json({
			code: 201,
			message: "Succesfully",
			createdProduct: {
				id: result.id,
				name: result.name,
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

export const deletePaymentMethod = (req,res,next)=>{
	const paymenMethodtId = req.params.methodId;

	PaymentMethod.destroy({
		where: {
			id:paymenMethodtId
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

export const editPaymentMethod = (req,res,next)=>{
	const paymenMethodtId = req.params.methodId;

  PaymentMethod.findOne({ where: { id:paymenMethodtId  } })
  .then(paymentMethod=>{
	  paymentMethod.update({
		 name: req.body.name,
		
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




import Vendor from "../models/Vendor";

export const getVendors = (req, res, next) => {
  Vendor.findAll()
    .then((docs) => {
      const reponse = {
		  code:200,
		  message:"successfully",
		  count:docs.length,
		  data:docs.map(doc=>{

			  return{
				id:doc.id,
				name:doc.name,
				email:doc.email,
				phone:doc.phone,			  
				status:doc.status,
				locationId:doc.locationId,
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




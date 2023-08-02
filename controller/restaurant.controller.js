const restaurantsModel = require("../model/restaurant.model");

exports.create = (req, res) =>{
    const {
        name,
        cuisines,
        avgRating,
        deliveryTime,
        costForTwo,
        cloudinaryImageId,
    } = req.body;

    const newRestaurant = new restaurantsModel({
        
        name,
        cuisines,
        avgRating,
        deliveryTime,
        costForTwo,
        cloudinaryImageId,
    });
    newRestaurant
    .save()
    .then((data) =>{
        if(!data){
            res.status(404).json({message:"something went wrong"});
        }
        res.send(data);
    })
        .catch((err) =>{
            res.status(500).send({message:"server not available"});
        });  
};



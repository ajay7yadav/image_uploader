const Image = require('../models/user_Schema');

exports.proccessFile = async(req, res)=>{
    let file = req.file.filename;
    try {
        const fs = await Image.create({file});

        res.status(201).send({
            message : "Image uploaded"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({message : "Internal Error !"});
    }
}
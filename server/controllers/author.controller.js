const {Author} = require("../models/author.model")


// get all Authors
module.exports.allAuthors = (req, res) => {
    Author.find({})
        .then(jobs=>res.json(jobs))
        .catch(err=>res.status(400).json(err))
}

// get one Author
module.exports.oneAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(oneJob=>res.json(oneJob))
        .catch(err=>res.status(400).json(err))
}

// create a Author
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(job=>res.json(job))
        .catch(err=>res.status(400).json(err))
}

// edit a Author
module.exports.editAuthor = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id},req.body, {new:true, runValidators:true})
        .then(response=>res.json(response))
        .catch(err=>res.status(400).json(err))
}

// delete a Author
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
        .then(response=>res.json(response))
        .catch(err=>res.status(400).json(err))
}
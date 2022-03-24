const AuthorController = require("../controllers/author.controller")

module.exports = (app)=>{
    app.get("/api/authors", AuthorController.allAuthors)
    app.get("/api/authors/:id", AuthorController.oneAuthor)
    app.post("/api/authors", AuthorController.createAuthor)
    app.put("/api/authors/:id", AuthorController.editAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAuthor)
}
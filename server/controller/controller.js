const Userdb = require("../model/model");

//Create and Save User
exports.create = (req, res) => {
  console.log(req.body, 'UUUUUURRRRR')
  if (!req.body) {
    res.status(400).send({
      message: "Fields must be filled in order to create a user",
    });
    return;
  }
  const user = new Userdb(req.body);
   user
    .save()
    .then((data) => {
      console.log(data, 'HHHHHHHHHH')
      res.redirect('/')
    })
    .catch((err) => {
      res.status(500).send({
        message:"An error occured",
      });
    });
};

//Retrieve all or a single User
exports.find = (req, res) => {
  
  if (req.query.id) {
    const id = req.query.id;
    return Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: "No User with the specified id",
          });
        }
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return Userdb.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.err(err);
    });
};

//Update a particular user
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Nothing to update" });
  }
  const id = req.params.id;
  const data = req.body.data
  Userdb.findByIdAndUpdate(id, {$set: data}, {new: true})
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: err.message || "An error occured while updating user",
        });
      }
      
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

//Remove a particular user
exports.delete = (req, res) => {
  const id = req.params.id;
  console.log(req, "Helllllllllll")
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      console.log(data, "Hello")
      if (!data) {
        return res.status(404).send({
          message: "Cannot delete user with specified id",
        });
      }
      return res.send({deleted: true})
    })
    .catch((err) => {
      console.error(err);
    })
    
};

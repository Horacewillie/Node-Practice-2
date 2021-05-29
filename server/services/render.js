const axios = require("axios");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then((users) => {
      res.render("index", {
        users: users.data,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.updateUserRoutes = (req, res) => {
  const {id} = req.query
  axios
    .get(`http://localhost:3000/api/users?id=${id}`)
    .then((user) => {
      console.log(user)
      res.render("update-user", {
        user: user.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addUserRoutes = (req, res) => {
  res.render("add-user");
};

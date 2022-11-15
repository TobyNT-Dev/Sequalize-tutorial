const UserModel = require("../Models/user.model.js");

class UserController {
  constructor() {
    console.log("Instance call of user controller");
  }

  list = async (req, res) => {
    const result = await UserModel.findAll({
      attributes: ["id", "username", "telefon"],
    });
    res.json(result);
  };

  create = async (req, res) => {
    const { username, password, telefon } = req.body;
    if (username && password) {
      const user = await UserModel.create(req.body);
      return res.json({ newId: user.id });
    } else {
      console.log("Create failed");
      res.sendStatus(418);
    }
  };
}

module.exports = { UserController };

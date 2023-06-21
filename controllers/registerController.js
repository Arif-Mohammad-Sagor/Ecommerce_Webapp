const userModel = require('../models/userModel');
const hashPassword = require('../helper/hassPassword');

const registerController = async(req, res) => {

    try {
        const { name, email, password, phone, address } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
          res.status(200).send({
            success: true,
            message: "user already exists",
          });
        }
        const hashedPassword = await hashPassword(password);

        const user = new userModel({
          name,
          email,
          password: hashedPassword,
          phone,
          address,
        });
        const savedUser = await user.save();
        res.status(201).send({
          success: true,
          message: "User registered successfully",
          user: savedUser,
        });

   } catch (error) {
  res.status(500).send({
    success: false,
    message: "Error in registration",
    error: error.message,
  });
   }

}


module.exports = registerController;
import User from "../models/User.js"


export const createAdmin = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Admin",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const createAlumini = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Alumini",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };


  export const createStudent = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "student",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };



  export const getAllUser=async(req,res)=>{
    try {
    const getUsers= await User.find()
    res.json({
      getUsers
    })
    } catch (error) {
      res.json({
        error:"Cannot featch data"
      })
      console.log(error);
    }
  }
import { get } from "mongoose";
import companyModel from "../models/Company.js";




export const createCompany = async (req, res) => {
    try {
      const { name, location,industry,email } = req.body;
  
      const CompanyObj = new companyModel({
        name,
        location,
        industry,
        email
      });
  
      const savedCompanyObj = await CompanyObj.save();
  
      res.json({
        savedCompanyObj,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

  export const getCompanies=async(req,res)=>{
    try {
    const getcompanies= await companyModel.find()
    res.json({
        getcompanies
    })
    } catch (error) {
      res.json({
        error:"Cannot featch data"
      })
      console.log(error);
    }
  }
import validator from 'validator';
import bcrypt from 'bcrypt';

import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';


// API for adding doctor
const addDoctor = async (req, res) =>{
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file
        console.log(req.body);
        
        // checking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        
        //validating email format
        if(!validator.isEmail(email)){
            return res.status(400).json({ message: "Please enter a valid email" });
        }

        //validating password length
        if(password.length < 6){
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        // uploading image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image",
        });
        const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
            password: hashedPassword,
            image: imageUrl,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now(),
        };

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save();

        res.json({success:true, message: "Doctor added successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error at doctor saving" });
    }
}

//API for admin login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign( email+password , process.env.JWT_SECRET);
            res.status(200).json({ success:true, message: "Login successful", token });
        }
        else {
            res.status(400).json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error at doctor saving" });
    }
}

//API for getting all doctors

const allDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select("-password");
        res.status(200).json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success:false, message: "Internal server error at doctor saving" });
    }
}

export { addDoctor, loginAdmin, allDoctors };
import multer from "multer";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

export default upload;

//multer is a middleware package for handling file uploads in Node.js applications using Express. 
// It processes incoming file data and attaches it to the request object (req.file or req.files).
import jwt from 'jsonwebtoken';

//user auth middleware

const authUser = async (req, res, next)=>{
    try {
        const {token} = req.headers;
        
        if(!token){
            return res.status(401).json({success:false, message: "Unauthorized Token Not Available" });
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = { id: token_decode.id };
        
        
        next();
    } catch (error) {
        console.log(error);
        
        return res.status(401).json({ message: "Unauthorized" });
    }
}

export default authUser;

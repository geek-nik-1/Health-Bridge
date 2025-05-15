import jwt from 'jsonwebtoken';

//admin auth middleware

const authAdmin = async (req, res, next)=>{
    try {
        const {atoken} = req.headers;
        console.log(atoken);
        
        if(!atoken){
            return res.status(401).json({ message: "Unauthorized Token Not Available" });
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
        if(token_decode != process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.status(401).json({ message: "Unauthorized Invalid" });
        }
        next();
    } catch (error) {
        console.log(error);
        
        return res.status(401).json({ message: "Unauthorized" });
    }
}

export default authAdmin;
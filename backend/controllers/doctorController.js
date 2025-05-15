import doctorModel from "../models/doctorModel.js";

const ChangeAvailability = async (req, res) => {
    try{
        const {docId} = req.body;
        const docData = await doctorModel.findById(docId);

        await doctorModel.findByIdAndUpdate(docId, {available: !docData.available});
        res.status(200).json({success:true, message: "Availability changed successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message: "Internal server error at doctorController"});
    }
}

const doctorList  = async (req, res) => {
    try{
        const doctors = await doctorModel.find({}).select("-password -email");
        res.status(200).json({success:true, doctors});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message: "Internal server error at doctorController"});
    }
}

export { ChangeAvailability, doctorList };
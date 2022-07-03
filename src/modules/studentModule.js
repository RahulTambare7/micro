
const Student = require('../models/Student')
module.exports = {
    getData: async(params) => {
        // authentication
        
    },
    addDetails: async(params) => {
        try{
            const result = await Student.create({
                "firstName":params.firstName,
                "fatherName":params.middleName,
                "lastName":params.lastName,
                "class":params.class
            })
            console.log(result)
            return result;
        }catch(err){
            console.log("err in db::::",err)
            throw new Error(err);
        }
    },
    editDetails: async(params) => {
        try{
            const result = await Student.findByIdAndUpdate(params.id,{
                "firstName":params.firstName,
                "fatherName":params.middleName,
                "lastName":params.lastName,
                "class":params.class
            })
            return result;
        }catch(err){
            throw new Error(err);
        }
    },
    updateDetails: async(params) => {
        try{
            const result = await Student.updateOne({"firstName":params.firstName},{
                "firstName":params.firstName,
                "fatherName":params.middleName,
                "lastName":params.lastName,
                "class":params.class
            })
            return result;
        }catch(err){
            throw new Error(err);
        }
    }
}
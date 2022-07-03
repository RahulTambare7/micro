const mongoose = require('mongoose')
const schema = new mongoose.Schema(
    {
        "firstName":String,
        "fatherName":String,
        "lastName":String,
        "calss":String,
        "created_at":{type:Date,default:Date.now()},
        "updated_at":{type:Date,default:Date.now()}
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    },
    {
        collection:"student"
    }
)

module.exports = mongoose.model("Student",schema);
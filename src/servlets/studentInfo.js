const studentModule = require('../modules/studentModule')
module.exports = {
    getData: (req, res, next) => {
        try{
            
            // const result = await studentModule.
            // res.status(200).JSON({
            //     "message": "success",
            //     "body": JSON.stringify(result)
            // })
        }catch (e){
            console.log(e);
            res.status(500).json({
                "message": "failure",
                "body": []
            });
        }
    },
    addDetails: async(req, res, next) => {
        try{
            // authentication
            const reqBody = req.body
            console.log("reqBody",reqBody);
            const result = await studentModule.addDetails(reqBody);
            // console.log("reqBody",result);
            res.status(200).json({
                "message": "success",
                "body": {...result}
            })
        }catch (e){
            console.log(e);
            res.status(500).json({
                "message": "failure",
                "body": []
            });
        }
    },
    editDetails: async(req, res, next) => {
        try{
             // authentication
            const reqBody = JSON.parse(req.body)
            const result = await  studentModule.editDetails(reqBody);
            res.status(200).json({
                "message": "success",
                "body": JSON.stringify(result)
            })
        }catch (e){
            console.log(e);
            res.status(500).json({
                "message": "failure",
                "body": []
            })
        }
       
    },
    updateDetails: async(req, res, next) => {
        try{
            // authentication
            const reqBody = JSON.parse(req.body)
           const result = await studentModule.updateDetails(reqBody)
           res.status(200).json({
               "message": "success",
               "body": JSON.stringify(result)
           })
        }catch (e){
            console.log(e);
            res.status(500).json({
                "message": "failure",
                "body": []
            })
       }
    }
}

const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    Name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    password:{type:String, required:true},
    confirmPassword:{type: String, required:true},
    dob:{type: String,required:true},
    height:{type: String, required:true},
    education:{type: String, required:true},
    religion:{type: String, required:true}
})
const UserBacicInfo = model("UserBasicInfo", userSchema);
module.exports = UserBacicInfo;
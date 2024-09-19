const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    student_id: String,
    first_name: String,
    last_name: String,
    gender: String,
    email: String,
    age: Number,
    mobile_no: String,
    rollno: String,
     day_present : Number,
     day_absent : Number

})
const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel




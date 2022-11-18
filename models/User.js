import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Please provide name'], minlength: 3, maxlength: 20, trim: true,},
    email: {type: String, required: [true, 'Please provide email'], validate: {validator: validator.isEmail, message: 'Please provide valid email'}, unique: true, minlength: 6,},
    password: {type: String, required: [true, 'Please provide password'], minlength: 3, maxlength: 20, trim: true, select: false,},
    lastName: {type: String, maxlength: 20, trim: true, default: "lastName",},
    location: {type: String, maxlength: 20, trim: true, default: 'my city',}
});

userSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

userSchema.methods.createJWT = function () {
    console.log(this) // to showcase we can always access it, extend the inbuild mongoose schema functions => call it from authController
    //jwt.sign(payload(what we are sending=>user_id), secret, options)
    //for prototyp components => userId+componentId
    return jwt.sign({userId:this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
};

userSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

export default mongoose.model('User', userSchema)

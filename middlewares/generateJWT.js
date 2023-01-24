const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const options = {
    expiresIn: '1h',
};

exports.generateJWT = (email)=>{
    try {
        const payload = {email};
        const token = jwt.sign(payload, process.env.JWT_SECRET, options);
        return { error: false, token};
    } catch (error) {
        return { error: true };
    }
}

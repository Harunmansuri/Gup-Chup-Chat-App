import jwt from 'jsonwebtoken';

const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWTTOKEN, { expiresIn: '5D' });
    res.cookie('jwt', token, { httpOnly: true, secure: true, sameSite: 'Strict' });

};
export default createTokenAndSaveCookie;
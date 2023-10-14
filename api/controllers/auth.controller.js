import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

let EMAIL = process.env.EMAIL;
let PASSWORD = process.env.PASSWORD;

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (email == EMAIL && password == PASSWORD) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);

        var token = jwt.sign(
        {
            name: email,
            exp: exp.getTime() / 1000,
        },
        process.env.JWT_SECRET
        );

        const res_data = {
            returncode: "300",
            token: token,
        };
        // res.send(res_data);
        res
            .cookie('access_token', token)
            .status(200)
            .json(res_data);
    } else {
        const res_data = {
          returncode: "200",
        };
        res.send(res_data);
    }
}
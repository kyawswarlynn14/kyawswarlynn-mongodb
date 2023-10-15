import { expressjwt as jwt } from 'express-jwt';
import dotenv from 'dotenv';
dotenv.config();

function authJwt() {
    return jwt({
        //secret
        secret: process.env.JWT_SECRET,
        algorithms: ['HS256'],
    }).unless({
        path: [
            {url: /\/*/,methods: ['GET', 'OPTIONS']},
            {url: /\/api\/auth\/login/,methods: ['POST', 'OPTIONS']},
            {url: /\/api\/items(.*)/ , methods: ['GET', 'OPTIONS'] },
            {url: /\/api\/services(.*)/ , methods: ['GET', 'OPTIONS'] },
            {url: /\/api\/socials(.*)/ , methods: ['GET', 'OPTIONS'] },
            {url: /\/api\/portfolios(.*)/ , methods: ['GET', 'OPTIONS'] },
            {url: /\/api\/certificates(.*)/ , methods: ['GET', 'OPTIONS'] },
        ]
    })
}

export default authJwt;
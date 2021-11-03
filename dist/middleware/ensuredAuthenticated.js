"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensuredAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const ensuredAuthenticated = () => {
    return async (request, response, next) => {
        const authHeaders = request.headers.authorization;
        if (!authHeaders) {
            return response.status(401).json({ error: "Token is missing" });
        }
        const [, token] = authHeaders.split(" ");
        try {
            jsonwebtoken_1.verify(token, process.env.SECRET_JWT);
            const { sub } = jsonwebtoken_1.decode(token);
            request.userId = sub.toString();
            return next();
        }
        catch (err) {
            return response.status(401).end();
        }
    };
};
exports.ensuredAuthenticated = ensuredAuthenticated;

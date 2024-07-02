import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface RequestWithUser extends Request {
	jwt?: JwtPayload | any; // Extend to include the user property
}

const validateApiAccess = (
	req: RequestWithUser,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers["authorization"]?.split(" ")[1]; // Token is sent as "Bearer <token>"

	if (!token) {
		return res.status(401).json({ error: "Access denied. No token provided." });
	}

	try {
		const decoded: JwtPayload | string = jwt.verify(
			token,
			process.env.JWT_SECRET as string
		);
		req.jwt = decoded;
		next();
	} catch (error) {
		return res.status(403).json({ error: "Invalid token." });
	}
};

export { validateApiAccess, RequestWithUser };

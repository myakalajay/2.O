<<<<<<< HEAD
// Middleware to protect routes based on JWT and role
import jwt from 'jsonwebtoken';

// Higher-order function that wraps API routes and checks role
export function requireRole(handler, allowedRoles) {
  return async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization token missing' });
    }

    const token = authHeader.split(' ')[1]; // Bearer <token>

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Forbidden – insufficient permissions' });
      }

      req.user = decoded; // Attach user info to request
      return handler(req, res);
    } catch (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  };
}
=======
// Middleware to protect routes based on JWT and role
import jwt from 'jsonwebtoken';

// Higher-order function that wraps API routes and checks role
export function requireRole(handler, allowedRoles) {
  return async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization token missing' });
    }

    const token = authHeader.split(' ')[1]; // Bearer <token>

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Forbidden – insufficient permissions' });
      }

      req.user = decoded; // Attach user info to request
      return handler(req, res);
    } catch (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  };
}
>>>>>>> 37699c39feb6fc1d37c3a2ec38806ea85ecce4ab

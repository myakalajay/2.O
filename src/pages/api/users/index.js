// GET /api/users
// Admins only: fetch all users

import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import { requireRole } from '../../../lib/authMiddleware';

async function handler(req, res) {
  await dbConnect();

  const users = await User.find({}, '-passwordHash'); // exclude sensitive info
  res.status(200).json({ users });
}

export default requireRole(handler, ['admin']);

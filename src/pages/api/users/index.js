<<<<<<< HEAD
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
=======
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
>>>>>>> 37699c39feb6fc1d37c3a2ec38806ea85ecce4ab

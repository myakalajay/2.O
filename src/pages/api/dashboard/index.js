// GET /api/dashboard
// Serves different data based on user role

import dbConnect from '../../../lib/dbConnect';
import Application from '../../../models/Application';
import User from '../../../models/User';
import { requireRole } from '../../../lib/authMiddleware';

async function handler(req, res) {
  await dbConnect();

  const user = req.user;

  if (user.role === 'homeowner') {
    const apps = await Application.find({ userId: user.id });
    return res.status(200).json({ applications: apps });
  }

  if (user.role === 'mortgage') {
    const apps = await Application.find({});
    return res.status(200).json({ allApplications: apps });
  }

  if (user.role === 'admin') {
    const users = await User.find({}, '-passwordHash');
    const apps = await Application.find({});
    return res.status(200).json({ users, applications: apps });
  }

  res.status(403).json({ message: 'Invalid role' });
}

export default requireRole(handler, ['homeowner', 'mortgage', 'admin']);

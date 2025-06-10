// POST /api/auth/register
// Registers a new user with hashed password

import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { username, password, role } = req.body;

  await dbConnect();

  // Check if user exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    passwordHash,
    role: role || 'homeowner',
  });

  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
}

<<<<<<< HEAD
// User schema with role support: homeowner, mortgage, admin
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // no duplicates allowed
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['homeowner', 'mortgage', 'admin'],
    default: 'homeowner',
  },
}, {
  timestamps: true, // adds createdAt and updatedAt fields
});

// Prevent model overwrite in dev mode
export default mongoose.models.User || mongoose.model('User', UserSchema);
=======
// User schema with role support: homeowner, mortgage, admin
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // no duplicates allowed
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['homeowner', 'mortgage', 'admin'],
    default: 'homeowner',
  },
}, {
  timestamps: true, // adds createdAt and updatedAt fields
});

// Prevent model overwrite in dev mode
export default mongoose.models.User || mongoose.model('User', UserSchema);
>>>>>>> 37699c39feb6fc1d37c3a2ec38806ea85ecce4ab

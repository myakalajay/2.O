// Loan application schema for homeowners, managed by mortgage professionals
import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    required: true, // e.g. 'Home Purchase', 'Refinance'
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);

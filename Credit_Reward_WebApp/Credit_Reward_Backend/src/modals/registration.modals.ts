import mongoose, { Schema, Document } from 'mongoose';
export interface IUser extends Document {
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    Email: string;
    Password: string;
    Profile: boolean;
    Address: string;
    DateOfBirth: Date;
    SSN: number;
    AnnualIncome: number;
    AccountStatus: boolean;
    SecurQue1: string;
    SecurAns1: string;
    SecurQue2: string;
    SecurAns2: string;
}
const userSchema: Schema = new Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    AccountStatus: { type: Boolean, required: true },
    Profile: { type: Boolean, required: true },
    Address: { type: String },
    DateOfBirth: { type: Date },
    SSN: { type: Number },
    AnnualIncome: { type: Number },
    SecurQue1: { type: String },
    SecurAns1: { type: String },
    SecurQue2: { type: String },
    SecurAns2: { type: String },
});
export const User = mongoose.model<IUser>('User', userSchema);
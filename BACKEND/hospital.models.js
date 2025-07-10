import mongoose from "mongoose";
// hum yaha pe doctor , patient and hospitalrecord teen model baneyege jo jaruet hai
const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    diagonisis: { type: String, required: true },
    adress: { type: String, required: true },
    phone: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    gender: { type: String, enum :["M", "F" ,"G"]  },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true }, // reference to Doctor model
}, {timestamps:ture});
export const Patient = mongoose.model('Patient', PatientSchema);

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slary: { type: Number, required: true }, // in INR  
    specialization: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    experience: { type: Number, required: true }, // in years
    workindiffhospital: { type: mongoose.Schema.Types.ObjectId, ref: "HospitalRecord", required: true }, // reference to HospitalRecord model
    // ye doctor kis hospital me kaam kar raha hai
}, {timestamps:ture});
export const Doctor = mongoose.model('Doctor', DoctorSchema);

const HospitalRecordSchema = new mongoose.Schema({
    hospitalName: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    
    establishedYear: { type: Number, required: true }, // year when the hospital was established
}, {timestamps:ture});
export const HospitalRecord = mongoose.model('HospitalRecord', HospitalRecordSchema);

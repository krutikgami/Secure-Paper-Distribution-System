// models/PdfDetail.models.js
import mongoose from 'mongoose';

const PdfSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  pdfurl: {
    public_id: {
      type: String,
      required: true, // Ensure public_id is required
    },
    url: {
      type: String,
      required: true,
    },
  },
    password:{
    type: String,
    required:true
    },
    
  
}, { timestamps: true });

export const PDF = mongoose.model('PDF', PdfSchema);

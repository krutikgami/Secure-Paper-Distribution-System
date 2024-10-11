// middleware/uploadMiddleware.js
import multer from 'multer';
import { Readable } from 'stream';
import cloudinary from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.Cloudinary_Cloud_Name,
  api_key: process.env.Cloudinary_API_Key,
  api_secret: process.env.Cloudinary_API_Secret,
});

// Configure Multer
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// Middleware to handle file upload and Cloudinary upload
const uploadFileToCloudinary = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const uploadStream = cloudinary.v2.uploader.upload_stream({
    resource_type: 'auto',
    public_id: `pdfs/${Date.now()}`, // Generating a unique public ID for the file
  }, (error, result) => {
    if (error) {
      return next(error);
    }
    req.fileUrl = result.secure_url; // Store the uploaded file URL in the request object
    req.filePublicId = result.public_id; // Store the public ID in the request object
    next();
  });

  // Convert buffer to stream and pipe it to Cloudinary
  const bufferStream = new Readable();
  bufferStream.push(req.file.buffer);
  bufferStream.push(null); // End of stream
  bufferStream.pipe(uploadStream);
};

export { upload, uploadFileToCloudinary };

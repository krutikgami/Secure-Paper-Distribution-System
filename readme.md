# Secure Paper Distribution System

## Overview

**Secure Paper Distribution System** is a web-based application designed to securely distribute examination papers to designated officials such as examiners and invigilators. The system is built using the MERN stack (MongoDB, Express, React, and Node.js) to ensure seamless handling of uploads, secure sharing, and viewing of examination materials. The platform also incorporates secure email-based password sharing for account access.

## Features

- **Secure Uploading**: Authorized users can upload examination papers in PDF format.
- **Role-based Access**: Only designated officials can access specific sections based on their assigned roles (e.g., examiner, invigilator).
- **Email-based Secure Password Sharing**: When a user is added to the system, their password is securely shared via email.
- **PDF Tracking**: Administrators can track the uploaded PDFs and their status.
- **Cloud-based Storage**: PDFs are securely stored on the server and accessible only to authorized users.
- **Secure Authentication**: JWT-based authentication for secure login and access to protected routes.
- **PDF Viewing**: PDFs can be viewed directly in the application without being downloaded, ensuring confidentiality.

## Tech Stack

- **Frontend**: React, Tailwind CSS for styling
- **Backend**: Node.js, Express
- **Database**: MongoDB for document storage
- **State Management**: Redux
- **Authentication**: JWT (JSON Web Token)
- **Email Service**: Nodemailer for sending secure password emails
- **File Handling**: Multer for file uploads

## Installation

- ## 1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/secure-paper-distribution.git
   cd SECURE_EXAMINATION
   ```
## Install dependencies for both the frontend and backend:

### For backend
```bash
cd backend
npm install
```

### For frontend
```bash
cd ../Secure-Examination
npm install
```
## Set up environment variables

## Create a .env file in the backend directory and add the following:

env
```bash
MONGO_URI=your_mongo_database_uri
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
Cloudinary_Cloud_Name = your Cloudinary cloud name
Cloudinary_Cloud_Api = your Cloudinary api key
Cloudinary_cloud_secret = your Cloudinary secret key

```
## Start the development servers

```bash
# Start backend server
cd backend
npm run dev
```

## Start frontend server
```bash
cd ../Secure-Examination
npm run dev
```

## Usage
## Admin Features
**Upload Examination Papers** : Admins can securely upload papers which are stored in the database.
**Assign User Roles**: Assign users as examiners or invigilators, restricting access accordingly.
**Track Uploaded Files**: Admins can monitor the status and details of uploaded papers.
## User Features
**Email Notification**: Upon registration, users receive an email with a secure password to log in.
**View Assigned Papers**: Users can securely view the papers they have been assigned without downloading them.
**Secure Login**: authentication ensures secure access to the system.
## Secure Email Password Sharing
#### Passwords are never stored directly within the system. Upon registration, users receive an email containing their auto-generated password. Nodemailer is used to securely send this email. The password is hashed and stored securely in the database using bcrypt.

## Security Considerations
**Password Hashing**: User passwords are hashed using bcrypt before being stored in MongoDB.
**Role-based Access Control**: Different sections of the application are restricted based on the user role.
**Email Encryption**: Secure email communication for sharing passwords is ensured by using encrypted email providers (like Gmail) and SSL.
Future Enhancements

## Fork the repository.
Create a new feature branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
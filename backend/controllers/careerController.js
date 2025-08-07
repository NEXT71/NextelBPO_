import { sendResumeSubmissionEmail, sendResumeConfirmationEmail } from '../services/email.service.js';
import multer from 'multer';

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'), false);
    }
  }
}).single('resume');

const submitResume = async (req, res, next) => {
  try {
    // Handle file upload
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ 
          success: false, 
          message: err.message 
        });
      } else if (err) {
        return res.status(400).json({ 
          success: false, 
          message: err.message 
        });
      }

      const { name, email, phone } = req.body;
      const resumeFile = req.file;

      // Basic validation
      if (!name || !email || !resumeFile) {
        return res.status(400).json({ 
          success: false, 
          message: 'Name, email, and resume are required' 
        });
      }

      // Convert file to base64 for email attachment
      const fileContent = resumeFile.buffer.toString('base64');

      // Send emails
      await sendResumeSubmissionEmail({ 
        name, 
        email, 
        phone, 
        resume: {
          filename: resumeFile.originalname,
          content: fileContent,
          contentType: resumeFile.mimetype
        }
      });
      
      await sendResumeConfirmationEmail({ name, email });

      res.json({ 
        success: true,
        message: 'Resume submitted successfully! HR will contact you if interested.'
      });
    });
  } catch (error) {
    next(error);
  }
};

export default submitResume;
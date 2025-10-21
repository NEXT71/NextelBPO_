import { sendContactEmail, sendConfirmationEmail } from '../services/email.service.js';
const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, phone, message, universal_leadid } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    // Send emails
    await sendContactEmail({ name, email, phone, message, universal_leadid });
    await sendConfirmationEmail({ name, email, message });

    res.json({ success: true });
  } catch (error) {
    next(error);
  }
};

export default submitContactForm
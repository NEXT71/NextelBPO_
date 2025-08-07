import rateLimit from "express-rate-limit";
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many submissions from this IP, please try again later'
});

export default contactFormLimiter
import transporter from "../config/email.config.js";
const sendContactEmail = async ({ name, email, phone, message }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p>Received at: ${new Date().toLocaleString()}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

const sendConfirmationEmail = async ({ name, email, message }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Thank you for contacting NextelBPO`,
    html: `
      <h2>Thank you for your message, ${name}!</h2>
      <p>We've received your inquiry and our team will get back to you within 24 hours.</p>
      <p>Here's what you submitted:</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p>NextelBPO Team</p>
      <p><small>This is an automated message. Please do not reply.</small></p>
    `
  };

  return transporter.sendMail(mailOptions);
};

const sendResumeSubmissionEmail = async ({ name, email, phone, resume }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
    subject: `New Resume Submission from ${name}`,
    html: `
      <h2>New Resume Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p>Received at: ${new Date().toLocaleString()}</p>
      <p>Please find the attached resume.</p>
    `,
    attachments: [
      {
        filename: resume.filename,
        content: resume.content,
        encoding: 'base64',
        contentType: resume.contentType
      }
    ]
  };

  return transporter.sendMail(mailOptions);
};

const sendResumeConfirmationEmail = async ({ name, email }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Thank you for your interest in NextelBPO`,
    html: `
      <h2>Thank you for your application, ${name}!</h2>
      <p>We've received your resume and our HR team will review it carefully.</p>
      <p>If your profile matches our current or future requirements, we'll contact you for further steps.</p>
      <hr>
      <p>NextelBPO HR Team</p>
      <p><small>This is an automated message. Please do not reply.</small></p>
    `
  };

  return transporter.sendMail(mailOptions);
};



export {sendContactEmail, sendConfirmationEmail, sendResumeConfirmationEmail, sendResumeSubmissionEmail}
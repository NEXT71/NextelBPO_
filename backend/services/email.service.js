
import { Resend } from 'resend';
import { config } from 'dotenv';
config();

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
const sendContactEmail = async ({ name, email, phone, message, universal_leadid }) => {
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      ${universal_leadid ? `<p><strong>Universal LeadiD:</strong> ${universal_leadid}</p>` : ''}
      <p>Received at: ${new Date().toLocaleString()}</p>
    `,
  });
  
};

const sendConfirmationEmail = async ({ name, email, message }) => {
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
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
    `,
  });
};

const sendResumeSubmissionEmail = async ({ name, email, phone, position, resume }) => {
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: process.env.CONTACT_EMAIL,
    subject: `New Resume Submission from ${name} - ${position || 'Position Not Specified'}`,
    html: `
      <h2>New Resume Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Position Applied:</strong> ${position || 'Not specified'}</p>
      <p>Received at: ${new Date().toLocaleString()}</p>
      <p>Please find the attached resume.</p>
    `,
    attachments: resume ? [
      {
        filename: resume.filename,
        content: resume.content,
        encoding: 'base64',
        contentType: resume.contentType
      }
    ] : [],
  });
};

const sendResumeConfirmationEmail = async ({ name, email }) => {
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: email,
    subject: `Thank you for your interest in NextelBPO`,
    html: `
      <h2>Thank you for your application, ${name}!</h2>
      <p>We've received your resume and our HR team will review it carefully.</p>
      <p>If your profile matches our current or future requirements, we'll contact you for further steps.</p>
      <hr>
      <p>NextelBPO HR Team</p>
      <p><small>This is an automated message. Please do not reply.</small></p>
    `,
  });
};

export { sendContactEmail, sendConfirmationEmail, sendResumeConfirmationEmail, sendResumeSubmissionEmail };
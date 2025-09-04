import nodemailer from 'nodemailer';
import type { InsertContact } from '@shared/schema';

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function sendContactNotification(contactData: InsertContact) {
  const transporter = createTransporter();
  
  const subject = `Nova consulta de ${contactData.name} - Training Time`;
  
  const htmlContent = `
    <h2>Nova consulta rebuda</h2>
    <p><strong>Nom:</strong> ${contactData.name}</p>
    <p><strong>Email:</strong> ${contactData.email}</p>
    <p><strong>Telèfon:</strong> ${contactData.phone || 'No proporcionat'}</p>
    <p><strong>Servei d'interès:</strong> ${contactData.service || 'No especificat'}</p>
    <p><strong>Missatge:</strong></p>
    <p>${contactData.message || 'Sense missatge adicional'}</p>
    
    <hr>
    <p><small>Aquest email s'ha generat automàticament des del formulari de contacte de Training Time.</small></p>
  `;

  const textContent = `
Nova consulta rebuda

Nom: ${contactData.name}
Email: ${contactData.email}
Telèfon: ${contactData.phone || 'No proporcionat'}
Servei d'interès: ${contactData.service || 'No especificat'}

Missatge:
${contactData.message || 'Sense missatge adicional'}

---
Aquest email s'ha generat automàticament des del formulari de contacte de Training Time.
  `;

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: 'info@trainingtime.ad',
    subject,
    text: textContent,
    html: htmlContent,
    replyTo: contactData.email,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviat correctament:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error enviant email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
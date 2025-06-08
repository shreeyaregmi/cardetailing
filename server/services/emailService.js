import nodemailer from 'nodemailer';

export class EmailService {
  static async createTransporter() {
    // In production, use real SMTP settings
    return nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  static async sendBookingConfirmation(booking) {
    try {
      const transporter = await this.createTransporter();
      
      const mailOptions = {
        from: process.env.FROM_EMAIL || 'noreply@crystaldetailing.com',
        to: booking.email,
        subject: 'Booking Confirmation - Crystal Detailing',
        html: `
          <h2>Booking Confirmation</h2>
          <p>Dear ${booking.name},</p>
          <p>Thank you for booking with Crystal Detailing! Your appointment has been confirmed.</p>
          
          <h3>Booking Details:</h3>
          <ul>
            <li><strong>Service:</strong> ${booking.service}</li>
            <li><strong>Date:</strong> ${booking.date}</li>
            <li><strong>Vehicle:</strong> ${booking.vehicle}</li>
            <li><strong>Phone:</strong> ${booking.phone}</li>
          </ul>
          
          <p>We will contact you 24 hours before your appointment to confirm the details.</p>
          <p>If you need to make any changes, please call us at (555) 123-4567.</p>
          
          <p>Best regards,<br>Crystal Detailing Team</p>
        `
      };
      
      // In development, just log the email
      console.log('📧 Booking confirmation email would be sent:', mailOptions);
      
      // Uncomment for production:
      // await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending booking confirmation email:', error);
    }
  }

  static async sendContactNotification(contact) {
    try {
      console.log('📧 Contact notification email would be sent to admin:', {
        from: contact.email,
        name: contact.name,
        message: contact.message
      });
    } catch (error) {
      console.error('Error sending contact notification:', error);
    }
  }

  static async sendContactAutoReply(contact) {
    try {
      console.log('📧 Auto-reply email would be sent to:', contact.email);
    } catch (error) {
      console.error('Error sending auto-reply:', error);
    }
  }

  static async sendStatusUpdate(booking) {
    try {
      console.log('📧 Status update email would be sent:', {
        to: booking.email,
        status: booking.status
      });
    } catch (error) {
      console.error('Error sending status update:', error);
    }
  }
}
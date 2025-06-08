import { ContactService } from '../services/contactService.js';
import { EmailService } from '../services/emailService.js';

export class ContactController {
  static async submitContact(req, res, next) {
    try {
      const contactData = req.body;
      
      // Save contact submission
      const contact = await ContactService.createContact(contactData);
      
      // Send notification email to admin
      await EmailService.sendContactNotification(contact);
      
      // Send auto-reply to customer
      await EmailService.sendContactAutoReply(contact);
      
      res.status(201).json({
        success: true,
        message: 'Contact form submitted successfully. We will get back to you within 2 hours.',
        data: contact
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllContacts(req, res, next) {
    try {
      const { page = 1, limit = 10, read } = req.query;
      const contacts = await ContactService.getAllContacts({ page, limit, read });
      
      res.json({
        success: true,
        data: contacts
      });
    } catch (error) {
      next(error);
    }
  }

  static async markAsRead(req, res, next) {
    try {
      const { id } = req.params;
      const contact = await ContactService.markAsRead(id);
      
      res.json({
        success: true,
        message: 'Contact marked as read',
        data: contact
      });
    } catch (error) {
      next(error);
    }
  }
}
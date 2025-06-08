let contacts = [];
let contactIdCounter = 1;

export class ContactService {
  static async createContact(contactData) {
    const contact = {
      id: contactIdCounter++,
      ...contactData,
      read: false,
      createdAt: new Date().toISOString()
    };
    
    contacts.push(contact);
    return contact;
  }

  static async getAllContacts({ page = 1, limit = 10, read }) {
    let filteredContacts = [...contacts];
    
    if (read !== undefined) {
      filteredContacts = filteredContacts.filter(c => c.read === (read === 'true'));
    }
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    
    return {
      contacts: filteredContacts.slice(startIndex, endIndex),
      total: filteredContacts.length,
      page: parseInt(page),
      totalPages: Math.ceil(filteredContacts.length / limit)
    };
  }

  static async markAsRead(id) {
    const contact = contacts.find(c => c.id === parseInt(id));
    if (contact) {
      contact.read = true;
    }
    return contact;
  }
}
import bcrypt from 'bcryptjs';

// Mock admin data - in production, this would be in a database
const admins = [
  {
    id: 1,
    email: 'admin@crystaldetailing.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'Admin User'
  }
];

export class AdminService {
  static async authenticate(email, password) {
    const admin = admins.find(a => a.email === email);
    if (!admin) return null;
    
    const isValid = await bcrypt.compare(password, admin.password);
    return isValid ? admin : null;
  }

  static async getDashboardStats() {
    // Mock dashboard statistics
    return {
      totalBookings: 156,
      pendingBookings: 12,
      completedBookings: 144,
      totalRevenue: 45600,
      monthlyRevenue: 8900,
      newCustomers: 23,
      repeatCustomers: 89
    };
  }

  static async getRecentBookings() {
    // Mock recent bookings
    return [
      {
        id: 1,
        customerName: 'John Doe',
        service: 'Premium Detail',
        date: '2024-01-15',
        status: 'confirmed',
        amount: 149
      },
      {
        id: 2,
        customerName: 'Jane Smith',
        service: 'Ceramic Coating',
        date: '2024-01-16',
        status: 'pending',
        amount: 299
      }
    ];
  }

  static async getRevenueStats(period) {
    // Mock revenue statistics
    const data = {
      week: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        values: [1200, 1800, 1500, 2100, 1900, 2500, 2200]
      },
      month: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        values: [8500, 9200, 8800, 9600]
      },
      year: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        values: [35000, 38000, 42000, 45000, 48000, 52000, 55000, 58000, 54000, 51000, 49000, 46000]
      }
    };
    
    return data[period] || data.month;
  }
}
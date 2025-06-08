// Default services data
let services = [
  {
    id: 1,
    name: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces including leather treatment, fabric protection, and odor elimination.",
    price: 149,
    duration: "3-4 hours",
    features: ["Leather conditioning", "Fabric protection", "Dashboard restoration", "Odor elimination"],
    category: "interior",
    active: true
  },
  {
    id: 2,
    name: "Exterior Detailing",
    description: "Complete exterior restoration including washing, polishing, and protective coating application.",
    price: 199,
    duration: "4-5 hours",
    features: ["Paint decontamination", "Clay bar treatment", "Machine polishing", "Tire & rim cleaning"],
    category: "exterior",
    active: true
  },
  {
    id: 3,
    name: "Paint Correction",
    description: "Professional paint restoration to remove swirl marks, scratches, and oxidation.",
    price: 299,
    duration: "6-8 hours",
    features: ["Swirl mark removal", "Scratch repair", "Paint restoration", "Multi-stage polishing"],
    category: "paint",
    active: true
  }
];

let serviceIdCounter = 4;

export class ServiceService {
  static async getAllServices() {
    return services.filter(s => s.active);
  }

  static async getServiceById(id) {
    return services.find(s => s.id === parseInt(id));
  }

  static async createService(serviceData) {
    const service = {
      id: serviceIdCounter++,
      ...serviceData,
      active: true,
      createdAt: new Date().toISOString()
    };
    
    services.push(service);
    return service;
  }

  static async updateService(id, updateData) {
    const index = services.findIndex(s => s.id === parseInt(id));
    if (index > -1) {
      services[index] = { ...services[index], ...updateData, updatedAt: new Date().toISOString() };
      return services[index];
    }
    return null;
  }

  static async deleteService(id) {
    const index = services.findIndex(s => s.id === parseInt(id));
    if (index > -1) {
      services[index].active = false;
      return true;
    }
    return false;
  }
}
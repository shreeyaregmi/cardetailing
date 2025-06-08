import { ServiceService } from '../services/serviceService.js';

export class ServiceController {
  static async getAllServices(req, res, next) {
    try {
      const services = await ServiceService.getAllServices();
      
      res.json({
        success: true,
        data: services
      });
    } catch (error) {
      next(error);
    }
  }

  static async getServiceById(req, res, next) {
    try {
      const { id } = req.params;
      const service = await ServiceService.getServiceById(id);
      
      if (!service) {
        return res.status(404).json({
          success: false,
          message: 'Service not found'
        });
      }
      
      res.json({
        success: true,
        data: service
      });
    } catch (error) {
      next(error);
    }
  }

  static async createService(req, res, next) {
    try {
      const serviceData = req.body;
      const service = await ServiceService.createService(serviceData);
      
      res.status(201).json({
        success: true,
        message: 'Service created successfully',
        data: service
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateService(req, res, next) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const service = await ServiceService.updateService(id, updateData);
      
      res.json({
        success: true,
        message: 'Service updated successfully',
        data: service
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteService(req, res, next) {
    try {
      const { id } = req.params;
      await ServiceService.deleteService(id);
      
      res.json({
        success: true,
        message: 'Service deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}
import React from 'react';
import { Sparkles, Shield, Palette, Car, Droplets, Sun } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Interior Detailing",
      description: "Deep cleaning of all interior surfaces including leather treatment, fabric protection, and odor elimination.",
      features: ["Leather conditioning", "Fabric protection", "Dashboard restoration", "Odor elimination"],
      image: "https://images.pexels.com/photos/5365911/pexels-photo-5365911.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Exterior Detailing",
      description: "Complete exterior restoration including washing, polishing, and protective coating application.",
      features: ["Paint decontamination", "Clay bar treatment", "Machine polishing", "Tire & rim cleaning"],
      image: "https://images.pexels.com/photos/3807410/pexels-photo-3807410.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Paint Correction",
      description: "Professional paint restoration to remove swirl marks, scratches, and oxidation.",
      features: ["Swirl mark removal", "Scratch repair", "Paint restoration", "Multi-stage polishing"],
      image: "https://images.pexels.com/photos/6870304/pexels-photo-6870304.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Ceramic Coating",
      description: "Long-lasting protection with our premium ceramic coating systems for ultimate durability.",
      features: ["9H hardness coating", "5-year warranty", "UV protection", "Self-cleaning properties"],
      image: "https://images.pexels.com/photos/3811844/pexels-photo-3811844.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Paint Protection Film",
      description: "Invisible protection against rock chips, scratches, and environmental damage.",
      features: ["Self-healing technology", "10-year warranty", "Custom fit installation", "Maintains resale value"],
      image: "https://images.pexels.com/photos/3807235/pexels-photo-3807235.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Window Tinting",
      description: "Professional window film installation for privacy, UV protection, and enhanced aesthetics.",
      features: ["UV ray blocking", "Heat reduction", "Privacy enhancement", "Lifetime warranty"],
      image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of professional car detailing services to keep your vehicle looking its absolute best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-lg">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
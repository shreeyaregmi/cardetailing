import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      vehicle: "2023 BMW M5",
      rating: 5,
      text: "Absolutely incredible work! My BMW looks better than the day I bought it. The paint correction and ceramic coating exceeded all my expectations. The team is professional, punctual, and truly cares about quality.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Martinez",
      vehicle: "2022 Tesla Model S",
      rating: 5,
      text: "I've been to many detailers, but Crystal Detailing is on another level. The attention to detail is remarkable, and the customer service is outstanding. My Tesla has never looked so pristine!",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      vehicle: "2021 Porsche 911",
      rating: 5,
      text: "The paint protection film installation was flawless. You can't even tell it's there, but the protection it provides is incredible. Worth every penny for my Porsche. Highly recommend!",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      vehicle: "2020 Mercedes-Benz C-Class",
      rating: 5,
      text: "My car had some serious swirl marks and scratches. The paint correction service made it look brand new again. The team explained everything they were doing and the results speak for themselves.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      vehicle: "2019 Audi Q7",
      rating: 5,
      text: "Exceptional service from start to finish. The interior detailing brought my leather seats back to life, and the exterior work is simply stunning. These guys are true professionals.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      vehicle: "2023 Range Rover",
      rating: 5,
      text: "I'm extremely particular about my vehicle, and Crystal Detailing exceeded even my high standards. The ceramic coating has made maintenance so much easier. Outstanding work!",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "5.0", label: "Average Rating" },
    { number: "95%", label: "Return Customers" },
    { number: "7+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 right-4 text-blue-600 opacity-20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.vehicle}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Join Our Happy Customers
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
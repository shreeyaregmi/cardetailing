import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "7+ Years Experience",
      description: "Established in 2017, we've been perfecting our craft and building lasting relationships with car enthusiasts."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Certified Professionals",
      description: "Our team consists of certified detailing professionals trained in the latest techniques and technologies."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "We work around your schedule with convenient appointment times and mobile service options."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Satisfaction Guarantee",
      description: "We stand behind our work with a comprehensive satisfaction guarantee and warranty on all services."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Passionate About Perfection
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Crystal Detailing, we believe your vehicle deserves more than just a wash – it deserves 
              the meticulous care and attention that only true professionals can provide. Founded by car 
              enthusiasts for car enthusiasts, we've built our reputation on delivering exceptional results 
              that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our state-of-the-art facility and mobile services ensure your vehicle receives the highest 
              quality care using premium products and cutting-edge techniques. From luxury supercars to 
              family vehicles, we treat every car with the same level of dedication and precision.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 p-2 bg-blue-100 text-blue-600 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/5365911/pexels-photo-5365911.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Professional car detailing"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/3807410/pexels-photo-3807410.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Car care expertise"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 mt-6">
                <img 
                  src="https://images.pexels.com/photos/6870304/pexels-photo-6870304.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Quality workmanship"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/3811844/pexels-photo-3811844.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Premium service"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                <div className="text-sm text-gray-600">Vehicles Detailed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            To provide unparalleled automotive detailing services that not only restore and protect 
            your vehicle's appearance but also preserve its value and your investment. We're committed 
            to using environmentally friendly products and sustainable practices while delivering 
            results that consistently exceed our customers' expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Check, Star, Crown } from "lucide-react";

const Pricing = () => {

const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const packages = [
    {
      name: "Essential Wash",
      price: "$49",
      duration: "1-2 hours",
      description: "Perfect for regular maintenance",
      features: [
        "Exterior hand wash",
        "Tire cleaning & dressing",
        "Window cleaning",
        "Interior vacuum",
        "Dashboard wipe down",
      ],
      popular: false,
      icon: <Star className="w-6 h-6" />,
    },
    {
      name: "Premium Detail",
      price: "$149",
      duration: "3-4 hours",
      description: "Our most popular package",
      features: [
        "Everything in Essential",
        "Clay bar treatment",
        "Paint polish & wax",
        "Interior deep clean",
        "Leather conditioning",
        "Engine bay cleaning",
        "Headlight restoration",
      ],
      popular: true,
      icon: <Crown className="w-6 h-6" />,
    },
    {
      name: "Signature Detail",
      price: "$299",
      duration: "6-8 hours",
      description: "The ultimate detailing experience",
      features: [
        "Everything in Premium",
        "Multi-stage paint correction",
        "Ceramic coating application",
        "Interior protection treatment",
        "Paint protection film installation",
        "Complete engine detailing",
        "6-month maintenance plan",
      ],
      popular: false,
      icon: <Crown className="w-6 h-6" />,
    },
  ];

  

  const addOns = [
    { name: "Pet Hair Removal", price: "$25" },
    { name: "Odor Elimination", price: "$35" },
    { name: "Scratch Removal", price: "$75" },
    { name: "Headlight Restoration", price: "$45" },
    { name: "Engine Detailing", price: "$65" },
    { name: "Undercarriage Wash", price: "$30" },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your vehicle. All prices include
            materials and our satisfaction guarantee.
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg overflow-hidden ${
                pkg.popular
                  ? "ring-2 ring-blue-600 transform scale-105"
                  : "hover:shadow-xl transition-shadow duration-300"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`bg-white p-8 ${pkg.popular ? "pt-12" : ""}`}>
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      pkg.popular
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {pkg.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  {pkg.description}
                </p>

                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {pkg.price}
                  </span>
                  <p className="text-gray-600 mt-1">{pkg.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                 onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Book This Package
          
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Additional Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-gray-700 font-medium">{addon.name}</span>
                <span className="text-blue-600 font-bold">{addon.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              * Add-on services can be combined with any package. Custom quotes
              available for specialty vehicles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

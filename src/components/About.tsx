const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              The Global Citizens Association is dedicated to fostering meaningful social engagement among a diverse range of individuals, including international students at UTSA as well as second or third generation immigrant students, American students, and others.
            </p>
            <p className="text-lg text-gray-600">
              Our organization's primary objective is to cultivate interpersonal connections that transcend cultural boundaries, facilitating the formation of lifelong relationships. Emphasizing the importance of social constructs, we strive to create an inclusive and enriching environment through a variety of enjoyable and revitalizing social activities.
            </p>
            <p className="text-lg text-gray-600">
              Furthermore, we recognize the significance of mental health and well-being, and thus our secondary focus entails organizing agility-based events and opportunities that promote holistic wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Exchange</h3>
              <p className="text-gray-600">Bridging cultures through meaningful interactions</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Activities</h3>
              <p className="text-gray-600">Creating lasting bonds through shared experiences</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mental Wellness</h3>
              <p className="text-gray-600">Promoting holistic health and well-being</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Building a supportive and inclusive environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
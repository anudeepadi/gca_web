"use client";

import { CircleUser, Bike, Sailboat, Users, Utensils } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: <CircleUser size={32} />,
      name: 'Hiking',
      description: 'Explore nature trails and scenic routes together'
    },
    {
      icon: <Bike size={32} />,
      name: 'Biking',
      description: 'Group cycling adventures for all skill levels'
    },
    {
      icon: <Sailboat size={32} />,
      name: 'Kayaking',
      description: 'Paddle through peaceful waters as a team'
    },
    {
      icon: <Users size={32} />,
      name: 'Sports',
      description: 'Various team sports and recreational activities'
    },
    {
      icon: <Utensils size={32} />,
      name: 'Culinary Experiences',
      description: 'Share and explore diverse cultural cuisines'
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in a wide range of engaging activities that promote social interaction,
            cultural exchange, and personal well-being.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.name}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                {activity.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activity.name}
              </h3>
              <p className="text-gray-600">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
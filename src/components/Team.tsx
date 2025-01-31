"use client";

import { CircleUser } from 'lucide-react'; // You can add other icons if needed
import Image from 'next/image';
import kandre from '../assets/kandre.jpg';
import maria from '../assets/maria_moya.jpeg';
import nicole from '../assets/nicole.jpeg';
import sneha from '../assets/sneha.png';
import adi from '../assets/adi.jpg';
import dulce from '../assets/dulce.jpeg';
import vishnu from '../assets/vishnu.jpg';



const Team = () => {
    const leaders = [
        {
          icon: <CircleUser size={32} />, // You can change icons if you want different ones
          name: 'Kandre Archambault',
          position: 'Director',
          major: 'Global Affairs and Intelligence Studies',
          image: kandre, // Local image path for the leader's photo
        },
        {
          icon: <CircleUser size={32} />, // You can change icons if you want different ones
          name: 'Maria Moya',
          position: 'President',
          major: 'Psychology',
          image: maria, // Local image path for the leader's photo
        },
        {
          icon: <CircleUser size={32} />, // You can change icons if you want different ones
          name: 'Nicole Ituarte Cedillo',
          position: 'Vice President',
          major: 'Mechanical Engineering',
          image: nicole, // Local image path for the leader's photo
        },
        {
          icon: <CircleUser size={32} />, // You can change icons if you want different ones
          name: 'Dulce Nlavo Mansogo',
          position: 'Treasurer',
          major: 'Public Health',
          image: dulce, // Local image path for the leader's photo
        },
        {
          icon: <CircleUser size={32} />, // You can change icons if you want different ones
          name: 'Venkata Anudeep Adiraju',
          position: 'Secretary',
          major: 'Computer Engineering',
          image: adi, // Local image path for the leader's photo
        },
        {
          icon: <CircleUser size={32} />, // You can change icons if you want different ones
          name: 'Sneha Karki',
          position: 'Parliamentarian',
          major: 'Computer Science',
          image: sneha, // Local image path for the leader's photo
        },
        {
          icon: <CircleUser size={32} />, // You can change icons if you want different ones
          name: 'Vishnu Muthyalu',
          position: 'Social Media Marketing and Photographer',
          major: 'Computer Science',
          image: vishnu // Local image path for the leader's photo
        },
      ];
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Spring 2025 Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals leading the Global Citizen's Association.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
                <div className="text-blue-600 mb-4">
                    {leader.icon}
                    </div>
                    <div className="flex justify-center mb-4">
                    <div className="w-32 h-32 overflow-hidden rounded-full">
                        <Image
                        src={leader.image}
                        alt={leader.name}
                        width={150} // You can adjust this based on the size you want
                        // height={150} // Adjust height accordingly
                        // className="w-full h-full object-cover"
                        />
                    </div>
                    </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {leader.name}
              </h3>
              <p className="text-gray-600">{leader.position}</p>
              <p className="text-gray-600">{leader.major}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

import React from 'react';
import Image from 'next/image';

const team = [
  {
    id: 1,
    name: 'David Chen',
    role: 'Principal Architect',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'With over 15 years of experience, David leads our architectural team with a passion for innovative, sustainable design. His award-winning approach combines functionality with artistic vision.',
  },
  {
    id: 2,
    name: 'Sophia Rodriguez',
    role: 'Interior Design Director',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Sophia brings a unique blend of creativity and technical expertise to every project. Her designs have been featured in numerous publications, and she specializes in creating harmonious living spaces.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: '3D Visualization Specialist',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    bio: 'Michael transforms concepts into stunning visual experiences. His background in both architecture and digital art allows him to create realistic renderings that bring designs to life.',
  },
  {
    id: 4,
    name: 'Emily Zhang',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    bio: 'Emily ensures that every project runs smoothly from concept to completion. Her attention to detail and organizational skills keep our team on track and our clients satisfied.',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented professionals bring creativity, expertise, and passion to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-80 w-full">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

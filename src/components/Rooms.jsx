import React from 'react';
import { useParams } from 'react-router-dom';
import Room from './Room';
import minimalist_room from '../assets/minimalist_room.jpg';
import minimalist_room2 from '../assets/minimalist_room2.jpg';
import bohemian_room from '../assets/bohemian_room.jpg';
import bohemian_room2 from '../assets/bohemian_room2.jpg';
import industrial_room from '../assets/industrial_room.jpg';
import industrial_room2 from '../assets/industrial_room2.jpg';
import decorative_art_room from '../assets/decorative_art_room.jpg';
import decorative_art_room2 from '../assets/decorative_art_room2.jpg';
import coastal_room from '../assets/coastal_room.jpg';
import coastal_room2 from '../assets/coastal_room2.jpg';

const roomData = [
  {
    id: 'minimalist',
    roomName: 'Minimalist Rooms',
    description: 'Experience true tranquility in our Minimalist rooms. Designed with the philosophy that "less is more," this space features clean lines, an uncluttered layout, and a calming neutral color palette. With purposeful furnishings, abundant natural light, and a focus on essential comforts, it provides the perfect sanctuary to unplug, unwind, and clear your mind after a busy day.',
    images: [minimalist_room, minimalist_room2]
  },
  {
    id: 'bohemian',
    roomName: 'Bohemian Rooms',
    description: 'Step into a vibrant and creative retreat with our Bohemian rooms. This eclectic space embraces a relaxed, globally inspired aesthetic, layering rich textures, earthy colors, and intricate patterns. Featuring a curated mix of vintage-inspired furnishings, lush indoor plants, and artistic accents, this room offers a warm, lived-in atmosphere that feels both free-spirited and deeply comfortable.',
    images: [bohemian_room, bohemian_room2]
  },
  {
    id: 'industrial',
    roomName: 'Industrial Rooms',
    description: 'Embrace modern, urban edge in our Industrial rooms. Drawing inspiration from classic warehouse lofts, this space highlights raw architectural elements like exposed brick, warm wood, and sleek metal finishes. With high ceilings, statement lighting, and a balance of rugged textures and contemporary comfort, this room offers a uniquely stylish and sophisticated stay.',
    images: [industrial_room, industrial_room2]
  },
  {
    id: 'decorative-art',
    roomName: 'Decorative Art Rooms',
    description: 'Indulge in classic glamour with our Decorative Art rooms. Inspired by the opulence of the 1920s, this space is characterized by bold geometric shapes, luxurious fabrics, and striking metallic accents. From the plush velvet seating to the symmetrical, highly stylized decor and rich color contrasts, every detail is designed to offer an atmosphere of elegance, luxury, and timeless sophistication.',
    images: [decorative_art_room, decorative_art_room2]
  },
  {
    id: 'coastal',
    roomName: 'Coastal Rooms',
    description: 'Breathe in the relaxing, breezy atmosphere of our Coastal rooms. Designed to capture the serene feeling of a beachside getaway, this light and airy space features a soothing palette of crisp whites, soft blues, and sandy neutrals. Finished with natural textures like rattan, linen, and weathered wood, it provides a refreshing and peaceful environment for the ultimate restful escape.',
    images: [coastal_room, coastal_room2]
  }
];

const Rooms = () => {
  const { roomId } = useParams();
  const selectedRoom = roomData.find((room) => room.id === roomId);
  if (!selectedRoom) {
    return <div className="text-center py-16 text-3xl font-bold">Room not found!</div>;
  }
  return (
    <div>
      <Room 
        roomName={selectedRoom.roomName}
        description={selectedRoom.description}
        images={selectedRoom.images}
      />
    </div>
  );
};

export default Rooms
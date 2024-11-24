import { motion } from 'framer-motion';

const destinations = [
  {
    id: 1,
    title: 'Ram Mandir, 	Ayodhya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg/450px-Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg',
    description: 'The Ram Mandir in Ayodhya is a Hindu temple dedicated to Lord Ram, built on his believed birthplace.',
    rating: 5
  },
  {
    id: 2,
    title: 'Prem Mandir, Mathura',
    image: 'https://cdn1.prayagsamagam.com/media/2023/05/24213639/Mathura-Vrindavan-2.webp',
    description: 'Built on a 54-acre land, and about 125 feet high, this temple is one of the most popular attractions of the town dedicated to Radha-Krishna and Ram-Sita.',
    rating: 5
  },
  {
    id: 3,
    title: 'Red Fort, Delhi',
    image: 'https://static.toiimg.com/img/65666850/Master.jpg',
    description: 'Located in Chandni Chowk Old Delhi, this red sandstone structure was constructed under the reign of Mughal emperor Shah Jahan for protection against invaders. It is known for its intricate Mughal architecture and floral designs.',
    rating: 5
  }
];

function FeaturedDestinations() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {destinations.map((destination) => (
        <motion.div
          key={destination.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48">
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
              ★ {destination.rating}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
            <p className="text-gray-600">{destination.description}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Explore More
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default FeaturedDestinations;
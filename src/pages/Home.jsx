import { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import FeaturedDestinations from '../components/FeaturedDestinations';
import InteractiveMap from '../components/InteractiveMap';
import WeatherWidget from '../components/WeatherWidget';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[calc(100vh-4rem)]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl text-white font-bold mb-8 text-center"
          >
            Explore Your World
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-4xl"
          >
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
              className="w-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Sections */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Popular Destinations
          </motion.h2>
          <FeaturedDestinations />
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Explore the World
          </motion.h2>
          <div className="h-[600px] rounded-xl overflow-hidden shadow-lg">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* Weather and Activities */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <WeatherWidget />
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Nearby Activities</h3>
              <div className="space-y-4">
                {['Hiking Adventure', 'Local Food Tour', 'Historical Walk'].map((activity, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-lg">{activity}</h4>
                    <p className="text-gray-600 text-sm mt-1">Starting from $29</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
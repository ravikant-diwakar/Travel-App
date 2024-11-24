import { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';

function Discover() {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['Adventure', 'Culture', 'Nature', 'Food', 'History', 'Beach'];
  
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">Discover Amazing Places</h1>
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            className="max-w-2xl"
          />
          
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for filtered destinations */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
          {/* Add more placeholder items as needed */}
        </div>
      </div>
    </div>
  );
}

export default Discover;
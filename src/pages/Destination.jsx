import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import InteractiveMap from '../components/InteractiveMap';

function Destination() {
  const { id } = useParams();

  return (
    <div className="min-h-screen pt-16">
      <div className="h-[50vh] relative">
        <div className="absolute inset-0 bg-gray-900">
          {/* Placeholder for destination image */}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Destination Name
          </motion.h1>
          <p className="text-lg">Location Description</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-600 mb-8">
              Detailed description of the destination will be loaded here...
            </p>

            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <div className="h-[400px] rounded-lg overflow-hidden mb-8">
              <InteractiveMap />
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Plan Your Visit</h3>
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Add to Itinerary
                </button>
                <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
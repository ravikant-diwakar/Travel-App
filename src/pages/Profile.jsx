import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2 } from 'react-icons/fi';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-48 bg-blue-600">
            <div className="absolute -bottom-16 left-8">
              <div className="w-32 h-32 rounded-full bg-white p-2">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <FiUser className="w-12 h-12 text-gray-400" />
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
            >
              <FiEdit2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="pt-20 p-8">
            <h1 className="text-3xl font-bold mb-2">Ravikant Diwakar</h1>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center">
                <FiMail className="w-5 h-5 mr-3" />
                <span>ravikant@xploreworld.in</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 mr-3" />
                <span>+91 0123456789</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="w-5 h-5 mr-3" />
                <span>Location</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Travel Stats</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-gray-600">Trips</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;
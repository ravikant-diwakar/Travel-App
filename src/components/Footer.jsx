import { Link } from 'react-router-dom';
import { FiMail, FiPhone } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">XploreWorld</h3>
            <p className="text-gray-400">
              Your ultimate travel companion for discovering and exploring the world.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/discover" className="text-gray-400 hover:text-white">Discover</Link></li>
              <li><Link to="/itinerary" className="text-gray-400 hover:text-white">Plan Trip</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FiMail className="mr-2" />
                <span>ravikant@xploreworld.in</span>
              </li>
              <li className="flex items-center text-gray-400">
                <FiPhone className="mr-2" />
                <span>+91 0123456789</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} ravikant diwkar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
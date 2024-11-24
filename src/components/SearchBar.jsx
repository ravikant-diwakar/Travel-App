import { useState } from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';

function SearchBar({ value, onChange, className }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div className={`
        flex items-center bg-white rounded-full shadow-lg transition-all
        ${focused ? 'ring-2 ring-blue-500' : ''}
      `}>
        <div className="pl-6">
          <FiMapPin className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Where would you like to go?"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none rounded-full"
        />
        <button className="bg-blue-600 text-white px-6 py-4 rounded-full hover:bg-blue-700 transition-colors flex items-center">
          <FiSearch className="w-5 h-5" />
          <span className="ml-2">Search</span>
        </button>
      </div>
      
      {focused && value && (
        <div className="absolute w-full bg-white mt-2 rounded-lg shadow-lg z-10">
          {/* Search suggestions will be populated here */}
          <div className="p-2">
            <p className="text-gray-500 text-sm">Start typing to see suggestions...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
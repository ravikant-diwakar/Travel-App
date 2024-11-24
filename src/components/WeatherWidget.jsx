import { FiSun, FiCloud, FiCloudRain, FiWind } from 'react-icons/fi';

function WeatherWidget() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-6">Local Weather</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FiSun className="w-12 h-12 text-yellow-500" />
          <div className="ml-4">
            <p className="text-3xl font-bold">24°C</p>
            <p className="text-gray-600">Sunny</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-600">New Delhi, India</p>
          <p className="text-sm text-gray-500">Updated 5 mins ago</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <FiWind className="w-6 h-6 mx-auto text-gray-600" />
          <p className="mt-1 text-sm text-gray-600">12 km/h</p>
          <p className="text-xs text-gray-500">Wind</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <FiCloud className="w-6 h-6 mx-auto text-gray-600" />
          <p className="mt-1 text-sm text-gray-600">45%</p>
          <p className="text-xs text-gray-500">Humidity</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <FiCloudRain className="w-6 h-6 mx-auto text-gray-600" />
          <p className="mt-1 text-sm text-gray-600">0%</p>
          <p className="text-xs text-gray-500">Rain</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;
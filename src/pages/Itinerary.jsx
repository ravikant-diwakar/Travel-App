import { useState } from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

function Itinerary() {
  const [days, setDays] = useState([
    {
      id: 'day-1',
      activities: [
        { id: 'activity-1', title: 'Morning: City Tour', time: '09:00 AM' },
        { id: 'activity-2', title: 'Afternoon: Local Cuisine', time: '02:00 PM' },
      ],
    },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceDay = days.find(day => day.id === result.source.droppableId);
    const destDay = days.find(day => day.id === result.destination.droppableId);
    
    if (!sourceDay || !destDay) return;

    const [movedActivity] = sourceDay.activities.splice(result.source.index, 1);
    destDay.activities.splice(result.destination.index, 0, movedActivity);

    setDays([...days]);
  };

  const addDay = () => {
    const newDay = {
      id: `day-${days.length + 1}`,
      activities: [],
    };
    setDays([...days, newDay]);
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">Your Travel Itinerary</h1>
          <div className="flex gap-4 mb-8">
            <button 
              onClick={addDay}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Day
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Export PDF
            </button>
          </div>
        </motion.div>

        <DragDropContext onDragEnd={onDragEnd}>
          {days.map((day, index) => (
            <div key={day.id} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Day {index + 1}</h2>
              <Droppable droppableId={day.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="bg-white rounded-lg shadow-md p-4"
                  >
                    {day.activities.map((activity, index) => (
                      <Draggable
                        key={activity.id}
                        draggableId={activity.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-50 p-4 mb-3 rounded-lg cursor-move hover:bg-gray-100 transition-colors"
                          >
                            <div className="font-semibold">{activity.title}</div>
                            <div className="text-sm text-gray-600">
                              {activity.time}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}

export default Itinerary;
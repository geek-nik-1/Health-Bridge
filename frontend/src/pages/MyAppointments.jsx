import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const MyAppointments = () => {
  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p className="text-xl font-semibold mb-4">My appointments</p>
      <div className="flex flex-col gap-6">
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-4">
            <div>
              <img src={item.image} alt={item.name} className="w-32 h-full object-cover rounded bg-indigo-50" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
              <p className="font-semibold mt-2">Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p>
                <span className="font-semibold">Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0 md:ml-auto items-center">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Pay Online</button>
              <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointments
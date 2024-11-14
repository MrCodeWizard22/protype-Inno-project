import React, { useState } from 'react';

const Tracking = () => {
    const [bookingID, setBookingID] = useState('');
    const [status, setStatus] = useState(null);

    const handleTrack = () => {
        // Placeholder tracking logic
        setStatus(`Booking ID ${bookingID} is in transit.`);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Track Your Booking</h2>
            <div className="mb-4">
                <label htmlFor="bookingID" className="block text-gray-700 font-semibold mb-2">Enter Booking ID</label>
                <input
                    type="text"
                    id="bookingID"
                    placeholder="Enter Booking ID"
                    value={bookingID}
                    onChange={(e) => setBookingID(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                onClick={handleTrack}
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Track
            </button>
            {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </div>
    );
};

export default Tracking;

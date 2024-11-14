import React, { useState } from 'react';

const BookingForm = () => {
    const [pickupCity, setPickupCity] = useState('');
    const [dropoffCity, setDropoffCity] = useState('');
    const [date, setDate] = useState('');
    const [transportType, setTransportType] = useState('open');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking submission (e.g., send data to backend)
        console.log({ pickupCity, dropoffCity, date, transportType });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Book Your Transport</h2>

            <div className="mb-4">
                <label htmlFor="pickupCity" className="block text-gray-700 font-semibold mb-2">Pickup City</label>
                <input
                    type="text"
                    id="pickupCity"
                    placeholder="Enter Pickup City"
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="dropoffCity" className="block text-gray-700 font-semibold mb-2">Drop-off City</label>
                <input
                    type="text"
                    id="dropoffCity"
                    placeholder="Enter Drop-off City"
                    value={dropoffCity}
                    onChange={(e) => setDropoffCity(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Pickup Date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="transportType" className="block text-gray-700 font-semibold mb-2">Transport Type</label>
                <select
                    id="transportType"
                    value={transportType}
                    onChange={(e) => setTransportType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="open">Open Transport</option>
                    <option value="enclosed">Enclosed Transport</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Get a Quote
            </button>
        </form>
    );
};

export default BookingForm;

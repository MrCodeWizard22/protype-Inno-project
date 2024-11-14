import React from 'react';

const PriceEstimator = ({ distance, transportType }) => {
    const basePrice = 500; // Base price per km
    const multiplier = transportType === 'enclosed' ? 1.5 : 1;
    const estimate = distance * basePrice * multiplier;

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800">Estimated Price</h3>
            <p className="mt-4 text-xl text-gray-700">₹{estimate.toFixed(2)}</p>
        </div>
    );
};

export default PriceEstimator;

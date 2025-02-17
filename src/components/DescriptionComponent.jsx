import React from 'react';

const Description = ({ title, description, imageUrl }) => {
  return (
    <div className="w-[95%] mx-auto p-12 bg-white rounded-lg shadow-lg">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>

      <div className="flex items-center gap-6">  {/* Flexbox container */}
        {/* Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-128 h-128 object-contain rounded-md"  // Adjust size of image
          />
        )}

        {/* Description */}
        <p className="text-xl text-gray-700 flex-1">{description}</p>
      </div>
    </div>
  );
};

export default Description;

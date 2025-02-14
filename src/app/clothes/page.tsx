import React from "react";

const Clothes = () => {
  const ClothesData = [
    { id: 1, name: "dress1", price: 50000, description: "stunning clothes", image: "/dress1.jpeg" },
    { id: 2, name: "dress2", price: 8000, description: "stunning clothes", image: "/dress2.jpeg" },
    { id: 3, name: "dress3", price: 12000, description: "stunning clothes", image: "/dress3.jpeg" },
    { id: 4, name: "dress4", price: 40000, description: "stunning clothes", image: "/dress4.jpeg" },
    { id: 5, name: "dress5", price: 45000, description: "stunning clothes", image: "/dress5.jpeg" },
    { id: 6, name: "dress6", price: 10000, description: "stunning clothes", image: "/dress6.jpeg" },
    { id: 7, name: "dress7", price: 7000, description: "stunning clothes", image: "/dress7.jpeg" },
    { id: 8, name: "dress8", price: 35000, description: "stunning clothes", image: "/dress8.jpeg" },
    { id: 9, name: "dress10", price: 5000, description: "stunning clothes", image: "/dress10.jpeg" },
  ];

  return (
    <div className="watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {ClothesData.map(cloth => (
        <div key={cloth.id} className="cloth-card bg-white p-5 rounded-md shadow-md text-center">
          <img src={cloth.image} alt={cloth.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
          <h3 className="mt-4 text-2xl font-bold">{cloth.name}</h3>
          <p className="text-gray-500">{cloth.description}</p>
          <div className="price text-[#e46e00] text-xl font-semibold mt-2">${cloth.price}</div>
          <button className="mt-4 px-4 py-2 bg-[#e46e00] hover:bg-[#8daac7] text-white rounded-md">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Clothes;
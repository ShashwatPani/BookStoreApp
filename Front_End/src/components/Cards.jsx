import React from 'react';

function Cards({ item }) {
  return (
    <div className="my-1 mx-1 p-3">
      <div className="card bg-base-96 w-95 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white p-4">
        <figure>
          <img
            src={item.image}
            alt={item.title}
            className="h-50 w-full object-cover"
          />
        </figure>
        <div className="card-body mt-2">
          <h2 className="card-title text-lg mb-2">
            {item.name}
            {item.price === 0 && <div className="badge badge-secondary ml-2">{item.category}</div>}
          </h2>
          <p className="text-sm mb-4">{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

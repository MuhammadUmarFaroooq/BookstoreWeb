import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-72 h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-48">
          <img
            src={`http://localhost:4001/${item.image}`}
            alt="photo"
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body flex flex-col justify-between h-48">
          <div>
            <h2 className="card-title text-lg font-bold">
              {item.name}
              <div className="badge badge-secondary ml-2">{item.category}</div>
            </h2>
            <p className="text-sm">{item.title}</p>
          </div>
          <div className="card-actions justify-between mt-4">
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

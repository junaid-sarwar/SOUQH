import React from "react";
import img from "../assets/react-1.png";

const Sidebar = ({setActiveSection}) => {

  return (
    <aside className="w-64 bg-gray-100 p-4 border-r font-serif">
      <div className="mb-4">
        <img
          src={img}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto"
        />
      </div>
      <ul className="space-y-5">
        <li className="text-blue-500 font-medium border-b pb-2">
          See Public Profile
        </li>
        <li className="text-yellow-400 cursor-pointer border-b pb-2 font-bold">
          Upload Profile Picture
        </li>
        <li className="text-red-600 cursor-pointer border-b pb-2 font-bold"
        onClick={() => setActiveSection('profile')}>My Profile</li>

        <li className="text-green-700 cursor-pointer border-b pb-2 font-bold">
          Setting
        </li>
      </ul>
      <div className="flex justify-center">
        <button className="bg-red-500 mt-6 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;

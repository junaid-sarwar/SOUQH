import React from "react";
import img from "../assets/react-1.png";

const MyProfile = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {/* Profile Picture */}
      <div className="flex flex-col items-center mb-6">
        <img
          className="w-32 h-32 rounded-full object-cover"
          src={img}
          alt="Profile"
        />
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded text-sm">
          Change Profile Picture
        </button>
      </div>

      {/* Profile Info */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-center">Ahmed Khan</h2>
          <p className="text-center text-gray-600">@ahmed123</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium">ahmed@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium">+92 300 1234567</p>
          </div>
          <div>
            <p className="text-gray-500">Country</p>
            <p className="font-medium">Pakistan</p>
          </div>
          <div>
            <p className="text-gray-500">Gender</p>
            <p className="font-medium">Male</p>
          </div>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Edit Profile</button>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded">Change Password</button>
      </div>
    </div>
  );
};

export default MyProfile;
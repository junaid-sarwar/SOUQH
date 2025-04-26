import React, { useState } from "react";
import Sidebar from "./sidebar";
import MyProfile from "./myprofile";

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Input fields ka state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    contact: "",
    address: "",
    gender: "",
    country: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Profile Saved Successfully!");

    setFormData({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        contact: "",
        address: "",
        gender: "",
        country: "",
      });
  };

  return (
    <div className="min-h-screen bg-gray-600 p-6">
      <h1 className="text-center text-3xl font-bold font-serif mb-8 text-white">
        User Dashboard
      </h1>

      <div className="flex max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <Sidebar setActiveSection={setActiveSection} />

        <main className="flex-1 p-6">
          {activeSection === "profile" ? (
            <MyProfile />
          ) : (
            <form onSubmit={handleSubmit} className="border rounded-md p-6 bg-gray-50 font-serif">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Profile Details</h2>

              <div className="grid grid-cols-2 gap-4 mb-4 font-bold">
                <div>
                  <label className="block mb-1">User Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block mb-1">User Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block mb-1">Contact</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block mb-1">Gender</label>
                  <div className="flex items-center gap-4">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                      />{" "}
                      Female
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Country/Region</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  >
                    <option value="">Select your Country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;

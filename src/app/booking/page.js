"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO } from "date-fns";
import axios from "axios";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    zipCode: "",
    numDogs: 1,
    serviceType: "Standard Scooping",
    notes: "",
  });

  const [availableDays, setAvailableDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Example ZIP Code Availability
  const zipAvailability = {
    33983: ["Monday", "Wednesday", "Friday"],
    67890: ["Tuesday", "Thursday", "Saturday"],
    33950: ["Monday", "Thursday", "Sunday"],
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fetch Available Days Based on ZIP
  const handleCheckAvailability = () => {
    setLoading(true);
    setTimeout(() => {
      const days = zipAvailability[formData.zipCode] || [];
      setAvailableDays(days);
      setSelectedDate(null);
      setLoading(false);
    }, 1000);
  };

  // Handle Booking Confirmation
  const handleConfirmBooking = async () => {
    if (selectedDate) {
      try {
        await axios.post("/api/sendEmail", {
          ...formData,
          selectedDate: format(selectedDate, "MMMM d, yyyy"),
        });
        setBookingConfirmed(true);
      } catch (error) {
        console.error("Error sending confirmation email:", error);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Book a Service</h1>

      {/* Full Name */}
      <label className="block text-gray-700 font-semibold mb-1">
        Full Name:
      </label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md mb-3"
      />

      {/* Phone */}
      <label className="block text-gray-700 font-semibold mb-1">
        Phone Number:
      </label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md mb-3"
      />

      {/* Email */}
      <label className="block text-gray-700 font-semibold mb-1">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md mb-3"
      />

      {/* Address */}
      <label className="block text-gray-700 font-semibold mb-1">Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md mb-3"
      />

      {/* ZIP Code */}
      <label className="block text-gray-700 font-semibold mb-1">
        ZIP Code:
      </label>
      <input
        type="text"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md mb-3"
      />

      <button
        onClick={handleCheckAvailability}
        className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
        disabled={!formData.zipCode}
      >
        {loading ? "Checking..." : "Check Availability"}
      </button>

      {/* Show Available Days */}
      {availableDays.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Select a Date:</h2>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            filterDate={(date) => availableDays.includes(format(date, "EEEE"))}
            className="w-full px-4 py-2 border rounded-md mt-2"
            placeholderText="Select an available date"
          />
        </div>
      )}

      {/* Number of Dogs */}
      <label className="block text-gray-700 font-semibold mt-4">
        Number of Dogs:
      </label>
      <input
        type="number"
        name="numDogs"
        min="1"
        value={formData.numDogs}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md mb-3"
      />

      {/* Service Type */}
      <label className="block text-gray-700 font-semibold">Service Type:</label>
      <select
        name="serviceType"
        value={formData.serviceType}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md mb-3"
      >
        <option>Standard Scooping</option>
        <option>One-Time Cleanup</option>
        <option>Pet Waste Removal Subscription</option>
      </select>

      {/* Notes */}
      <label className="block text-gray-700 font-semibold">
        Additional Notes:
      </label>
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md mb-3"
      />

      {/* Confirm Booking */}
      {selectedDate && (
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium">
            You selected:{" "}
            <strong>{format(selectedDate, "MMMM d, yyyy")}</strong>
          </p>
          <button
            onClick={handleConfirmBooking}
            className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
          >
            Confirm Booking
          </button>
        </div>
      )}

      {/* Booking Confirmation Message */}
      {bookingConfirmed && (
        <div className="mt-6 p-4 bg-green-100 border border-green-500 text-green-700 rounded-lg text-center">
          🎉 Booking Confirmed for{" "}
          <strong>{format(selectedDate, "MMMM d, yyyy")}</strong>!
        </div>
      )}
    </div>
  );
}

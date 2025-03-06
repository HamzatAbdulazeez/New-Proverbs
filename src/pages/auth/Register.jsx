import React, { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Fixed Image Section */}
      <div className="hidden md:flex w-1/2 bg-[#BB5D06] justify-center items-center fixed h-screen">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1741078619/We-Immersive/africa-logo.cc06fc01_vkfvjj.png"
            alt="African Art"
            className="max-w-[100%] object-contain"
          />
        </Link>
      </div>

      {/* Right Side - Scrollable Form Section */}
      <div className="w-full md:w-1/2 ml-auto flex justify-center items-center bg-white p-6  overflow-y-auto">
        <div className="w-full max-w-[600px] space-y-6">
          {step === 2 && (
            <ChevronLeft
              className="cursor-pointer text-gray-700"
              onClick={prevStep}
              size={30}
            />
          )}

          {/* Logo */}
          <Link to="/">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1741096252/We-Immersive/primarylogo.ebc6ec00_x9uzsw.svg"
              alt="African Proverbs Logo"
              className="h-16 mb-4 mx-auto"
            />
          </Link>

          <h2 className="text-xl font-semibold text-center">
            {step === 1
              ? "Welcome, Create a Corporate Account"
              : "Authorized Representative Details"}
          </h2>

          {step === 1 ? (
            // Step 1 - Corporate Account Form
            <form className="space-y-6">
              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Organization Name
                </label>
                <input
                  type="text"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Organization Registration Number{" "}
                  <span className="text-gray-500 text-sm">(if available)</span>
                </label>
                <input
                  type="text"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Industry Type
                </label>
                <select className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none bg-white">
                  <option value="">Select industry type</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                </select>
              </div>

              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Business Type
                </label>
                <select className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none bg-white">
                  <option value="">Select business type</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                </select>
              </div>

              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Country of Incorporation
                </label>
                <input
                  type="text"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Company Address
                </label>
                <input
                  type="text"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Business Website{" "}
                  <span className="text-gray-500 text-sm">(Optional)</span>
                </label>
                <input
                  type="url"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Organization Email{" "}
                  <span className="text-gray-500 text-sm">
                    (Official Contact Email)
                  </span>
                </label>
                <input
                  type="email"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Organization Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-base font-normal text-black mb-4">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="w-full h-11 px-3 border border-gray-300 rounded-lg"
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? <EyeOff /> : <Eye />}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="w-full h-11 bg-[#6D6D6D] text-white rounded-lg"
              >
                Next
              </button>
            </form>
          ) : (
            // Step 2 - Authorized Representative Form
            <form className="space-y-6">
              <div>
                <label className="block text-base font-normal text-black mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg outline-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-[#6D6D6D] text-white rounded-lg"
              >
                Sign up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

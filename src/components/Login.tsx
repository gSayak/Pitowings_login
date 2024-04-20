import React, { useState } from "react";

interface LoginProps {
  className?: string;
}

const Login: React.FC<LoginProps> = ({ className }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      className={`flex items-center justify-center h-screen bg-gray-100 ${className}`}
    >
      <div className="absolute top-8 right-4">
        <p className="text-[#3c3a3b] font-medium">
          Don't have an account?
          <a
            href="/signup"
            className="text-[#3c3a3b] pl-3 hover:text-[#B8065E] font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <img
                    src="/svgs/showIcon.svg"
                    alt="Hide Icon"
                    className="h-5 w-5"
                  />
                ) : (
                  <img
                    src="/svgs/hideIcon.svg"
                    alt="Hide Icon"
                    className="h-5 w-5"
                  />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 form-checkbox text-blue-500"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember Me
              </label>
            </div>
            <a href="/forgot" className="text-blue-500 hover:text-blue-700">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#A80062] hover:bg-[#B8065E] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D80D77] focus:ring-offset-2"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
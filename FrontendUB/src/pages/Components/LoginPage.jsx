import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import UBLOGO from '../../assets/images/UBLOGO.jpg'

function LoginPage() {
  // State to toggle between Login and Sign Up forms
  const [isLogin, setIsLogin] = useState(true);

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Signing up...");
    // Future: Connect to your backend auth logic here!
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex font-sans">

      {/* ========================================== */}
      {/* LEFT COLUMN: Image & Branding (Hidden on Mobile) */}
      {/* ========================================== */}
      <div className="hidden lg:flex w-1/2 relative bg-zinc-900 overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
          alt="Ultimate Burger Kitchen"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>

        {/* Branding Content */}
        <div className="relative z-10 flex flex-col justify-end p-16 h-full text-white w-full">
          <div className="mb-6 inline-flex items-center gap-3">
            <img
              src={UBLOGO}
              className="h-12 w-12 object-cover rounded-xl shadow-lg"
              alt="Logo"
            />
            <h1 className="text-3xl font-extrabold tracking-tight">
              Ultimate<span className="text-red-500">Burger</span>
            </h1>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-balance">
            {isLogin ? "Welcome back to the ultimate taste." : "Join us for exclusive deals and faster checkout."}
          </h2>
          <p className="text-zinc-300 text-lg max-w-md">
            Hand-crafted burgers and pizzas made fresh every single day.
          </p>
        </div>
      </div>

      {/* ========================================== */}
      {/* RIGHT COLUMN: Authentication Form */}
      {/* ========================================== */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16 relative">

        {/* Mobile-only Logo */}
        <div className="absolute top-8 left-8 lg:hidden flex items-center gap-3">
          <img
            src={UBLOGO}
            className="h-10 w-10 object-cover rounded-lg shadow-sm"
            alt="Logo"
          />
          <span className="font-extrabold text-xl text-slate-900 tracking-tight">
            Ultimate<span className="text-red-500">Burger</span>
          </span>
        </div>

        <div className="w-full max-w-md mt-12 lg:mt-0">

          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
              {isLogin ? "Log in" : "Create an account"}
            </h2>
            <p className="text-slate-500 text-lg">
              {isLogin ? "Please enter your details to sign in." : "Fill in your details to get started."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Conditional Fields: Only show names if signing up */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all shadow-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="email"
                  placeholder="user@example.com"
                  required
                  className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700">Password</label>
                {isLogin && (
                  <button type="button" className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors">
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all shadow-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 flex items-center justify-center gap-2 bg-red-500 text-white font-bold text-lg py-3.5 rounded-xl hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            >
              {isLogin ? "Sign in" : "Create Account"}
              <ArrowRight size={20} />
            </button>

          </form>

          {/* Divider */}
          <div className="mt-8 mb-6 flex items-center justify-center gap-4">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <span className="text-slate-400 text-sm font-medium">Or continue with</span>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          {/* Google OAuth Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-bold text-base py-3.5 rounded-xl hover:bg-slate-50 hover:shadow-sm transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238598)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
              </g>
            </svg>
            Sign {isLogin ? "in" : "up"} with Google
          </button>

          {/* Toggle Text */}
          <p className="mt-8 text-center text-slate-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-red-500 font-bold hover:text-red-600 transition-colors focus:outline-none"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>

        </div>
      </div>

    </div>
  );
}

export default LoginPage
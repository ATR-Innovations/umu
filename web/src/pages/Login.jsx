import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/dataService';
import { FiMail, FiLock, FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!formData.email || !formData.password) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      await authAPI.login(formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-10 pt-10 bg-primary text-white bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
           <div className="text-center mb-4">
          <img 
            src="/assets/logo.png" 
            alt="Logo" 
            className="w-16 h-16 rounded-full mx-auto mb-4 "
            onError={(e) => e.target.src = 'https://placehold.co/64x64?text=Logo'}
          />
          <h1 className="text-3xl font-black text-[#246B3B] mb-2">Admin Portal</h1>
          <p className="text-gold">United Muslim Ummah Management System</p>
        </div>
    <hr className="border-t border-green-800 my-6" />
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                <FiAlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@ummaah.org"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition text-black"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition text-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {/* Demo Credentials */}
            {/* <div className="bg-sky-light border border-primary/20 rounded-lg p-4 text-sm">
              <p className="font-semibold text-primary mb-2">📌 Demo Login:</p>
              <p className="text-gray-700">Email: <span className="font-mono">any@email.com</span></p>
              <p className="text-gray-700">Password: <span className="font-mono">any password</span></p>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#246B3B] hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? 'Logging in...' : 'Login to Dashboard'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button 
              onClick={() => navigate('/')}
              className="w-full text-[#246B3B] font-semibold hover:text-primary transition"
            >
              ← Back to Home
            </button>
          </div>
        </div>

        {/* Features */}
        {/* <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { icon: '📊', title: 'Dashboard' },
            { icon: '📝', title: 'Content' },
            { icon: '🖼️', title: 'Media' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">{feature.icon}</div>
              <p className="text-white text-xs font-semibold">{feature.title}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Building2, Users, Target, MessageSquare, Mail } from 'lucide-react';

export default function About() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    if (e.target.id === 'message') {
      setMessage(e.target.value);
    } else if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:spatnik@gmail.com?subject=Inquiry from About Page&body=${message}`;
  };

  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-sky-50 min-h-screen">
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-slate-800">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Ignite Estate</span>
          </h1>
          <p className="text-xl text-slate-600 italic">
            "Igniting dreams, one property at a time."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300">
            <Building2 className="w-12 h-12 text-sky-500 mb-4" />
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Expertise</h2>
            <p className="text-slate-600 leading-relaxed">
              Ignite Estate is a leading real estate agency specializing in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the real estate process as smooth as possible.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300">
            <Target className="w-12 h-12 text-sky-500 mb-4" />
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              At Ignite Estate, our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you're looking to buy, sell, or rent a property, we're here to guide you every step of the way.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl shadow-lg p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="leading-relaxed">
            Our team of agents brings a wealth of experience and knowledge to the real estate industry. We are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
          </p>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Why Choose Ignite Estate?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Users className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-slate-600">Experienced professionals dedicated to your success</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Target className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
              <p className="text-slate-600">Tailored solutions to meet your unique needs</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <MessageSquare className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clear Communication</h3>
              <p className="text-slate-600">Transparent and timely updates throughout the process</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={onChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:from-sky-500 hover:to-blue-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Mail className="inline-block w-5 h-5 mr-2 -mt-1" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
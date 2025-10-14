import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { portfolioData } from '../data';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${portfolioData.contact.email}?subject=Consultation Request from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Company (Optional)"
          value={formData.company}
          onChange={(e) => setFormData({...formData, company: e.target.value})}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400"
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          required
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400"
        />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-4 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition-all flex items-center justify-center"
      >
        {submitted ? 'Opening Email...' : 'Send Message'}
        <Send className="ml-2" size={18} />
      </button>
    </form>
  );
}
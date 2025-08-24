import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Added newsletter subscription state & handler
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // simple client-side email validation
    if (!/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterStatus('error');
      return;
    }
    setNewsletterStatus('loading');
    // simulate async submission
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anjalikumari24732@gmail.com',
      href: 'mailto:anjalikumari24732@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7002693363',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu',
      href: '#'
    }
  ];

  // Replace these URLs with your actual profiles if different
  const socialLinks = [
    { icon: Github, href: 'https://github.com/anjaliOfficialcoll', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anjali-kumari-6b2742281/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/anjaliTwit00', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">Get In Touch</h2>
          <motion.div 
            className="w-20 h-1 bg-[#7A4F2D] mx-auto mb-8"
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             viewport={{ once: true }}
           />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border border-transparent hover:border-[#E7DCCB] transition-all duration-300"
               whileHover={{ 
                 boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
               }}
             >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A4F2D] focus:border-transparent transition-all duration-300 hover:border-[#D2C2AD]"
                      placeholder="Your name"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A4F2D] focus:border-transparent transition-all duration-300 hover:border-[#D2C2AD]"
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A4F2D] focus:border-transparent transition-all duration-300 hover:border-[#D2C2AD]"
                    placeholder="What's this about?"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A4F2D] focus:border-transparent transition-all duration-300 resize-none hover:border-[#D2C2AD]"
                    placeholder="Tell me about your project or just say hi!"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#7A4F2D] text-[#F5EFE7] px-8 py-3 rounded-lg font-semibold hover:bg-[#5e3b24] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                   whileHover={{ 
                     scale: isSubmitting ? 1 : 1.02,
                     boxShadow: isSubmitting ? undefined : "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
                   }}
                   whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                   transition={{ duration: 0.2 }}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                 >
                  {isSubmitting ? (
                    <motion.div 
                      className="rounded-full h-5 w-5 border-2 border-white border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Send size={20} />
                      </motion.div>
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-400 group border border-transparent hover:border-[#E7DCCB]"
                    whileHover={{ 
                      x: 8,
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="p-3 bg-[#E7DCCB] rounded-lg mr-4 group-hover:bg-[#D2C2AD] transition-all duration-300"
                       whileHover={{ 
                         rotate: 5,
                         scale: 1.1
                       }}
                       transition={{ duration: 0.2 }}
                     >
                      <info.icon className="text-[#7A4F2D]" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      <p className="text-gray-900 font-semibold group-hover:text-[#7A4F2D] transition-colors duration-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-400 text-gray-600 hover:text-[#7A4F2D] border border-transparent hover:border-[#E7DCCB]"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      y: -3,
                      boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div 
              className="bg-gradient-to-br from-[#7A4F2D] to-[#5e3b24] rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-400"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               viewport={{ once: true }}
               whileHover={{ 
                 scale: 1.02,
                 boxShadow: "0 25px 50px -12px rgba(122, 79, 45, 0.25)"
               }}
             >
               <h4 className="text-xl font-bold mb-4">Let's Work Together!</h4>
               <p className="leading-relaxed">
                 I'm always excited to work on interesting projects with great people. 
                 Whether you have a specific project in mind or just want to explore 
                 possibilities, I'd love to hear from you.
               </p>
             </motion.div>
           </motion.div>
         </div>
       </div>
 
       {/* Footer */}
       <motion.footer
        className="mt-20 pt-12 pb-8 border-t border-[#2b2b2b] bg-[#1F1F1F] text-[#F5EFE7]"
         initial={{ opacity: 0, y: 10 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true }}
         aria-labelledby="footer-heading"
       >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 id="footer-heading" className="sr-only">Footer</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {/* About + Social */}
             <div>
              <h3 className="text-2xl font-bold text-[#F5EFE7] mb-2">Anjali Kumari</h3>
              <p className="text-[#F5EFE7] mb-4">
                Frontend developer focused on building accessible, performant React apps.
              </p>
               <div className="flex items-center space-x-3">
                 {socialLinks.map((link) => (
                   <a
                     key={link.label}
                     href={link.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={link.label}
                     className="p-2 bg-[#E7DCCB] rounded-md shadow-sm text-[#1F1F1F] hover:bg-[#7A4F2D] hover:text-[#F5EFE7] hover:shadow-md transition"
                   >
                     <link.icon size={18} />
                   </a>
                 ))}
               </div>
             </div>
 
             {/* Quick Links */}
             <nav aria-label="Footer quick links">
               <h4 className="text-lg font-semibold text-[#F5EFE7] mb-3">Quick links</h4>
               <ul className="space-y-2 text-[#F5EFE7]">
                 <li><a href="#about" className="hover:text-[#7A4F2D] transition">About</a></li>
                 <li><a href="#projects" className="hover:text-[#7A4F2D] transition">Projects</a></li>
                 <li><a href="#contact" className="hover:text-[#7A4F2D] transition">Contact</a></li>
                 <li><a href="#" className="hover:text-[#7A4F2D] transition">Resume</a></li>
               </ul>
             </nav>
 
             {/* Contact info */}
             <div>
               <h4 className="text-lg font-semibold text-[#F5EFE7] mb-3">Contact</h4>
               <ul className="text-[#F5EFE7] space-y-2">
                 <li>
                   <a href="mailto:anjalikumari24732@gmail.com" className="hover:text-[#7A4F2D] transition">
                     <span className="sr-only">Email</span>
                     anjalikumari24732@gmail.com
                   </a>
                 </li>
                 <li>
                   <a href="tel:+917002693363" className="hover:text-[#7A4F2D] transition">+91 70026 93363</a>
                 </li>
                 <li className="text-[#F5EFE7]">Chennai, Tamil Nadu</li>
               </ul>
             </div>
 
             {/* Newsletter */}
             <div>
               <h4 className="text-lg font-semibold text-[#F5EFE7] mb-3">Newsletter</h4>
               <p className="text-[#F5EFE7] mb-3">Get occasional updates about projects and articles.</p>
               <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                 <label htmlFor="newsletter" className="sr-only">Email address</label>
                 <input
                   id="newsletter"
                   type="email"
                   value={newsletterEmail}
                   onChange={(e) => setNewsletterEmail(e.target.value)}
                   placeholder="you@domain.com"
                   className="flex-1 px-3 py-2 border border-gray-600 bg-transparent text-[#F5EFE7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A4F2D]"
                   aria-invalid={newsletterStatus === 'error'}
                 />
                 <button
                   type="submit"
                   className="px-4 py-2 bg-[#7A4F2D] text-[#F5EFE7] rounded-md hover:bg-[#5e3b24] transition disabled:opacity-50"
                   disabled={newsletterStatus === 'loading'}
                 >
                   {newsletterStatus === 'loading' ? 'Sending...' : 'Subscribe'}
                 </button>
               </form>
               <p className="mt-2 text-sm">
                 {newsletterStatus === 'success' && <span className="text-green-500">Subscribed — thank you!</span>}
                 {newsletterStatus === 'error' && <span className="text-red-400">Please enter a valid email.</span>}
               </p>
             </div>
           </div>
 
           <div className="mt-8 border-t border-[#2b2b2b] pt-6 flex flex-col md:flex-row items-center justify-between">
             <p className="text-sm text-[#F5EFE7]">© {new Date().getFullYear()} Anjali Kumari. Built with React & TypeScript.</p>
             <div className="mt-4 md:mt-0 text-sm">
               <a href="#" className="text-[#F5EFE7] hover:text-[#7A4F2D] transition mr-4">Privacy</a>
               <a href="#" className="text-[#F5EFE7] hover:text-[#7A4F2D] transition">Terms</a>
             </div>
           </div>
         </div>
       </motion.footer>
     </section>
   );
 };
 
 export default Contact;
import React, { useRef, useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import Headings from '../Headings';


const Notification = ({ message }) => (
  <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg">
    {message}
  </div>
);

const ContactMe = () => {
  const form = useRef();
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');
  
  const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      // Data structure based on documentation
      const data = {
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_USER_ID,
        template_params: {
          'name': form.current.name.value,
          'email': form.current.email.value,
          'message': form.current.message.value,
        }
    };
    //console.log(data)
  
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(result => {
          setNotification('Your message has been sent successfully!');
          sendReply(data.template_params.name, data.template_params.email);
          form.current.reset();
        })
        .catch(error => {
          console.error(error);
          setNotification('Something went wrong, please try again.');
        })
        .finally(() => {
          setLoading(false);
          setPopup(true);
          setTimeout(() => setPopup(false), 1000);
        });
    };

    const sendReply = (name, email) => {
      const replyData = {
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_USER_ID,
          template_params: {
              from_name: "Balaji Batchu",
              to_name: name,
              reply_to: email,
          }
      };

      fetch('https://api.emailjs.com/api/v1.0/email/send',
          {
              method:"POST",
              headers:{
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(replyData)
          }).then(() => {
              console.log("reply mail sent");
          })
  };


    return (
    <section id="contact" className="bg-[#020d0be5] text-yellow-50 mb-12 h-screen">
      <Headings name={"Contact Me"} />
      <div className="container mx-auto px-6 mt-4 flex flex-col items-center">
        <p className="text-lg mb-6 text-center">I'd love to hear from you! Please fill out the form below, and I'll get back to you as soon as possible.</p>
        <div className="flex flex-col md:flex-row items-center w-full max-w-4xl">
          <form ref={form} onSubmit={handleSubmit} className="w-full bg-[#072017] text-yellow-50 p-8 rounded-lg shadow-lg space-y-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 bg-[#274545a3] border border-[#85912d] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-[#274545a3] border border-[#85912d] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2 text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-3 bg-[#274545a3] border border-[#85912d] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white ${loading ? 'bg-emerald-700' : 'bg-emerald-600 hover:bg-emerald-700'} transition-colors duration-300 flex items-center justify-center`}
            >
              {loading ? 'Sending...' : <><IoIosSend className="inline mr-2 text-2xl" /> Send Message</>}
            </button>
          </form>
        </div>
        {popup && <Notification message={notification} />}
      </div>


      <footer className="bg-[#020d0be5] text-yellow-50 py-6 mt-12">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <p className="text-center mb-4 text-sm">© {new Date().getFullYear()} Balaji Batchu. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/Balaji-Batchu" className="hover:text-blue-400 transition-colors duration-300">GitHub</a>
            <a href="https://linkedin.com/in/balajibatchu" className="hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
            <a href="mailto:balajibachu2002@gmail.com" className="hover:text-blue-400 transition-colors duration-300">Email</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactMe;

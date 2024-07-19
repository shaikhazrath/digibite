import React, { useState } from "react";
import { Client, Databases } from "appwrite";
import Section from "./Section";
import { socials } from "../constants";
import { MapPin, Phone, Mail } from "lucide-react";

const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('669a004e003917b94ece'); 

const databases = new Databases(client);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const phoneNumber = formData.phone ? parseInt(formData.phone.replace(/\D/g, ''), 10) : null;

      const submissionData = {
        ...formData,
        phone: phoneNumber,
      };

      const response = await databases.createDocument(
        '669a015d00063ae03123',
        '669a01d500022a264966',
        'unique()',
        submissionData
      );

      console.log("Form submitted to Appwrite:", response);
      
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      if (err.type === 'document_invalid') {
        setError("There was an error with your form data. Please check all fields and try again.");
      } else {
        setError("There was an error submitting your form. Please try again later.");
      }
    }
  };

  return (
    <Section crosses className="!px-0 !py-10" id="Contact">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Thank you for your message!</strong>
                <p className="block sm:inline">Our team will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline"> {error}</span>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md p-2 bg-white text-black border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md p-2 bg-white text-black border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md p-2 bg-white text-black border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="mt-1 block w-full rounded-md p-2 bg-white text-black border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9">
    
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7600.474306446892!2d83.32452419999997!3d17.733461500000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721369392205!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="mr-2" size={40} />
                <span>Mangapuram Colony Pithapuram Colony, Maddilapalem
Visakhapatnam, Andhra Pradesh 530003</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={20} />
                <span>+91 8520800787</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={20} />
                <span>shaikhazrathali123@gmail.com</span>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col mt-16">
        <p className="caption text-white lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Contact;
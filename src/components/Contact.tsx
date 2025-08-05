import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Email sent successfully");
    } else {
      alert("❌ Failed to send email: " + data.message);
    }
  };
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-red mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-portfolio-black max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to work on new
            projects and collaborate with amazing people. Let's create something
            great together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-portfolio-red mb-6">
              Get In Touch
            </h3>
            <p className="text-portfolio-black mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. Drop me a message
              and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-portfolio-cream rounded-lg">
                  <Mail className="w-6 h-6 text-portfolio-red" />
                </div>
                <div>
                  <h4 className="font-bold text-portfolio-black">Email</h4>
                  <p className="text-portfolio-black/80">dishitajoshi17@.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-portfolio-cream rounded-lg">
                  <Phone className="w-6 h-6 text-portfolio-red" />
                </div>
                <div>
                  <h4 className="font-bold text-portfolio-black">Phone</h4>
                  <p className="text-portfolio-black/80">+8600001350</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-portfolio-cream rounded-lg">
                  <MapPin className="w-6 h-6 text-portfolio-red" />
                </div>
                <div>
                  <h4 className="font-bold text-portfolio-black">Location</h4>
                  <p className="text-portfolio-black/80">Rajkot, Gujarat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-portfolio-cream p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    onChange={handleChange}
                    placeholder="John"
                    className="border p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Doe"
                    className="border p-2 w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="border p-2 w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  name="subject"
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="border p-2 w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="border p-2 w-full"
                />
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

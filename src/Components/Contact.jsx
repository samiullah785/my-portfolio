import ContactCard from "./ContactCard";

function Contact() {
  const contactInfo = [
    {
      id: 1,
      label: "Email",
      value: "hello@example.com",
    },
    {
      id: 2,
      label: "Phone",
      value: "+92 300 1234567",
    },
    {
      id: 3,
      label: "Location",
      value: "Karachi, Pakistan",
    },
    {
    id: 4,
    label: "Availability",
    value: "Available for freelance work",
  },
  ];

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Contact Me
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Have a project in mind? Feel free to get in touch with me.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              Get In Touch
            </h3>

            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <ContactCard
                  key={contact.id}
                  label={contact.label}
                  value={contact.value}
                />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">
              Send Me a Message
            </h3>

            <form className="space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "I build modern and responsive websites.",
  },
  {
    id: 2,
    title: "UI Design",
    description: "I create clean and user-friendly interfaces.",
  },
  {
    id: 3,
    title: "API Development",
    description: "I build scalable backend APIs.",
  },
];

function Services() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Services"
          description="Services I can provide."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
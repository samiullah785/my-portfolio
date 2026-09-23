function ServiceCard({ title, description }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
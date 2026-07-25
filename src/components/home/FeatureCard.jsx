const FeatureCard = ({ feature }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <div className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 inline-flex rounded-full bg-[#F8F6F3] p-4 transition-colors duration-300 group-hover:bg-[#7A4E2D]">
        <Icon
          size={36}
          className="text-[#7A4E2D] transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="mb-3 text-2xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
const SectionHeading = ({
  eyebrow,
  title,
  description,
  center = true,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7A4E2D]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
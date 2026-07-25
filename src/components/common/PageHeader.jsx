import Container from "./Container";

const PageHeader = ({
  eyebrow,
  title,
  description,
  className = "",
}) => {
  return (
    <section className={`bg-white py-20 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {eyebrow}
            </p>
          )}

          <h1 className="text-4xl font-bold text-[var(--text)] md:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-light)]">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;
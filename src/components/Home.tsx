import Heading from "./units/Heading";

interface HomeProps {
  className: string;
}

export default function Home({ className }: HomeProps) {
  return (
    <section className={className}>
      <Heading
        label="Little Lemon"
        level={1}
        className="section__heading text--highlighted"
      />
    </section>
  );
}

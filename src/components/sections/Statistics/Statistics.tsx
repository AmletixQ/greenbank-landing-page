import "./Statistics.scss";

const stats = [
  {
    header: "16y",
    name: "Experience",
  },
  {
    header: "250+",
    name: "Merchant Partner",
  },
  {
    header: "18+",
    name: "Years Experience",
  },
  {
    header: "10.2k+",
    name: "Worldwide Clients",
  },
];

const Statistics = () => {
  return (
    <section className="statistics">
      {stats.map(({ header, name }) => (
        <div>
          <h3>{header}</h3>
          <p>{name}</p>
        </div>
      ))}
    </section>
  );
};

export default Statistics;

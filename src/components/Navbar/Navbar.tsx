import "./Navbar.scss";

const links = [
  {
    name: "Why Us",
    link: "#",
  },
  {
    name: "Services",
    link: "#",
  },
  {
    name: "Our Process",
    link: "#",
  },
  {
    name: "Payments",
    link: "#",
  },
  {
    name: "FAQs",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav>
      {links.map(({ link, name }) => (
        <a href={link} key={name}>
          {name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;

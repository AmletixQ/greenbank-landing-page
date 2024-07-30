import { ILinkContainer } from "types/footer.types";
import "./FooterLinks.scss";
import { FC } from "react";

const links: ILinkContainer[] = [
  {
    summary: "About us",
    links: [
      {
        title: "Investors",
        href: "#",
      },
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Book a demo",
        href: "#",
      },
      {
        title: "Security",
        href: "#",
      },
    ],
  },
  {
    summary: "Products",
    links: [
      {
        title: "Credits Cards",
        href: "#",
      },
      {
        title: "Gift Cards",
        href: "#",
      },
      {
        title: "Savings accounts",
        href: "#",
      },
      {
        title: "NFT",
        href: "#",
      },
    ],
  },
  {
    summary: "Useful Links",
    links: [
      {
        title: "Free rewards",
        href: "#",
      },
      {
        title: "Documentation",
        href: "#",
      },
      {
        title: "Affiliate program",
        href: "#",
      },
    ],
  },
  {
    summary: "Social",
    links: [
      {
        title: "Changelog",
        href: "#",
      },
      {
        title: "License",
        href: "#",
      },
      {
        title: "Site Maps",
        href: "#",
      },
      {
        title: "News",
        href: "#",
      },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="links-container">
      {links.map((container) => (
        <LinkContainer {...container} />
      ))}
    </div>
  );
};

const LinkContainer: FC<ILinkContainer> = ({ links, summary }) => {
  return (
    <div className="link-container">
      <h6>{summary}</h6>
      <div className="links">
        {links.map((link) => (
          <a className="dark-text" href={link.href}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;

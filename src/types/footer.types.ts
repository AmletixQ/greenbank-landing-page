export interface ILink {
  title: string;
  href: string;
}

export interface ILinkContainer {
  summary: string;
  links: ILink[];
}

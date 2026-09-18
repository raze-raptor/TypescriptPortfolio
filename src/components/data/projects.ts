export type Project = {
  title: string;
  blurb: string;
  hardPart: string;
  stack: string[];
  repo?: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "homelab",
    blurb: "...",
    hardPart: "...",
    stack: ["Docker", "Cloudflare Tunnel", "SSO"],
    featured: true,
  },
];
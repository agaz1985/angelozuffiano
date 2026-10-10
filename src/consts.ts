import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Angelo Zuffianò",
  DESCRIPTION:
    "Personal site of Angelo Zuffianò, a senior machine learning researcher working on AI for medical imaging, computer vision, and generative AI.",
  // Set this to enable the email link across the site.
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "What I build and what I learn: physics-based simulations, machine learning models, product experiments, and startup ideas.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "Deep dives into modeling, engineering decisions, system design, and honest reflections about building in public.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Side projects spanning AI, machine learning, physics simulations, and open source.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://x.com/angzuff",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/agaz1985",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/angantzuff/",
  },
  ...(SITE.EMAIL
    ? [{ NAME: "Email", HREF: `mailto:${SITE.EMAIL}` }]
    : ([] as Socials)),
];

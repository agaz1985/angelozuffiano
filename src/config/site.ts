export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "Angelo Zuffianò",
  tagline: "Notes on machine learning, physics, and building things",
  title: "Angelo Zuffianò — Machine learning, physics, and side projects",
  description:
    "Personal site of Angelo Zuffianò, a senior machine learning researcher working on AI for medical imaging, computer vision, and generative AI.",
  siteUrl: "https://angelozuffiano.com",
  authorName: "Angelo Zuffianò",
  email: "",
  language: "en",
  dateLocale: "en-US",
  locale: "en_US",
  socialImage: "/og.png",
  /** Shown in the home sidebar "About" card. */
  about:
    "Senior machine learning researcher writing about AI for medical imaging, physics-based simulations, and building things in public.",
  /**
   * Both forms ship disabled until a real provider endpoint is pasted in.
   */
  newsletter: {
    enabled: false,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Get new posts by email",
    description: "One email when something new goes up. No spam, unsubscribe anytime.",
  },
  contact: {
    enabled: false,
    action: "",
    method: "post",
    responseTime: "Replies usually go out within two business days.",
  },
  socials: [
    { label: "X", href: "https://x.com/angzuff" },
    { label: "GitHub", href: "https://github.com/agaz1985" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/angantzuff/" },
    { label: "Medium", href: "https://medium.com/@angelo_zuffiano" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Archive", href: "/posts/" },
  { label: "Categories", href: "/categories/" },
  { label: "About", href: "/about/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [{ label: "RSS", href: "/rss.xml" }];

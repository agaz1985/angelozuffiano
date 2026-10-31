type NavItem = { label: string; href: string };
type SocialLink = { label: string; href: string };

export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "Angelo Zuffianò",
  tagline: "",
  title: "Angelo Zuffianò",
  description: "",
  siteUrl: "https://angelozuffiano.com",
  authorName: "Angelo Zuffianò",
  email: "",
  language: "en",
  dateLocale: "en-US",
  locale: "en_US",
  socialImage: "/og.png",
  /** Shown in the home sidebar "About" card. */
  about: "",
  /**
   * The contact form ships disabled until a real provider endpoint is pasted in.
   */
  contact: {
    enabled: false,
    action: "",
    method: "post",
    responseTime: "Replies usually go out within two business days.",
  },
  /**
   * Giscus comment threads, backed by GitHub Discussions. The source repo must
   * stay PUBLIC for giscus to work (readers need to read the Discussions it
   * writes to), and the `giscus` GitHub App must be installed on the repo.
   */
  comments: {
    repo: "agaz1985/angelozuffiano",
    repoId: "R_kgDOQzEsmw",
    category: "General",
    categoryId: "DIC_kwDOQzEsm84C0ijq",
  },
  socials: [] as SocialLink[],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation: NavItem[] = [];

/** Secondary navigation rendered in the footer. */
export const footerNavigation: NavItem[] = [];

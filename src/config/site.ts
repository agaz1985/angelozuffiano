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
  socials: [] as SocialLink[],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation: NavItem[] = [];

/** Secondary navigation rendered in the footer. */
export const footerNavigation: NavItem[] = [];

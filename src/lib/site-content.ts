import type { Metadata } from "next";

export const business = {
  name: "Friendly Landscaping LLC",
  shortName: "Friendly Landscaping",
  phone: "(608) 481-9571",
  phoneHref: "tel:+16084819571",
  serviceArea: "Madison, WI and nearby Dane County communities",
  city: "Madison",
  region: "WI",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.friendlylandscapingllc.com",
  description:
    "Landscape design, hardscaping, drainage, seasonal cleanup, native planting, and property care for Madison-area homes.",
  image: "/images/hero_landscaping_1783540594251.png",
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.6 },
  { path: "/services", priority: 0.9 },
  { path: "/portfolio", priority: 0.7 },
  { path: "/blog", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
];

export const services = [
  {
    id: "landscape-design",
    title: "Landscape Design & Installation",
    summary:
      "Planting plans, bed layouts, edging, and installation for Madison yards that need a clearer structure.",
    description:
      "We plan and install front beds, backyard plantings, paths, edging, and lawn-to-garden transitions around the way you use your home. The focus is practical design: plants that fit the site, clean lines, and a yard that is easier to maintain.",
    image: "/images/services/landscape_design.png",
    alt: "Fresh landscape beds and lawn installation around a Madison-area home",
  },
  {
    id: "seasonal-cleanup",
    title: "Seasonal Cleanups",
    summary:
      "Spring and fall cleanup for leaves, beds, pruning debris, edging, and yard reset work.",
    description:
      "Seasonal cleanup keeps beds, lawns, and hardscape edges from getting away from you. We clear leaves and debris, refresh edges, clean up spent growth, and prepare the property for the next stretch of Wisconsin weather.",
    image: "/images/services/seasonal_cleanup.png",
    alt: "Seasonal yard cleanup with refreshed garden beds and tidy lawn edges",
  },
  {
    id: "grading-drainage",
    title: "Grading & Drainage Solutions",
    summary:
      "Small grading corrections, drainage improvements, and water-management work for wet Madison yards.",
    description:
      "Standing water, muddy side yards, and runoff near foundations usually need more than surface cleanup. We shape grades and install practical drainage improvements that move water away from problem areas.",
    image: "/images/services/grading_drainage.png",
    alt: "Grading and drainage work directing water away from a residential landscape",
  },
  {
    id: "patio-construction",
    title: "Patio Construction & Repair",
    summary:
      "Stone patios, seating areas, fire-pit pads, and repair work for outdoor living spaces.",
    description:
      "A patio should drain correctly, sit level, and fit the scale of the yard. We build and repair stone patio spaces for grilling, seating, fire pits, and everyday use outside.",
    image: "/images/services/patio_construction.png",
    alt: "Stone patio with seating area and fire pit in a residential backyard",
  },
  {
    id: "retaining-walls",
    title: "Retaining Walls",
    summary:
      "Functional retaining walls and terraced edges for slopes, beds, and hardscape transitions.",
    description:
      "Retaining walls add usable shape to sloped yards and help hold beds, patios, and grade changes in place. We build walls for practical support and a clean finished edge.",
    image: "/images/services/retaining_walls.png",
    alt: "Retaining wall creating a structured planting bed along a residential slope",
  },
  {
    id: "mulch-installation",
    title: "Mulch Installation",
    summary:
      "Mulch refreshes for beds, trees, and borders with neat edges and proper depth.",
    description:
      "Mulch protects soil, reduces weeds, and gives beds a clean reset when it is installed at the right depth. We edge, clean, and mulch beds so they look finished without smothering plants.",
    image: "/images/services/mulch.png",
    alt: "Fresh mulch installed around shrubs and garden bed edges",
  },
  {
    id: "tree-planting",
    title: "Tree Planting",
    summary:
      "Tree selection and planting for shade, privacy, screening, and long-term yard structure.",
    description:
      "The right tree depends on soil, sun, space, and how large it will become. We help choose and plant trees that fit the property and support long-term shade, privacy, or seasonal interest.",
    image: "/images/services/tree_planting.png",
    alt: "Newly planted tree placed in a residential lawn for long-term shade",
  },
  {
    id: "pollinator-gardens",
    title: "Pollinator Gardens",
    summary:
      "Native and pollinator-friendly plantings for color, habitat, and lower-input garden beds.",
    description:
      "Pollinator gardens can bring structure and seasonal color while supporting bees, butterflies, and local habitat. We design and install native-forward beds that fit Madison's climate and your maintenance goals.",
    image: "/images/services/pollinator_garden.png",
    alt: "Native pollinator garden with blooming flowers for bees and butterflies",
  },
  {
    id: "power-washing",
    title: "Power Washing",
    summary:
      "Cleaning for patios, walkways, retaining walls, and hardscape surfaces.",
    description:
      "Hardscape surfaces collect dirt, mildew, and winter grime. We clean patios, walks, and outdoor surfaces so the finished landscape looks cared for from bed edge to stone edge.",
    image: "/images/services/power_washing.png",
    alt: "Clean walkway and patio surface after residential power washing",
  },
];

export const portfolioItems = [
  {
    title: "Backyard Stone Patio",
    description:
      "A defined patio space with room for seating, a fire feature, and clear transitions into the lawn.",
    image: "/images/patio_construction_1783540601760.png",
    alt: "Backyard stone patio with fire pit and seating area",
  },
  {
    title: "Native Pollinator Bed",
    description:
      "A color-forward planting bed using native-style blooms to support pollinators and soften the yard edge.",
    image: "/images/pollinator_garden_1783540608933.png",
    alt: "Native pollinator garden with coneflowers and mixed blooms",
  },
];

export const blogPosts = [
  {
    slug: "5-native-plants-madison",
    title: "5 Native Plants That Work Well in Madison Gardens",
    excerpt:
      "Native plants that handle southern Wisconsin weather while adding color, structure, and pollinator value.",
    date: "April 2, 2024",
    image: "/images/pollinator_garden_1783540608933.png",
    alt: "Native flowering plants in a Madison pollinator garden",
    content: [
      {
        heading: "Why native plants are a strong fit here",
        body: "Madison yards deal with freeze-thaw cycles, summer heat, heavy rain, and stretches of dry weather. Native and regionally adapted plants are often better prepared for those swings than delicate annual-heavy beds.",
      },
      {
        heading: "Plants to consider",
        body: "Coneflower, black-eyed Susan, bee balm, little bluestem, and wild geranium are useful starting points for many sunny or partly sunny garden beds. The final mix should still match the soil, light, drainage, and maintenance goals for the property.",
      },
      {
        heading: "How to use them",
        body: "Plant in groups rather than one of everything. Repeated clusters look cleaner from the street, make maintenance easier, and give pollinators a more useful target through the season.",
      },
    ],
  },
  {
    slug: "prepare-lawn-spring-thaw",
    title: "How to Prepare a Madison Lawn After the Spring Thaw",
    excerpt:
      "A practical spring checklist for debris, drainage, bed edges, and early-season lawn recovery.",
    date: "March 15, 2024",
    image: "/images/hero_landscaping_1783540594251.png",
    alt: "Residential lawn and landscape beds after spring cleanup",
    content: [
      {
        heading: "Start with cleanup before inputs",
        body: "Clear branches, leaves, and matted debris before adding seed, mulch, or fertilizer. Cleanup exposes winter damage and helps you see drainage issues while the soil is still telling the truth.",
      },
      {
        heading: "Watch where water sits",
        body: "Low spots, muddy side yards, and water near the foundation are worth addressing early. Grading and drainage corrections are easier to plan before new plantings or hardscape work begins.",
      },
      {
        heading: "Reset edges and beds",
        body: "Fresh bed edges, pruning cleanup, and properly installed mulch can make the whole property look maintained before peak growing season arrives.",
      },
    ],
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, business.siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  image = business.image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

import { absoluteUrl, business, services } from "@/lib/site-content";

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: business.name,
    url: business.siteUrl,
    telephone: business.phone,
    image: absoluteUrl(business.image),
    description: business.description,
    areaServed: [
      {
        "@type": "City",
        name: business.city,
        addressRegion: business.region,
      },
      {
        "@type": "AdministrativeArea",
        name: "Dane County",
        addressRegion: business.region,
      },
    ],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        areaServed: business.serviceArea,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

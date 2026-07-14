import site from "../../data/site";
import contact from "../../data/contact";

// JSON-LD structured data (schema.org Organization) describing the agency.
// Reuses src/data/site.js and src/data/contact.js as the single source of
// truth, so updating those files updates the structured data too.
//
// `sameAs` and `address` are only included once real values are filled in
// on site.js — omitted rather than filled with placeholder/fake data.
function StructuredData() {
  const sameAs = Object.values(site.social).filter(Boolean);

  // Only a real street + locality make this a meaningful address — the
  // default addressCountry alone isn't enough to publish a PostalAddress.
  const hasAddress = Boolean(
    site.address.streetAddress && site.address.addressLocality
  );
  const address = hasAddress
    ? Object.fromEntries(
        Object.entries(site.address).filter(([, value]) => Boolean(value))
      )
    : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: site.logo,
    image: site.ogImage,
    description: site.description,
    email: contact.email,
    telephone: `+${contact.whatsappNumber}`,
    ...(sameAs.length > 0 && { sameAs }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        ...address,
      },
    }),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: contact.email,
        telephone: `+${contact.whatsappNumber}`,
        areaServed: "CO",
        availableLanguage: ["Spanish"],
      },
    ],
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}

export default StructuredData;

import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { WhyUs } from "@/sections/WhyUs";
import { Testimonials } from "@/sections/Testimonials";
import { CTA } from "@/sections/CTA";
import { BackToTop } from "@/components/BackToTop";
import { PHONE_NUMBER_SCHEMA } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <CTA />
      <BackToTop />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://stoneandsaltohio.com",
            name: "Stone & Salt",
            description:
              "Year-round commercial grounds management and snow removal for Greater Cincinnati. One vendor. Four seasons. Documented service. $2M insured.",
            url: "https://stoneandsaltohio.com",
            telephone: PHONE_NUMBER_SCHEMA,
            email: "hello@stoneandsaltohio.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Liberty Township",
              addressRegion: "OH",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 39.3545,
              longitude: -84.3944,
            },
            areaServed: [
              { "@type": "City", name: "Liberty Township, OH" },
              { "@type": "City", name: "West Chester, OH" },
              { "@type": "City", name: "Mason, OH" },
              { "@type": "City", name: "Blue Ash, OH" },
              { "@type": "City", name: "Loveland, OH" },
              { "@type": "City", name: "Indian Hill, OH" },
              { "@type": "City", name: "Anderson Township, OH" },
              { "@type": "City", name: "Hyde Park, OH" },
              { "@type": "City", name: "Montgomery, OH" },
              { "@type": "City", name: "Oxford, OH" },
              { "@type": "City", name: "Waynesville, OH" },
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "14:00",
              },
            ],
            priceRange: "$$",
            image: "https://stoneandsaltohio.com/og-image.jpg",
            sameAs: [],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Grounds Management Services",
              itemListElement: [
                {
                  "@type": "OfferCatalog",
                  name: "Commercial Grounds Management",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Campus Maintenance" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "HOA Grounds Care" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Park Landscaping" } },
                  ],
                },
                {
                  "@type": "OfferCatalog",
                  name: "Snow & Ice Management",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Snow Plowing" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Snow Removal" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ice Management" } },
                  ],
                },
                {
                  "@type": "OfferCatalog",
                  name: "Hardscapes & Site Improvements",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Site Improvements" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paver Patios" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retaining Walls" } },
                  ],
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}

import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { WhyUs } from "@/sections/WhyUs";
import { BeforeAfter } from "@/sections/BeforeAfter";
import { Areas } from "@/sections/Areas";
import { Testimonials } from "@/sections/Testimonials";
import { CTA } from "@/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <BeforeAfter />
      <Areas />
      <Testimonials />
      <CTA
        title="Let's talk about your property"
        description="Whether you need year-round commercial care or a new backyard patio, we're here to help. Get a free quote today."
      />

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
              "Year-round outdoor services for Greater Cincinnati. Professional landscaping, hardscape installation, grounds maintenance, and snow removal.",
            url: "https://stoneandsaltohio.com",
            telephone: "+1-513-555-0123",
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
              name: "Outdoor Services",
              itemListElement: [
                {
                  "@type": "OfferCatalog",
                  name: "Commercial Grounds Maintenance",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Campus Maintenance" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "HOA Grounds Care" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Park Landscaping" } },
                  ],
                },
                {
                  "@type": "OfferCatalog",
                  name: "Snow & Ice Removal",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Snow Plowing" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Snow Removal" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ice Management" } },
                  ],
                },
                {
                  "@type": "OfferCatalog",
                  name: "Hardscape Installation",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paver Patios" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retaining Walls" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outdoor Living Spaces" } },
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

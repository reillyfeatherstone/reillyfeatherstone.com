import { markdownToDescription } from "@utils/markdownToDescription"
import { rawContent } from "@content/bio.md"
const description = markdownToDescription(rawContent(), 0) || undefined

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://reillyfeatherstone.com/#person",
  name: "Reilly Featherstone",
  givenName: "Reilly",
  familyName: "Featherstone",
  alternateName: "Riley Featherstone",
  mainEntityOfPage: "https://reillyfeatherstone.com/",
  url: "https://reillyfeatherstone.com/",
  description,
  image: {
    "@type": "ImageObject",
    url: "https://static.reillyfeatherstone.com/Reilly%20Featherstone%20Headshot.jpg",
    caption: "Reilly Featherstone",
  },
  jobTitle: ["Actor"],
  hasOccupation: {
    "@type": "Occupation",
    name: "Actor",
  },
  nationality: {
    "@type": "Country",
    name: "Wales",
  },
  homeLocation: {
    "@type": "Place",
    name: "Cardiff, Wales",
  },
  affiliation: [
    {
      "@type": "Organization",
      name: "Richard Burton Company",
    },
    {
      "@type": "Organization",
      name: "Sherman Theatre",
    },
    {
      "@type": "Organization",
      name: "Welsh National Theatre",
    },
    {
      "@type": "Organization",
      name: "Chapter Arts Centre",
    },
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Royal Welsh College of Music & Drama",
      url: "https://www.rwcmd.ac.uk/",
    },
    {
      "@type": "EducationalOrganization",
      name: "University of Wales Trinity Saint David",
      url: "https://www.uwtsd.ac.uk/",
    },
    {
      "@type": "EducationalOrganization",
      name: "Llanwern High School",
      url: "https://www.llanwernhighschool.co.uk/",
    },
  ],
  birthDate: "1998-12-22",
  birthPlace: {
    "@type": "Place",
    name: "Newport, Wales",
  },
  knowsLanguage: ["en", "cy"],
  height: {
    "@type": "QuantitativeValue",
    value: 175,
    unitCode: "CMT",
  },
  memberOf: {
    "@type": "Organization",
    name: "Equity",
    url: "https://www.equity.org.uk",
  },
  knowsAbout: [
    "Theatre",
    "Film",
    "Television",
    "Welsh theatre",
    "New writing",
    "Classical theatre",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "representation",
    url: "https://www.nancyhudsonassociates.com/",
  },
  sameAs: [
    "https://www.imdb.com/name/nm7475358/",
    "https://www.spotlight.com/5090-7833-5965",
    "https://cy.wikipedia.org/wiki/Reilly_Featherstone",
    "https://www.rwcmd.ac.uk/student-profiles/reilly-featherstone",
    "https://www.instagram.com/reillyfeatherstone/",
    "https://www.facebook.com/reillyfeatherstone",
    "https://x.com/Reilly_Feathers",
    "https://workonfilm.com/about-us/reilly-featherstone",
    "https://www.nancyhudsonassociates.com/actors/reilly-featherstone",
  ],
  gender: "https://schema.org/Male",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Bachelor's Degree",
      name: "BA (Hons) Acting",
      educationalLevel: "Bachelor's degree",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "University of Wales Trinity Saint David",
        url: "https://www.uwtsd.ac.uk/",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Master's Degree",
      name: "MA Acting for Stage, Screen & Recorded Media",
      educationalLevel: "Master's degree",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "Royal Welsh College of Music & Drama",
        url: "https://www.rwcmd.ac.uk/",
      },
    },
  ],
}

import { groq } from "next-sanity";

export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    name,
    slug,
    category,
    description,
    shortDescription,
    image,
    icon,
    price,
    duration,
    benefits,
    featured,
    order
  }
`;

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    category,
    description,
    shortDescription,
    image,
    icon,
    price,
    duration,
    benefits,
    featured,
    order
  }
`;

export const allLabPanelsQuery = groq`
  *[_type == "labPanel"] | order(order asc) {
    _id,
    name,
    slug,
    description,
    tests,
    price,
    featured,
    order
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    title,
    tagline,
    description,
    logo,
    phone,
    email,
    address,
    socialLinks,
    bookingUrl
  }
`;

export const allTeamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    image,
    credentials,
    order
  }
`;

export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] {
    _id,
    name,
    text,
    rating
  }
`;

import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Sample } from "@/types/Sample";



export async function getAllsamples(): Promise<Sample[]> {
  return client.fetch(
    groq`*[_type == "sample"] {
    _id,
    _createdAt,
    name,
    slug {
      current
    },
    image {
      asset->{
        url
      },
      alt
    },
    buttonText,
    content,
    categoryheading,
    category[] {
      carogary,
      description
    }
  }`
  );
}

export async function fetchSampleBySlug(
  slug: string
): Promise<Sample | null> {
  const query = groq`*[_type == "sample" && slug.current == $slug][0] {
      _id,
      _createdAt,
      name,
      slug {
        current
      },
      image {
        asset->{
          url
        },
        alt
      },
      buttonText,
      content,
      categoryheading,
      category[] {
        carogary,
        description
      },
      faq[]{
        question,
        answer
      }
    }`;

  return client.fetch(query, { slug });
}


import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "next-sanity";
// import { PortableTextBlock } from "@portabletext/types";

export interface Category {
  carogary: string;
  description: string;
}

export interface Sample {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
  buttonText: string;
  content: PortableTextBlock[];
  categoryheading: string;
  category: Category[];
  faq: {
    question: string;
    answer: string;
  }[];
}

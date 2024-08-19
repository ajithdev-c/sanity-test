import { getAllsamples } from "@/sanity/sanity-utils";
import {PortableText} from '@portabletext/react'
export const revalidate = 60 

export default async function Home() {
  const samples = await getAllsamples()
  console.log(samples);
  
  return (
    <div>
      {samples.map((sample) => 
        <div key={sample._id}>
          <div>{sample.name}</div>
          <PortableText value={sample.content}/>
        </div>
      )}

    </div>
  );
}

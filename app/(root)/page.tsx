import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = {search:query || null}
  const session = await auth()
  console.log("hello")
  console.log(session?.id)  


  const {data:posts} = await sanityFetch({query:STARTUPS_QUERY, params})
  
  // const posts = [{_createdAt :new Date(),
  //   views:55,
  //   author:{_id:1,name:'Sahil Khan'},
  //   _id:1,
  //   description:'This is a description of the startup',
  //   image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  //   category:'Tech',
  //   title:' Techy'
  // }]

  return (
    <>
      <section className="pink_container ">
        <h1 className="heading">
          Pitch your Startups
          <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Your Link to YC Founders: Discover, Connect, Innovate
          <br />
          Connect with Tomorrow's Innovators, Today
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Showing results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post:StartupCardType,index :number)=>(
              <StartupCard key={post?._id} post={post}/>
            ))
            ):(
              < p className="no-results"> No results found </p>
          )}

        </ul>
      </section>
      <SanityLive/>
    </>
  );
}

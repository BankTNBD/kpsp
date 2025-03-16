"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton"
import Section from "@/components/custom/Section";
import Post from "@/components/custom/Post";

export default function SectionGroup({ postList, scroll }) {
  const [loading, setLoading] = React.useState(true);
  const [postData, setPostData] = React.useState([]);

  const loadPost = async () => {
    let posts = await Promise.all(
      postList.map(async (value) => {
        const childData = await loadDB(value.id);
        return { name: value.name, child: childData };
      })
    );
    setPostData(posts);
    setLoading(false);
  };

  React.useEffect(() => {
    loadPost()
  }, [])

  async function loadDB(id) {
    try {
      const response = await fetch(`/api/post/${id}/`);
      const data = await response.json();
      return data
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }

  return (
    <div>
      {loading ? (
        <Section title="..." scroll={true}>
          <div className="flex flex-col space-y-3 m-5">
            <Skeleton className="h-[150px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-[250px]" />
              <Skeleton className="h-5 w-[200px]" />
            </div>
          </div>
        </Section>
      ) : (
        postData.map((value, index) => (
          <Section title={value.name} key={index} scroll={scroll}>
            {value.child.map((childValue, indexValue) => (
              <Post title={childValue.title} date={childValue.timestamp} content={childValue.description} link={childValue.link} srcImg={childValue.image} key={indexValue} />
            ))}
          </Section>
        )))}
    </div>
  );
}
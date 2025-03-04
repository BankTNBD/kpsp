"use client";

import React from "react";
import Section from "@/components/custom/Section";
import Post from "@/components/custom/Post";

export default function SectionGroup({ postList, scroll }) {
  const [postData, setPostData] = React.useState([]);

  const loadPost = async () => {
    let posts = await Promise.all(
      postList.map(async (value) => {
        const childData = await loadDB(value.id);
        return { name: value.name, child: childData };
      })
    );
    setPostData(posts);
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
      {postData.map((value, index) => (
        <Section title={value.name} key={index} scroll={scroll}>
          {value.child.map((childValue, indexValue) => (
            <Post title={childValue.title} date={childValue.timestamp} content={childValue.description} link={childValue.link} srcImg={childValue.image} key={indexValue} />
          ))}
        </Section>
      ))}
    </div>
  );
}
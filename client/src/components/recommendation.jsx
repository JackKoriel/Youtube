import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/card";
import axios from "axios";

const Container = styled.div`
  flex: 2;
`;

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      //send tags with express queries
      const res = await axios.get(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} type="sm" />
      ))}
    </Container>
  );
};

export default Recommendation;

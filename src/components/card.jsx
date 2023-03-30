import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Container>
      <Image src="https://res.cloudinary.com/dhj5ncbxs/image/upload/v1638644638/samples/food/dessert.jpg" />
      <Details>
        <ChannelImage src="https://res.cloudinary.com/dhj5ncbxs/image/upload/v1639270189/contour-faceless-front-view-bald-man-beard-vector-illustration-87237510_rfb44q.jpg" />
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Jack Dev</ChannelName>
          <Info>660,900 views - 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;

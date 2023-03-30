import {
  AddTaskOutlined,
  ReplyOutlined,
  ThumbDownOffAltOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const Recommendation = styled.div`
  flex: 2;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  color: ${({ theme }) => theme.textSoft};
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/eG4mtDyPvaA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>660,900 views - 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlined /> Dislike
            </Button>
            <Button>
              <ReplyOutlined /> Share
            </Button>
            <Button>
              <AddTaskOutlined /> Send
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://res.cloudinary.com/dhj5ncbxs/image/upload/v1639270189/contour-faceless-front-view-bald-man-beard-vector-illustration-87237510_rfb44q.jpg" />
            <ChannelDetail>
              <ChannelName>Jack Dev</ChannelName>
              <ChannelCounter>300K subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                pariatur laborum quis aspernatur velit impedit, earum eos vel,
                repellendus assumenda accusamus voluptate autem exercitationem
                molestiae tempora asperiores harum nostrum! Alias?
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};

export default Video;

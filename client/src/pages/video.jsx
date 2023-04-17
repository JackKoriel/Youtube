import {
  AddTaskOutlined,
  ReplyOutlined,
  ThumbDown,
  ThumbDownOffAltOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comments from "../components/comments";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { fetchStart, fetchSuccess, like, dislike } from "../redux/videoSlice";
import { subscription } from "../redux/userSlice";
import { format } from "timeago.js";
import CircularProgress from "@mui/material/CircularProgress";

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
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  font-size: 16px;
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

const Loading = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

const Video = () => {
  const { currentUser, loading: currentUserLoading } = useSelector(
    (state) => state.user
  );
  const { currentVideo, loading: currentVideoLoading } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();
  //get video id to fetch video
  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchStart());
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);

        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    //send payload with userId
    dispatch(like(currentUser._id));
  };

  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    //send payload with userId
    dispatch(dislike(currentUser._id));
  };

  const handleSubscribe = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? //unsub from channel
        await axios.put(`/users/unsub/${channel._id}`)
      : //subscribe to channel
        await axios.put(`/users/sub/${channel._id}`);
    //send payload with channel ID
    dispatch(subscription(channel._id));
  };

  return (
    <Container>
      {currentVideoLoading || currentUserLoading ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
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
          <Title>{currentVideo?.title}</Title>
          <Details>
            <Info>
              {currentVideo?.views} views - {format(currentVideo?.createdAt)}
            </Info>
            <Buttons>
              <Button onClick={handleLike}>
                {currentVideo?.likes?.includes(currentUser?._id) ? (
                  <ThumbUp />
                ) : (
                  <ThumbUpOutlined />
                )}{" "}
                {currentVideo?.likes?.length}
              </Button>
              <Button onClick={handleDislike}>
                {currentVideo?.dislikes?.includes(currentUser?._id) ? (
                  <ThumbDown />
                ) : (
                  <ThumbDownOffAltOutlined />
                )}{" "}
                {currentVideo?.dislikes?.length}
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
              <Image src={channel.img} />
              <ChannelDetail>
                <ChannelName>{channel.name}</ChannelName>
                <ChannelCounter>
                  {channel.subscribers} subscribers
                </ChannelCounter>
                <Description>{currentVideo?.desc}</Description>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe onClick={handleSubscribe}>
              {currentUser.subscribedUsers?.includes(channel._id)
                ? "SUBSCRIBED"
                : "SUBSCRIBE"}
            </Subscribe>
          </Channel>
          <Hr />
          <Comments />
        </Content>
      )}
      {/* <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation> */}
    </Container>
  );
};

export default Video;

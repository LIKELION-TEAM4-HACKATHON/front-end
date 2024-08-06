import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const MyClubChat = () => {
  const { clubId } = useParams();
  const [chats, setChats] = useState([]);
  const [leaderId, setLeaderId] = useState(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          `http://3.37.154.200:8080/api/club/${clubId}/chats`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Response:", response.data);
        if (response.data.chats && Array.isArray(response.data.chats)) {
          setChats(response.data.chats);
          setLeaderId(response.data.leaderId);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch chats", error);
      }
    };

    fetchChats();
  }, [clubId]);

  const handleCommentSubmit = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.post(
        `http://3.37.154.200:8080/api/club/${clubId}/chats`,
        { content: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response.data);
      setChats((prevChats) => [...prevChats, response.data]);
      setNewComment("");
    } catch (error) {
      console.error(
        "Failed to submit comment",
        error.response || error.message
      );
    }
  };
  return (
    <ClubChatSection>
      <Chatview>
        <div className="review-comment-box">
          {Array.isArray(chats) &&
            chats.map((chat) => (
              <div key={chat.chatId} className="chat-box">
                <div className="chat-top">
                  <img
                    className="chat-profile-image"
                    src={chat.memberProfileUrl}
                    alt="프로필 이미지"
                  />
                  <div className="chat-username">
                    {chat.userName}
                    {chat.memberId === leaderId && (
                      <span className="chat-leader"> 모임장 </span>
                    )}
                  </div>
                </div>
                <div className="chat-bottom">
                  <div className="chat-comment">{chat.content}</div>
                  <div className="chat-date">
                    {new Date(chat.createdDate).toLocaleTimeString("ko-KR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Chatview>
      <Chatwrite>
        <div className="chat-write-box">
          <textarea
            className="chat-write-form"
            placeholder="댓글 작성 요망"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button className="chat-write-upload" onClick={handleCommentSubmit}>
            전송
          </button>
        </div>
      </Chatwrite>
    </ClubChatSection>
  );
};

const ClubChatSection = styled.section`
  width: 773px;
  height: auto;
  margin: 10px;
  font-family: KoddiUDOnGothic-Regular;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Chatview = styled.div`
  .review-comment-box {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    min-height: 400px;
    height: auto;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 20px;
  }

  .chat-box {
    gap: 10px;
    margin-top: 30px;

    .chat-top {
      display: flex;
      align-items: center;
      margin: 0px 10px;
      gap: 10px;
    }
    .chat-bottom {
      display: flex;
      align-items: center;
      margin: 0px 60px;
      gap: 10px;
    }
    .chat-profile-image {
      width: 45.889px;
      height: 45.889px;
      border-radius: 70%;
    }

    .chat-username {
      color: #7c7c7c;
      font-size: 16.157px;
    }
    .chat-leader {
      color: black;
      font-size: 16.157px;
    }
  }
  .chat-comment {
    display: block;
    font-size: 16.071px;
    border-radius: 5.333px;
    background: rgba(223, 37, 37, 0.21);
    width: auto;
    height: auto;
    padding: 10px 15px;
    color: #4e4e4e;
  }
  .chat-date {
    color: #4e4e4e;
    font-size: 13px;
  }
`;

const Chatwrite = styled.div`
  .chat-write-box {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    .chat-write-form {
      width: 1000px;
      min-height: 40px;
      padding: 15px;
      font-size: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background: #ddd;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    }

    .chat-write-upload {
      width: 200px;
      height: 100%;
      padding: 16px 15px;
      background-image: linear-gradient(94deg, #e02525 -14.69%, #7a1414 99.86%);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      color: #df2525;
      color: white;
      font-size: 25px;
    }
  }
`;

export default MyClubChat;

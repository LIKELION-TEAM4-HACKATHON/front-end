import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ClubProvider = ({ children }) => {
  const { clubId } = useParams();
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubDetail = async () => {
      try {
        console.log(`Fetching data for clubId: ${clubId}`); // 콘솔 로그 추가
        const response = await axios.get(
          `http://3.37.154.200:8080/api/clubs/${clubId}`
        );
        console.log("API response:", response.data); // 응답 데이터 콘솔 로그
        setClub(response.data);
      } catch (error) {
        console.error("Failed to fetch club details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClubDetail();
  }, [clubId]);

  if (loading) return <div>Loading...</div>;

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { club })
  );
};

export default ClubProvider;

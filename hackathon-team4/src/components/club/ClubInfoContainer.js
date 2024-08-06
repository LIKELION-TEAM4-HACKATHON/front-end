import React, { useState, useEffect } from "react";
import ClubInfo from "./ClubInfo";
import axios from "axios";
import { useParams } from "react-router-dom";

const ClubInfoContainer = () => {
  const { clubId } = useParams();
  const [club, setClub] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubInfo = async () => {
      try {
        const response = await axios.get(
          `http://3.37.154.200:8080/api/clubs/${clubId}`
        );
        setClub(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchClubInfo();
  }, [clubId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!club) {
    return <div>Loading...</div>;
  }

  return <ClubInfo club={club} />;
};

export default ClubInfoContainer;

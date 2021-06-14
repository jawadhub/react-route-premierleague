import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./TeamDetail.css";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const TeamDetail = () => {
  const { idTeam } = useParams();
  
  const [team, setTeam] = useState({});
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    )
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [idTeam]);
  const {
    strTeam,
    intFormedYear,
    strSport,
    strGender,
    strTeamJersey,
    strStadiumDescription,
    strCountry,
    strTeamBanner,
    strTwitter,
    strYoutube,
    strFacebook,
  } = team;

  return (
    <div className="all-team">
      <img src={strTeamBanner} alt="" />

      <div className="per-team">
        <div className="team left">
          <h1>{strTeam}</h1>
          <p> Founding: {intFormedYear}</p>
          <p>Country: {strCountry}</p>
          <p> Type of Sports: {strSport}</p>
          <p> Gender: {strGender}</p>
        </div>

        <div className="team right">
          <img className="jersey" src={strTeamJersey} alt="Jersey" />
        </div>
      </div>

      <div>
        <p className="description">
          <b>Description of the Staduim :</b>
          {strStadiumDescription}
        </p>
      </div>

      <div>
        <h3>Follow us on : </h3>
        <a className="social-icon" href={strFacebook}>
          <FaFacebookF size="2rem" />
        </a>
        <a className="social-icon" href={strTwitter}>
          <FaTwitter size="2rem" />
        </a>
        <a className="social-icon" href={strYoutube}>
          <FaYoutube size="2rem" />
        </a>
      </div>
    </div>
  );
};

export default TeamDetail;
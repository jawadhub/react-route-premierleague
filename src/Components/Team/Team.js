import React from 'react';
import { useHistory } from 'react-router';
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

const Team = (props) => {
  const { strAlternate, strLeague, strStadium, idTeam, strTeamBadge } =
    props.team;

  const history = useHistory();
  const exploreButton = (idTeam) => {
    const url = `team/${idTeam}`;
    history.push(url);
  };

  return (
    <div className="each-team">
      <h3>{strAlternate}</h3>
      <img className="team-badge" src={strTeamBadge} alt="" />
      <p>{strLeague}</p>
      <p>{strStadium}</p>
      <button className="explore-button" onClick={() => exploreButton(idTeam)}>
        <FontAwesomeIcon className="fa-icon" icon={faFutbol} /> 
         Explore
      </button>

    </div>
  );
};

export default Team;
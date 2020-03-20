import React from "react";

const Members = props => {
  return (
    <div className="form-list">
      {props.member.map(member => (
        <div className="team-member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;

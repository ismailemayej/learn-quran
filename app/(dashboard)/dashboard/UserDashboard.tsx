import React from "react";

const UserDashboard = ({ userinfo }: any) => {
  const { fullName, year } = userinfo;
  return (
    <div>
      <h2>{fullName}</h2>
      <h2>{year}</h2>
    </div>
  );
};

export default UserDashboard;

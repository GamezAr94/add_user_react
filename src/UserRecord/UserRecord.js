import React from "react";
import Card from "../UI/Card";

const UserRecord = (props) => {
    return (
      <Card>
        {props.usersList.map((user) => {
          return <div key={user.id}>{user.name} ({user.age} years old)</div>;
        })}
      </Card>);
};

export default UserRecord;
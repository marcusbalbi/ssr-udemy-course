import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../actions";

const UsersList = () => {
  const users = useSelector((state) => state.users);
  useEffect(() => {
    fetchUsers();
  }, []);

  function renderUsers() {
    return users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  return (
    <div>
      lista de usuarios
      <ul>{renderUsers()}</ul>
    </div>
  );
};

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  component: UsersList,
  loadData,
};

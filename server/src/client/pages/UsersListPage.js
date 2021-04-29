import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

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

  function renderHead() {
    return (
      <Helmet>
        <title>{`${users.length} users loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  return (
    <div>
      {renderHead()}
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

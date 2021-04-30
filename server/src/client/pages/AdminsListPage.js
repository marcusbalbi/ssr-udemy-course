import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";
import useThunkDispatch from "../hooks/useThunkDispatch";

const AdminsList = () => {
  const admins = useSelector((state) => state.admins);
  const dispatch = useThunkDispatch();
  useEffect(() => {
    dispatch(fetchAdmins());
  }, []);
  function renderAdmins() {
    return admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }
  return (
    <div>
      <h3>Lista de Usuários Admins</h3>
      <ul>{renderAdmins()}</ul>
    </div>
  );
};

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export default {
  component: requireAuth(AdminsList),
  loadData,
};

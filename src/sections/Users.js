import React, { useEffect } from "react";
import Loading from "../components/Loading";
import UserCard from "../components/UserCard";
import { useStateValue } from "../StateProvider";
import * as actions from "../actions";
import { getUsers } from "../services/userService";

const Users = () => {
  const [{ users, isLoading, page }, dispatch] = useStateValue();

  useEffect(() => {
    getUsers(page, dispatch);
  }, []);

  const handleClickButton = async () => {
    dispatch({
      type: actions.SET_LOADING,
    });
    await getUsers(page, dispatch);
  };

  const isDisabled = !page;
  let showMoreClasses = "show-more" + (isDisabled ? " disabled-button" : "");

  return (
    <section className="users-section">
      <h1>Working with GET request</h1>

      <div className="users-cards">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {isLoading && (
        <div className="loading-container">
          <Loading />
        </div>
      )}

      <div className={showMoreClasses}>
        <button disabled={isDisabled} onClick={() => handleClickButton()}>
          Show more
        </button>
      </div>
    </section>
  );
};

export default Users;

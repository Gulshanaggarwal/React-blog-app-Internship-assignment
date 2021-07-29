import React, { useContext } from "react";
import { handleLogout } from "../../HelperFunctions/helperFunctions";
import { AuthContext } from "../../store/authProvider";

function DashboardHeader() {
  const user = useContext(AuthContext);  // fetch user
  const { displayName } = user !== null ? user : "";

  return (
    <div className="flex flex-row justify-between ">
      <h1 className="text-xl m-4">Welcome to dashboard {displayName}! </h1>
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white rounded-sm px-4 py-1 m-4 hover:bg-blue-600"
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardHeader;

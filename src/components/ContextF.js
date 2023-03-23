import React, { useContext } from "react";
import { UserContext, UserChannel } from "../App";
function ContextF() {
  const user = useContext(UserContext);
  const channel = useContext(UserChannel);
  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default ContextF;

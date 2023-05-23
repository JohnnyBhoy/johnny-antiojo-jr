import React from "react";
import NotVerified from "./user/NotVerified";
import FormContainer from "./form/FormContainer";
import { useAuth } from "../hooks";
import Johnny from "../image/johnny.png";
import HomePage from "./HomePage";

export default function Home() {
  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;
  const isVerified = authInfo.profile?.isVerified;

  return <>
    {isLoggedIn && !isVerified ?
      (<FormContainer>
        <NotVerified />
      </FormContainer>) :
      (<HomePage image={Johnny} />)}
  </>
}

import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container";

export default function NotVerified() {


  const navigate = useNavigate();

  const navigateToVerification = () => {
    navigate("/auth/verification", { state: { user: authInfo.profile } });
  };

  return (
    <Container>
      <p className="text-lg text-center bg-blue-50 p-2 mt-10">
        It looks like you haven't verified your account,{" "}
        <button
          onClick={navigateToVerification}
          className="text-blue-500 font-semibold hover:underline"
        >
          click here to verify your account.
        </button>
      </p>
    </Container>
  );
}

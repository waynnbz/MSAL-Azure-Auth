import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <a className="navbar-brand" href="/">
          MSAL React Tutorial
        </a>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Navbar>
      <h5>
        <center>
          Welcome to Microsoft Authentication Library For React Tutorial
        </center>
      </h5>
      <br />
      <br />
      {props.children}
    </>
  );
};

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import { Button } from "../../packages/excalidraw";

export const SignInTrigger = React.memo(() => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "var(--color-primary)",
              color: "#fff",
            }}
            type="button"
          >
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              rootBox: "user-avatar-root",
              userButtonAvatarBox: "user-avatar-box",
              userButtonAvatar: "user-avatar",
              userButtonTrigger: "user-avatar-trigger",
            },
          }}
        />
      </SignedIn>
    </>
  );
});

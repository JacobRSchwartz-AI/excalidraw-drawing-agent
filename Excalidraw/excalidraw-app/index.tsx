import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import "../excalidraw-app/sentry";
import ExcalidrawApp from "./App";
import { ApolloProviderWrapper } from "./clients/graphqlClient";
import { ClerkProvider } from "@clerk/clerk-react";
window.__EXCALIDRAW_SHA__ = import.meta.env.VITE_APP_GIT_SHA;
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
registerSW();
root.render(
  <StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_APP_CLERK_PK as string}>
      <ApolloProviderWrapper>
        <ExcalidrawApp />
      </ApolloProviderWrapper>
    </ClerkProvider>
  </StrictMode>,
);

import React from "react";
import { UnleashClient } from "unleash-proxy-client";

import { AppFeatures } from "./Features";
import { UnleashProvider } from "./react-unleash";

const unleash = new UnleashClient({
  url: "http://localhost:3000/proxy",
  clientKey: "proxy-secret",
  appName: "example-app",
});

// Used to set the context fields, shared with the Unleash Proxy
unleash.updateContext({ userId: "1233" });

export default function App() {
  return (
    <UnleashProvider instance={unleash}>
      <AppFeatures />
    </UnleashProvider>
  );
}

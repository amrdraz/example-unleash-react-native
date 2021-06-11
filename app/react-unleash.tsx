import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  useCallback,
} from "react";
import { UnleashClient, IVariant } from "unleash-proxy-client";

const UnleashContext = createContext<UnleashClient>(null);
export function UnleashProvider({ instance, children }) {
  useEffect(() => {
    instance.start();
    return () => instance.stop();
  }, []);

  return (
    <UnleashContext.Provider value={instance}>
      {children}
    </UnleashContext.Provider>
  );
}

export const UnleashConsumer = UnleashContext.Consumer;

export function useUnleash() {
  return useContext(UnleashContext);
}

export function useUnleashEnabled(feature_key: string) {
  const unleash = useUnleash();
  const [enabled, setEnabled] = useState<boolean>(false);

  const setState = useCallback(() => {
    setEnabled(unleash.isEnabled(feature_key));
  }, []);

  useEffect(() => {
    unleash.on("update", setState);
    return () => {
      unleash.off("update", setState);
    };
  });
  return enabled;
}

export function useUnleashVariant(feature_key: string) {
  const unleash = useUnleash();
  const [variant, setVariant] = useState<IVariant>();

  const setState = useCallback(() => {
    setVariant(unleash.getVariant(feature_key));
  }, []);

  useEffect(() => {
    unleash.on("update", setState);
    return () => {
      unleash.off("update", setState);
    };
  });
  return variant;
}

import { useState, useEffect } from "react";

export default src => {
  // Keeping track of script loaded and error state
  const [state, setState] = useState({
    loaded: false,
    error: false
  });

  useEffect(
    () => {
      const foundScript = document.querySelector(`script[src="${src}"]`);

      if (foundScript) {
        foundScript.remove();
      }

      // Create script
      let script = document.createElement("script");
      script.src = src;
      script.async = true;

      // Script event listener callbacks for load and error
      const onScriptLoad = () => {
        setState({
          loaded: true,
          error: false
        });
      };

      const onScriptError = () => {
        const errorScript = document.querySelector(`script[src="${src}"]`);
        if (errorScript) {
          errorScript.remove();
        }
        setState({
          loaded: true,
          error: true
        });
      };

      script.addEventListener("load", onScriptLoad);
      script.addEventListener("error", onScriptError);

      // Add script to document body
      document.body.appendChild(script);

      // Remove event listeners on cleanup
      return () => {
        script.removeEventListener("load", onScriptLoad);
        script.removeEventListener("error", onScriptError);
      };
    },
    [src] // Only re-run effect if script src changes
  );

  return [state.loaded, state.error];
};

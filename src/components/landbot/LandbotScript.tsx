import { useEffect } from "react";

declare global {
  interface Window {
    myLandbot?: any;
    Landbot?: {
      Livechat: new (config: { configUrl: string }) => void;
    };
  }
}

export default function LandbotScript() {
  useEffect(() => {
    const initLandbot = () => {
      if (window.myLandbot) return;

      const script = document.createElement("script");
      script.type = "module";
      script.async = true;
      script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";

      script.onload = () => {
        if (window.Landbot) {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl:
              "https://storage.googleapis.com/landbot.online/v3/H-2927531-FTPEIS6GNWNWTOPE/index.json",
          });
        } else {
          console.error("Landbot is not defined on the window object.");
        }
      };

      document.body.appendChild(script);
    };

    window.addEventListener("mouseover", initLandbot, { once: true });
    window.addEventListener("touchstart", initLandbot, { once: true });

    return () => {
      window.removeEventListener("mouseover", initLandbot);
      window.removeEventListener("touchstart", initLandbot);
    };
  }, []);

  return null;
}

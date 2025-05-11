import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "@context/theme/themeContextProvider";
import { Navbar } from "@components/Navbar";
import Landing from "./pages/landing/Landing";
import { Suspense } from "react";
import Hero from "@components/hero/hero";
import LandbotScript from "@components/landbot/LandbotScript";

export function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Landing />
      <LandbotScript />
    </ThemeProvider>
  );
}

export default function WrapperApp() {
  <Suspense fallback={<CircularProgress />}>
    <App />
  </Suspense>;
}

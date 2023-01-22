import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Navigation } from "./src/navigation/index";
import { ThemeProvider } from "styled-components/native";
import themes from "./src/constants/themes";
import { useState } from "react";

export default function App() {
  // const deviceTheme = useColorScheme() || "dark";
  // const theme = themes[deviceTheme];
  const [appIsReady, setAppIsReady] = useState(false);
  const [isFontLoaded] = useFonts({
    "Poppins-400": require("./assets/fonts/Poppins-Regular.otf"),
    "Poppins-600": require("./assets/fonts/Poppins-SemiBold.otf"),
    "Poppins-700": require("./assets/fonts/Poppins-SemiBold.otf"),
  });

  /**
    // const deviceTheme = useColorScheme() || "dark";
  // const theme = themes[deviceTheme];
  const [isAppReady, setIsAppReady] = useState(false);

  const [isFontLoaded] = useFonts({
    "Poppins-400": require("./assets/fonts/Poppins-Regular.otf"),
    "Poppins-600": require("./assets/fonts/Poppins-SemiBold.otf"),
    "Poppins-700": require("./assets/fonts/Poppins-SemiBold.otf"),
  });

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // await SplashScreen.preventAutoHideAsync();
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setIsAppReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);
*/
  if (!isFontLoaded) {
    return null;
  }
  //else {
  //   //await SplashScreen.hideAsync();
  // }

  return (
    <ThemeProvider theme={themes.dark}>
      <Navigation />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

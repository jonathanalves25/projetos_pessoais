import { StatusBar } from 'expo-status-bar';
import {Home} from './src/screens/Home';
import {ThemeProvider} from 'styled-components';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';

export default function App() {

  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  if(!fontsLoaded) {
    return;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar/>
        <Home/>
      </ThemeProvider>
    </>
  );
}

import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import OpenSansLight from '../../assets/fonts/OpenSans-Light.ttf';
import OpenSans from '../../assets/fonts/OpenSans-Regular.ttf';
import OpenSansMedium from '../../assets/fonts/OpenSans-Medium.ttf';
import OpenSansSemiBold from '../../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../../assets/fonts/OpenSans-Bold.ttf';
import OpenSansExtraBold from '../../assets/fonts/OpenSans-ExtraBold.ttf';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'OpenSans-Light': OpenSansLight,
          OpenSans,
          'OpenSans-Medium-500': OpenSansMedium,
          'OpenSans-SemiBold-600': OpenSansSemiBold,
          'OpenSans-Bold-700': OpenSansBold,
          'OpenSans-ExtraBold-800': OpenSansExtraBold,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}

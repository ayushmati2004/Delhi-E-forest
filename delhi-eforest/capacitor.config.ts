import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Delhi Eforest',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins:{
    SplashScreen:{
      launchShowDuration:2000,
      launchAutoHide:true,
      backgroundColor:"#de0f17",
      androidSplashResourceName:"splash",
      androidScaleType:"CENTER_CROP",
      showSpinner:true,
      androidSpinnerStyle:"small",
      iosSpinnerStyle:"small",
      splashFullScreen:true,
      splashImmersive:true,
    },
  },
};

export default config;

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.thch.toolapp',
  appName: 'ToolBox App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

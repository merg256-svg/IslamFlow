import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.islamflow.personal',
  appName: 'IslamFlow',
  webDir: 'www',
  bundledWebRuntime: false,
  server: { androidScheme: 'https' }
};
export default config;

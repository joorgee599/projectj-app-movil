import 'dotenv/config';
import appJson from './app.json';

export default ({ config }) => {
  return {
    ...appJson,
    extra: {
      ...appJson.expo.extra,
      apiUrl: process.env.API_BASE_URL
    }
  };
};

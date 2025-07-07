// app.config.ts
import { ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext) => {
  config.extra = {
    ...config.extra,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  };
  return config;
};

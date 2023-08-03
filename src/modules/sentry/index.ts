import { config } from '@/config';

export const sentryConfig = {
  dsn: config.sentry.dsn,
  tracesSampleRate: 1,
  debug: false,
};

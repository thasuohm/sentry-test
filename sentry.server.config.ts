// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { sentryConfig } from '@/modules/sentry';
import * as Sentry from '@sentry/nextjs';

Sentry.init(sentryConfig);
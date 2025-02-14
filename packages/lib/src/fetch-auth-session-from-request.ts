import { type NextServer } from '@aws-amplify/adapter-nextjs';
import { fetchAuthSession } from 'aws-amplify/auth/server';
import type { NextRequest, NextResponse } from 'next/server';

import { createAmplifyServerRunner } from './create-amplify-server-runner';

export async function fetchAuthSessionFromRequest(
  input: NextServer.CreateServerRunnerInput,
  request: NextRequest,
  response: NextResponse,
) {
  const { runWithAmplifyServerContext } = createAmplifyServerRunner(input);

  return await runWithAmplifyServerContext({
    nextServerContext: {
      request,
      response,
    },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });
}

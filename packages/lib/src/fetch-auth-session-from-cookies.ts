import { type NextServer } from '@aws-amplify/adapter-nextjs';
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';

import { createAmplifyServerRunner } from './create-amplify-server-runner';

export async function fetchAuthSessionFromCookies(
  input: NextServer.CreateServerRunnerInput,
) {
  const { runWithAmplifyServerContext } = createAmplifyServerRunner(input);

  return await runWithAmplifyServerContext({
    nextServerContext: {
      cookies,
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

import type { V6ClientSSRCookies } from 'aws-amplify/api/internals';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { type NextServer } from '@aws-amplify/adapter-nextjs';
import { cookies } from 'next/headers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- amplify required to extends it
export function createCookiesClient<TSchema extends Record<any, any>>(
  input: NextServer.CreateServerRunnerInput['config'],
): V6ClientSSRCookies<TSchema> {
  const cookiesClient = generateServerClientUsingCookies<TSchema>({
    config: input,
    cookies,
  });

  return cookiesClient;
}

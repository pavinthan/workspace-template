import {
  createServerRunner,
  type NextServer,
} from '@aws-amplify/adapter-nextjs';

export function createAmplifyServerRunner(
  input: NextServer.CreateServerRunnerInput,
) {
  return createServerRunner(input);
}

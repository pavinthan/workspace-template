import { referenceAuth } from '@aws-amplify/backend';
import IdentityOutputs from '@workspace/identity-backend/amplify_outputs.json';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = referenceAuth({
  userPoolId: IdentityOutputs.auth.user_pool_id,
  identityPoolId: IdentityOutputs.auth.identity_pool_id,
  authRoleArn: IdentityOutputs.custom.auth.auth_role_arn,
  unauthRoleArn: IdentityOutputs.custom.auth.unauth_role_arn,
  userPoolClientId: IdentityOutputs.auth.user_pool_client_id,
});

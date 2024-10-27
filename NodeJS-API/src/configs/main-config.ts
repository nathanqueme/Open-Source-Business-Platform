//
//  main-config.ts
//  atsight_apis
//
//  Created by Nathan Queme the 10/04/22
//


import { CognitoUserPool } from "amazon-cognito-identity-js"
export const { USER_POOL_ID = "", CLIENT_ID = "", IDENTITY_POOL_ID = "", IDENTITY_POOL_REGION = "" } = process.env


// User pool (manages where users and their cognito attributes)
/**
 * @param UserPoolId : id of the "user pool" where users are. (A user pool can be used for multiple "ClientID" aka applications.)
 * @param ClientId : id of the "application". (Can be founded in : Cognito console > "User pools" > "App integration" tab > scroll down to "App clients and analytics")
 */
export const userPoolInfo = {
    UserPoolId: USER_POOL_ID,  
    ClientId: CLIENT_ID,
}
export const userPool = new CognitoUserPool(userPoolInfo)



// Identity pool (manages how can users interact with the AWS services based on the if they are logged in and their attributes --> this is done via two IAM roles --> each IAM role has policies for allowing certain commands of a given sdk)
/**
 * @param identityPoolId : the id of the "identity pool". (Can be founded in : Cognito console > "Federated identities" > name of the identity pool > "Sample code" > "Get AWS Credentials")
 * @param region : the region the "identity pool" is located in.
 */
export const identityPoolConfig = {
   identityPoolId: IDENTITY_POOL_ID,
   region: IDENTITY_POOL_REGION
}


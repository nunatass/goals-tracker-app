import * as AppleAuthentication from "expo-apple-authentication";

export const appleLoginButtonType =
  AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN;
export const appleLoginButtonStyle =
  AppleAuthentication.AppleAuthenticationButtonStyle.BLACK;

export const appleAuthenticationScopeName =
  AppleAuthentication.AppleAuthenticationScope.FULL_NAME;
export const appleAuthenticationScopeEmail =
  AppleAuthentication.AppleAuthenticationScope.EMAIL;

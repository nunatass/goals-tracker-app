import * as AppleAuthentication from "expo-apple-authentication";
import * as AuthSession from "expo-auth-session";
import { Container, GoogleLoginBtn, LoginBtnContainer, styles } from "./styles";

import { getGoogleToken, getGoogleUrl } from "../../utils/google-credentials";

import {
  appleAuthenticationScopeEmail,
  appleAuthenticationScopeName,
  appleLoginButtonStyle,
  appleLoginButtonType,
} from "../../utils/apple-login-credentials";

import GoogleLoginIcon from "../../components/icons/google-login-icon";
import { SplashLogo } from "../../components/icons/logoSplash";
import { signIn } from "../../api/index";
import { useAuth } from "../../hooks/useAuth";

type AuthResponse = {
  type: string;
  params: {
    code: string;
  };
};

export default function SignInScreen() {
  const { login } = useAuth();

  async function handleGoogleSignIn() {
    const authUrl = getGoogleUrl();

    const { type, params } = (await AuthSession.startAsync({
      authUrl,
    })) as AuthResponse;

    const { id_token } = await getGoogleToken(params.code);

    if (type === "success") {
      const { data } = await signIn(id_token);

      if (!data.accessToken) {
        return;
      }

      login(data.accessToken);
    }
  }

  async function handleAppleSignIn() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          appleAuthenticationScopeName,
          appleAuthenticationScopeEmail,
        ],
      });

      if (!credential) {
        return;
      }

      const { data } = await signIn(credential.identityToken);

      if (!data.accessToken) {
        return;
      }

      login(data.accessToken);
      // navigation.dispatch(StackActions.replace("TabNavigation" as never));
    } catch (e: any) {
      console.log(e);
    }
  }
  return (
    <Container>
      <SplashLogo />
      <LoginBtnContainer>
        <GoogleLoginBtn onPress={handleGoogleSignIn}>
          <GoogleLoginIcon />
        </GoogleLoginBtn>

        <AppleAuthentication.AppleAuthenticationButton
          buttonType={appleLoginButtonType}
          buttonStyle={appleLoginButtonStyle}
          cornerRadius={10}
          style={styles.appleLoginButton}
          onPress={handleAppleSignIn}
        />
      </LoginBtnContainer>
    </Container>
  );
}

import {
  GOOGLE_OAUTH_REDIRECT_URL,
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
} from "@env";
import axios from "axios";

const GOOGLE_OAUTH2_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_APIS_TOKEN_URL = "https://oauth2.googleapis.com/token";

export const getGoogleUrl = () => {
  const rootUrl = GOOGLE_OAUTH2_URL;

  const options = {
    redirect_uri: GOOGLE_OAUTH_REDIRECT_URL as string,
    client_id: GOOGLE_OAUTH_CLIENT_ID as string,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: ["profile", "email"].join(" "),
    //state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};

interface TokenResponse {
  [x: string]: any;
  accessToken: string;
  refreshToken: string;
  idToken: string;
  expiresIn: number;
  scope: string;
  tokenType: string;
}

export async function getGoogleToken(code: string): Promise<TokenResponse> {
  try {
    const response = await axios.post<TokenResponse>(GOOGLE_APIS_TOKEN_URL, {
      grant_type: "authorization_code",
      code,
      client_id: GOOGLE_OAUTH_CLIENT_ID,
      client_secret: GOOGLE_OAUTH_CLIENT_SECRET,
      redirect_uri: GOOGLE_OAUTH_REDIRECT_URL,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

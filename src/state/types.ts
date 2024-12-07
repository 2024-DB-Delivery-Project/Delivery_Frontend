export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  role: string | null;
  userId: number | null;
  username: string | null;
}

export enum AuthProviders {
  GOOGLE = 'google',
}

export type AuthProvider = (typeof AuthProviders)[keyof typeof AuthProviders]

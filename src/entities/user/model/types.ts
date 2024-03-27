export interface IProfile {
  email: string
  name?: string | null
  image?: string | null
}
export interface IUser {
  id: string
  email: string
  emailVerified?: Date | null
  name: string | null
  image: string | null
}

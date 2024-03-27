import { type IProfile } from '../../model'

export const getProfileDisplayName = (profile: IProfile) =>
  profile.name ? profile.name : profile.email

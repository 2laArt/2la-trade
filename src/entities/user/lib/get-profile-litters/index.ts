import { type IProfile } from '../../model'
import { getProfileDisplayName } from '../get-profile-display-name'

export const getProfileLitters = (profile: IProfile) => {
  const displayName = getProfileDisplayName(profile)

  const [a, b] = displayName.split('@')[0].split(/\.|\s|-|_/)

  if (!b) {
    return `${a[0]?.toUpperCase() ?? ''}${a[1]?.toUpperCase() ?? ''}`
  }

  return `${a[0]?.toUpperCase() ?? ''}${b[0]?.toUpperCase() ?? ''}`
}

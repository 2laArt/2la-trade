import { ApiInstance } from '@/shared/api'
import type { IUser } from './types'

const baseUrl = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user`

class UserServices extends ApiInstance {
  getUser = async (userId: string): Promise<IUser | null> => {
    const url = `?userId=${userId}`
    return await this.fetch(url)
  }
  createUser = async (newUser: IUser): Promise<IUser> => {
    const url = ``
    return await this.fetch(url, {
      method: 'post',
      body: this.bodyJson(newUser),
    })
  }
}

export const userServices = new UserServices(baseUrl)

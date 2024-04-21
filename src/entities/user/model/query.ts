import { useQuery } from '@tanstack/react-query'
import { keyFactory } from '@/entities/key-factory'
import { userServices } from './api'

export const useQueryGetUserById = (id: string) => {
  const query = useQuery({
    queryKey: keyFactory.userById(id),
    queryFn: () => userServices.getUser(id),
  })
  return query
}

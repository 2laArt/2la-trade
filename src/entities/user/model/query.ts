import { useQuery } from '@tanstack/react-query'
import { userService } from '.'
import { keyFactory } from '@/entities/key-factory'

export const useQueryGetUserById = (id: string) => {
  const query = useQuery({
    queryKey: keyFactory.userById(id),
    queryFn: () => userService.getUserById(id),
  })
  return query
}

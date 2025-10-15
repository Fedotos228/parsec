import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useStrapiQuery<TData, TError = Error>(
  queryKey: string[],
  queryFn: () => Promise<{ data: TData }>,
  options?: Omit<UseQueryOptions<{ data: TData }, TError, TData>, 'queryKey' | 'queryFn' | 'select'>
) {
  return useQuery({
    queryKey,
    queryFn,
    select: (response) => response.data,
    ...options,
  })
}

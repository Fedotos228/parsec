import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'


export function useStrapiQuery<TData, TError = Error>(
  queryKey: QueryKey,
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
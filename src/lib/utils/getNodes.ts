export function getNodes<T>(data: { nodes?: (T | null)[] | null } | null | undefined) {
  if (!data?.nodes) return []

  return data.nodes.filter((node): node is T => node !== null && node !== undefined)
}
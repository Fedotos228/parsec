
export const errorCatch = (error: any): string => {
  const message = (error as Error)?.message

  return message
    ? typeof error.message === 'object'
      ? message[0]
      : message
    : error.message
}
const error = (message: string, code: number) => {
  const error = new Error(message)

  return { ...error, code }
}

export type HttpError = ReturnType<typeof error >

export default error

export default (message: string, code: number) => {
  const error = new Error(message)

  return {...error, code}
}

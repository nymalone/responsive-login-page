export const handleAxiosError = (error) => {
  const UNEXPECTED_ERROR = {
    message: 'Unexpected error'
  }
  if (error?.response.status === 400) {
    return {
      message: "Check your credentials"
    }
  } else if (error?.request && !error?.response) {
    return {
      message: 'You are offline, check your internet and try again',
      details: error.message
    }
  } else return UNEXPECTED_ERROR
}

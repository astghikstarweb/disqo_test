function normalizeErrorResponse(error) {
  if(!error.response) {
    error = {data: {msg: 'Server error', code: 500}};
    return error;
  }
  return error.response;
}

export {normalizeErrorResponse}
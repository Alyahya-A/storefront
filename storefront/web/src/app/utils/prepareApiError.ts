import { ApiError } from '../models/apiError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const prepareApiError = (error: any): ApiError => {
  const apiError: ApiError = new ApiError();
  apiError.errorOccurred = true;
  apiError.statusCode = error.httpCode;
  apiError.errorCode = error.errorCode;
  apiError.errorMessage = error.title;
  apiError.traceId = error.traceId;

  return apiError;
};

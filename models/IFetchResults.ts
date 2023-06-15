import { ErrorType } from "./ErrorType";

/**
 * use query fetch results interface
 */
export interface IFetchResults<T> {
    isLoading: boolean;
    isRefreshing: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: false | ErrorType;
    data: T | undefined;
  }
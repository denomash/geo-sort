import { ErrorType } from "./ErrorType";

/**
 * use query fetch results interface
 */
export interface IFetchResults<T> {
  /**
   * Loading state
   */
  isLoading: boolean;

  /**
   * Refreshing state
   */
  isRefreshing: boolean;

  /**
   * Success state
   */
  isSuccess: boolean;

  /**
   * Error state
   */
  isError: boolean;

  /**
   * Request error
   */
  error: false | ErrorType;

  /**
   * Returned data
   */
  data: T | undefined;
}

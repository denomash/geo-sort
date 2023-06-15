/**
 * Country details interface
 */
export interface ICountryDetails {
  /**
   * Country's flags
   */
  flags: {
    /**
     * png flag format
     */
    png: string;

    /**
     * svg flag format
     */
    svg: string;
  };

  /**
   * Country's names
   */
  name: {
    /**
     * Country's common name
     */
    common: string;

    /**
     * Country's official name
     */
    official: string;
  };

  capitalInfo: {
    latlng: [number, number];
  };
}

/* Routes to components are exposed here.
    If undefined, there's no param route
    If SomeType | undefined, params are optional
    If SomeType, params are required
 */
export type RootStackParamList = {
  Home: undefined; // Home
  ListOfStops: undefined; // ListOfStops
  ListOfLines: undefined; // ListOfLines
};

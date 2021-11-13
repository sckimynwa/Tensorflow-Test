import { ComponentType } from "react";

export interface RouteModel {
  name: string;
  path: string;
  component: ComponentType;
}

/**
 * A <Switch> looks through its children <Route>s and
 * renders the first one that matches the current URL
 */
export const Routes: RouteModel[] = [];

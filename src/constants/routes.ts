import { ComponentType } from "react";

import MobileNet from "@/components/MobileNet";
import ObjectDetector from "@/components/ObjectDetector";
import PoseDetector from "@/components/PoseDetector";

export interface RouteModel {
  name: string;
  path: string;
  component: ComponentType;
}

/**
 * A <Switch> looks through its children <Route>s and
 * renders the first one that matches the current URL
 */
export const Routes: RouteModel[] = [
  {
    name: "mobile-net",
    path: "/mobile-net",
    component: MobileNet,
  },
  {
    name: "object-detector",
    path: "/object-detector",
    component: ObjectDetector,
  },
  {
    name: "pose-detector",
    path: "/pose-detector",
    component: PoseDetector,
  },
];

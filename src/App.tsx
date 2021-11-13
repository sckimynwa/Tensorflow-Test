import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { fenceStyle } from "./components/common/styles/fenceStyle";
import { RouteModel, Routes } from "./constants/routes";

const Fence = styled.div`
  ${fenceStyle};
`;

function App() {
  return (
    <Fence>
      <BrowserRouter>
        <Switch>
          {Routes.map((route: RouteModel) => (
            <Route
              key={route.name}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
        <Redirect to={Routes[0].path} />
      </BrowserRouter>
    </Fence>
  );
}

export default App;

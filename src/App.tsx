import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { RouteModel, Routes } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((route: RouteModel) => (
          <Route path={route.path} component={route.component} />
        ))}
        <Redirect to={Routes[0].path} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

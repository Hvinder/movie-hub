import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

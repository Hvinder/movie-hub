import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieList from "../pages/MovieList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

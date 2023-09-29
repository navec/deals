import Layout from "components/templates/Layout";
import BestSellers from "pages/BestSellers";
import Detail from "pages/Details";
import Home from "pages/Home";
import NewArrivals from "pages/NewArrivals";
import Products from "pages/Products";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Detail />} />
        <Route path="meilleures-ventes" element={<BestSellers />} />
        <Route path="nouveaux-arrives" element={<NewArrivals />} />
        <Route path="produits" element={<Products />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

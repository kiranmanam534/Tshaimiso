import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home/Home";
import Trustees from "./pages/Trustees/Trustees";
import Staff from "./pages/Staff/Staff";
import Organogram from "./pages/Organogram/Organogram";
import PoliciesandProcedures from "./pages/PoliciesandProcedures/PoliciesandProcedures";
import Media from "./pages/Media/Media";
import Evnents from "./pages/Events/Evnents";
import InternalComs from "./pages/Internal-Coms/InternalComs";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trustees" element={<Trustees />} />
          <Route path="staff" element={<Staff />} />
          <Route path="organogram" element={<Organogram />} />
          <Route
            path="policiesandProcedures"
            element={<PoliciesandProcedures />}
          />
          <Route path="media" element={<Media />} />
          <Route path="events" element={<Evnents />} />
          <Route path="internal-coms" element={<InternalComs />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

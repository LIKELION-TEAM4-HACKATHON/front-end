import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Layout from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

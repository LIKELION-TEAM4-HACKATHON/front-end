import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Layout from "./components/layout";
import ProfileShow from "./components/mypage/ProfileShow";
import ProfileEdit from "./components/mypage/ProfileEdit";
import Profile from "./components/mypage/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Profile />}>
            <Route path="profileShow" element={<ProfileShow />} />
            <Route path="profileEdit" element={<ProfileEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

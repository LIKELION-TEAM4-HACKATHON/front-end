import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Layout from "./components/layout";
import ProfileShow from "./components/mypage/ProfileShow";
import ProfileEdit from "./components/mypage/ProfileEdit";
import Profile from "./components/mypage/index.js";
import CultureDetail from "./components/culturedetail/index.js";
import CultureInfo from "./components/culturedetail/CultureInfo.js";
import CultureMeet from "./components/culturedetail/CultureMeet.js";

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
          <Route path="/culturedetail" element={<CultureDetail />}>
            <Route path="info" element={<CultureInfo />} />
            <Route path="meet" element={<CultureMeet />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Layout from "./components/layout";
import ProfileShow from "./components/mypage/ProfileShow";
import ProfileEdit from "./components/mypage/ProfileEdit";
import Profile from "./components/mypage/index.js";
import CultureDetail from "./components/culturedetail/index.js";
import CultureInfo from "./components/culturedetail/CultureInfo.js";
import CultureMeet from "./components/culturedetail/CultureMeet.js";
import Club from "./components/club/index.js";
import ReviewPage from "./components/ReviewPage/ReviewSimple.js";
import ReviewWrite from "./components/ReviewPage/ReviewWrite.js";
import CulturePage from "./components/CulturePage/index.js";
import ReviewDetail from "./components/ReviewPage/index.js";
import ClubInfoContainer from "./components/club/ClubInfoContainer.js"; // 변경된 파일

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
          <Route path="/club" element={<Club />} />
          <Route path="/clubs/:clubId" element={<ClubInfoContainer />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/cultures/:cultureId" element={<CultureDetail />}>
            <Route path="info" element={<CultureInfo />} />
            <Route path="meet" element={<CultureMeet />} />
          </Route>
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/reviews/:reviewId" element={<ReviewDetail />} />
          <Route path="/reviewWrite/:cultureId" element={<ReviewWrite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

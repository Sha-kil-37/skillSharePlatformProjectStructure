import { createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import ShareSkill from "../pages/ShareSkill/ShareSkill";
import Notification from "../pages/Notification/Notification";
import NotFound from "../pages/NotFound/NotFound";
//
export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="share-skill" element={<ShareSkill />} />
      <Route path="notifications" element={<Notification />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
);

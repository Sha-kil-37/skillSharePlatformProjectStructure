import { Outlet } from "react-router-dom";
import Header from "../components/molecules/Header";
import Footer from "./../components/molecules/Footer";

const MainLayout = () => {
  // document head title
  document.title = `CSSP | Community Skill Share Platform`;
  //
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Header /> {/* header content */}
      <div className="flex-1 flex container">
        <main className="flex-1">
          <Outlet />
        </main>
        <aside className="w-96 px-8 py-6 border-s dark:border-slate-800">
          <div className="h-[60vh] dark:text-white">
            Sidebar content goes here.
          </div>
          <Footer /> {/* footer content */}
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;

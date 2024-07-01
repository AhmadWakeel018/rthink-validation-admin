import { DashboardSvg } from "../static-svgs-urls";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <Header />
        <div className="w-[calc(100vw-16px)] overflow-hidden mx-auto h-[calc(100vh-68px)] shadow-[0px_8px_40px_-20px_rgba(0,0,0,0.12)] border border-[ECECF1] bg-white rounded-[8px]">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;

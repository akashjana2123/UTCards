import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/sign-up";
import Investments1 from "./pages/investments1";
import SettingPage from "./pages/setting-page";
import MyPrivileges from "./pages/my-privileges";
import SettingPage1 from "./pages/setting-page1";
import SettingPage2 from "./pages/setting-page2";
import Services from "./pages/services";
import Loan from "./pages/loan";
import CreditCards from "./pages/credit-cards";
import Investments from "./pages/investments";
import Accounts from "./pages/accounts";
import Transaction from "./pages/transaction";
import MainDashboard from "./pages/main-dashboard";
import LandingPage from "./pages/landing-page";
import IPhone13ProMax from "./pages/i-phone13-pro-max";
import MetalBronze from "./pages/metal-bronze";
import BankType from "./pages/bank-type";
import GlassmorphismCards from "./pages/glassmorphism-cards";
import GradientCards from "./pages/gradient-cards";
import SimpleCards from "./pages/simple-cards";
import Login from "./pages/login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/investments1":
        title = "";
        metaDescription = "";
        break;
      case "/setting-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/my-privileges":
        title = "";
        metaDescription = "";
        break;
      case "/setting-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/setting-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/loan":
        title = "";
        metaDescription = "";
        break;
      case "/credit-cards":
        title = "";
        metaDescription = "";
        break;
      case "/investments":
        title = "";
        metaDescription = "";
        break;
      case "/accounts":
        title = "";
        metaDescription = "";
        break;
      case "/transaction":
        title = "";
        metaDescription = "";
        break;
      case "/main-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-13-pro-max-2":
        title = "";
        metaDescription = "";
        break;
      case "/metal-bronze":
        title = "";
        metaDescription = "";
        break;
      case "/bank-type":
        title = "";
        metaDescription = "";
        break;
      case "/glassmorphism-cards":
        title = "";
        metaDescription = "";
        break;
      case "/gradient-cards":
        title = "";
        metaDescription = "";
        break;
      case "/simple-cards":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/investments1" element={<Investments1 />} />
      <Route path="/setting-page-3" element={<SettingPage />} />
      <Route path="/my-privileges" element={<MyPrivileges />} />
      <Route path="/setting-page-2" element={<SettingPage1 />} />
      <Route path="/setting-page-1" element={<SettingPage2 />} />
      <Route path="/services" element={<Services />} />
      <Route path="/loan" element={<Loan />} />
      <Route path="/credit-cards" element={<CreditCards />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/main-dashboard" element={<MainDashboard />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/iphone-13-pro-max-2" element={<IPhone13ProMax />} />
      <Route path="/metal-bronze" element={<MetalBronze />} />
      <Route path="/bank-type" element={<BankType />} />
      <Route path="/glassmorphism-cards" element={<GlassmorphismCards />} />
      <Route path="/gradient-cards" element={<GradientCards />} />
      <Route path="/simple-cards" element={<SimpleCards />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;

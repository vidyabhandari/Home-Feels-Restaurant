import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import BookTablePage from "./pages/BookTablePage";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CartPageContainer from "./containers/CartPageContainer";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import Add from "./pages/Add";
import ListItems from "./pages/ListItems";
import Orders from "./pages/Orders";
import CartPage from "./pages/CartPage";
// const AboutPage = lazy(() => import("./pages/AboutPage"));
// const MenuPage = lazy(() => import("./pages/MenuPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage"));
// const BookTablePage = lazy(() => import("./pages/BookTablePage"));
// const BlogPage = lazy(() => import("./pages/BlogPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage"));
// const SignupPage = lazy(() => import("./pages/SignupPage"));
// const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/table-booking" element={<BookTablePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<ListItems />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

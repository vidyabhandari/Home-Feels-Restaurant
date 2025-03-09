import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import BookTablePage from "./pages/BookTablePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import Add from "./pages/Add";
import ListItems from "./pages/ListItems";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import VerifyPage from "./pages/VerifyPage";
import TableBookingContainer from "./containers/TableBookingContainer";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/table-booking" element={<BookTablePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<ListItems />} />
          <Route path="/order" element={<PlaceOrderPage />} />
          <Route path="/myorders" element={<OrderPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/users-table" element={<TableBookingContainer />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

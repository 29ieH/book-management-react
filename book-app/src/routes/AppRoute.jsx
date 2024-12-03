import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail";
import Login from "../component/Authe/Login";
import BookDetail from "../pages/BookDetail";
import SearchSection from "../component/SearchPage/SearchSection";
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movie-detail" element={<MovieDetail />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/book-detail/:id" element={<BookDetail />}></Route>
      <Route path="/search" element={<SearchSection />}></Route>
    </Routes>
  );
};

export default AppRoute;

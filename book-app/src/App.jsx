import Header from "./component/Header";
// import FeatureMovie from "./component/FeatureMovie";
// import MovieList from "./component/MediaList";
// import { CategoryMovies, RatedTabs } from "./component/libs/constant";
import AppRoute from "./routes/AppRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Header></Header>
      <AppRoute></AppRoute>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default App;

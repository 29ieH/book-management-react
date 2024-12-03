import FeatureMovie from "../component/FeatureMovie";
import MovieList from "../component/MediaList";
import { CategoryBooks, RatedTabs } from "../libs/constant";
const HomePage = () => {
  return (
    <div>
      <FeatureMovie></FeatureMovie>
      <MovieList title={"Categories"} tabs={CategoryBooks}></MovieList>
      {/* <MovieList title={"Top Rated"} tabs={RatedTabs}></MovieList> */}
    </div>
  );
};

export default HomePage;

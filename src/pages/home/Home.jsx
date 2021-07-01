import NavBar from "../../components/navbar/NavBar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured type="movies" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;

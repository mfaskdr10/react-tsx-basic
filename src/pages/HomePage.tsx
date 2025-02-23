import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="p-10">
      <h1>Ini adalah Home Page</h1>
      <Link to="/about">Menuju ke about</Link>
    </div>
  );
};

export default HomePage;

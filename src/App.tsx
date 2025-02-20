import Footer from "./components/Footer";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Header />
      <ProfileCard name={"Muhammad Fadhil"} year={2007} job={"Programmer"} />
      <ProfileCard name={"Alvan Syah"} year={2008} />
      <Footer />
    </>
  );
}

export default App;

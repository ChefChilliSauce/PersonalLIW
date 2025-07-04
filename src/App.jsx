import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Intro from "./components/Intro";

function App() {
  const dateToday = new Date();
  const dateBirth = new Date(2001, 9, 30);
  const difference = Math.floor(
    (dateToday - dateBirth) / 1000 / 60 / 60 / 24 / 7
  );
  const differenceNoFloor = Number(
    ((dateToday - dateBirth) / 1000 / 60 / 60 / 24 / 7).toFixed(2)
  );
  return (
    <>
      <Header />
      <Intro />
      <ProgressBar difference={differenceNoFloor} />
      <Grid gridColor={difference} userDateOfBirth={dateBirth} />
      <Footer />
    </>
  );
}

export default App;

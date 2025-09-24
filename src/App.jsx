import { Suspense } from "react";
import "./App.css";
import AvailableFlowers from "./componante/AvialableFlowers/AvailableFlowers";
import Navber from "./componante/Navber/Navber";
import SelectedFlowers from "./componante/SelectedFlowers/SelectedFlowers";
const fetchFlower = async () => {
  const res = await fetch("/FlowersData.json");
  return res.json();
};
function App() {
  const FlowersPromise = fetchFlower();
  return (
    <>
      <Navber></Navber>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <AvailableFlowers FlowersPromise={FlowersPromise}></AvailableFlowers>
      </Suspense>
      <SelectedFlowers></SelectedFlowers>
    </>
  );
}

export default App;

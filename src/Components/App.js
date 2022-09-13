import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import WorkerList from "./WorkerList";
import WorkerDetail from "./WorkerDetail";
import MainMenu from "./MainMenu";
import workerListGenerator from "../workerListGenerator";
import MarketSurveys from "./MarketSurveys";
import Inventory from "./Inventory";
import Contact from "./Contact";

function App() {
  const [workerList, setWorkerList] = useState([]);
  const [workerDetail, setWorkerDetail] = useState({});

  useEffect(() => {
    workerListGenerator(setWorkerList);
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainMenu />} />

        <Route
          path="worker-list"
          element={
            <WorkerList
              workerList={workerList}
              setWorkerList={setWorkerList}
              setWorkerDetail={setWorkerDetail}
            />
          }
        />

        <Route
          path="worker-detail"
          element={
            <WorkerDetail
              workerList={workerList}
              setWorkerList={setWorkerList}
              workerDetail={workerDetail}
              setWorkerDetail={setWorkerDetail}
            />
          }
        />
        <Route path="market-surveys" element={<MarketSurveys />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

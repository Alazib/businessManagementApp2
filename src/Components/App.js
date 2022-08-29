import { Route, Routes } from 'react-router';
import { useState, useEffect } from "react";
import { faker } from '@faker-js/faker';
import { avatar } from '../avatarGenerator';
import randomNumberGenerator from '../randomNumberGenerator';
import WorkerList from './WorkerList';
import WorkerDetail from './WorkerDetail';

function App() {

  const [workerList, setWorkerList] = useState([]);
  const [workerDetail, setWorkerDetail] = useState({});


  function workerListGenerator() {

    const MIN_NUMBER_OF_WORKERS = 6
    const MAX_NUMBER_OF_WORKERS = 20
    let NUMBER_OF_TOTAL_WORKERS = randomNumberGenerator(
      MIN_NUMBER_OF_WORKERS,
      MAX_NUMBER_OF_WORKERS
    )

    const originalWorkerList = []
    const { name, mersenne, address, phone, datatype } = faker

    for (let i = 0; i < NUMBER_OF_TOTAL_WORKERS; i++) {

      const fakeName = name.fullName()
      const fakeEmail = `${fakeName}@gmail.com`
      const fakeAddress = `${address.cityName()}, ${address.streetAddress()}, building ${mersenne.rand(
        0,
        200
      )}`

      const worker = {

        photo: avatar.generateRandomAvatar(),
        name: fakeName,
        email: fakeEmail,
        age: faker.mersenne.rand(18, 65),
        address: fakeAddress,
        phoneNumber: phone.number("6## ## ## ##"),
        active: datatype.boolean()

      }

      originalWorkerList.push(worker)
    }

    return originalWorkerList

  }


  useEffect(() => {

    const listOfWorkers = workerListGenerator()

    setWorkerList(listOfWorkers)

  }, []);

  console.log(workerList)


  return (

    <div className="App">

      <Routes>

        <Route path='/' element={<WorkerList
          workerList={workerList}
          setWorkerList={setWorkerList}
          setWorkerDetail={setWorkerDetail}


        />} />

        <Route path='worker-detail' element={<WorkerDetail
          workerList={workerList}
          setWorkerList={setWorkerList}
          workerDetail={workerDetail} />} />

      </Routes>


    </div>
  );
}

export default App;

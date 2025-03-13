import React, { useEffect, useState } from 'react';
import logo from '../assets/LostPawsLogo.png';

const Home = () => {
  const [petBubble, setPetBubble] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const petsPerPage = 30;

  useEffect(() => {
    const GetPet = async () => {
      const response = await fetch('https://api.petfinder.com/v2/animals?status=adoptable&gender=female&size=medium&limit=100&organization=ON591,LA398,IL947,KY527,VA788,IN738,MI1075,TX2369,FL1618,OK473,FL1628,FL1579,TX2309,ME162,IL916', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ0MzNLTnBQbnNRUVllWHM5NzhyRWxpaVJ0dzVSSWxHSTlOS3NOM29SOUNOb2RwaDV2aiIsImp0aSI6IjdjNjU4MmYyZGE3ZjE5MDE1ZjgzNGUyNTQyMzgzOWIzZjAzZTUwYzg0YjE2NGM2MDdhOTQ2ZjcwNzUwNWUxMzcxNDhmZTM5NTU3NWJmMDViIiwiaWF0IjoxNzQxODc4OTU0LCJuYmYiOjE3NDE4Nzg5NTQsImV4cCI6MTc0MTg4MjU1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.LR-N4UrEMcdKDQFNrrOoIveSMAkCIIQI1X6NLKtoM-qNCovDhxDudLB8HD0QNPDxJQUPD_lhhOfas2zodA3Cbka7GioVOve5bRk8BqpW5tPx19MgKBiX6F-u61vWPKAf7Ka67G0MDyBKdNRABw7EcDTlHlsT8dyG-tpAHOUaQC-JNJH4Ed8T4p-onIG_OnstWGwT45JmCt7oq9sczFNVIi8fyJfRN3ZklK8DTebPHhUkHdoOdUdWSG3d_E4S2lZn9iPieCdrl_38Z285nhMCks49GfAwFY9Qwqe6wjWO9PQb7uz0omAoN44JiPRgNXTEzHpGsdtc5P2YUYeTsStmfA'
        },
      });

      const data = await response.json();
      const petInfo = data.animals;
      const array = [];

      for (const elem of petInfo) {
        const { name, photos, url } = elem;

        array.push(
          <a href={url} target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
            <img
              key={name}
              className='mx-auto block h-24 rounded-full hover:bg-sky-700 shadow-xl shadow-blue-gray-900/50'
              src={photos[0]?.small}
              alt={name}
            />
            <p>{name}</p>
          </a>
        );
      }
      setPetBubble(array);
    };

    GetPet();
  }, []);

  // Pets Per Page Logic
  const handleNextPage = () => {
    if ((currentPage + 1) * petsPerPage < petBubble.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Slice the petBubble array for the current page
  const currentPets = petBubble.slice(currentPage * petsPerPage, (currentPage + 1) * petsPerPage);

  return (
    <div className='flex flex-col items-center mt-16 bg-gray-100 min-h-screen'> 
    <div className='flex flex-col items-center mt-20'>
      <h2 className='text-3xl font-serif text-black flex items-center mb-4'>Welcome</h2> {/* Add destructured user */} 
      <p>Pets based on your preference</p>
      <div className='flex justify-center items-center min-h-screen w-full'>
        <div className='bg-transparent p-8 rounded-lg w-full max-w-6xl shadow-lg'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {currentPets}
          </div>
          <div className='flex justify-between mt-4'>
            <button onClick={handlePreviousPage} className='px-4 py-2 bg-teal-500 text-white rounded hover:bg-blue-600' disabled={currentPage === 0}>
              Previous
            </button>
            <button onClick={handleNextPage} className='px-4 py-2 bg-teal-500 text-white rounded hover:bg-blue-600' disabled={(currentPage + 1) * petsPerPage >= petBubble.length}>
              Next
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;


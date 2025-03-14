import React, { useEffect, useState } from 'react';
import addLogo from '../assets/icons8-plus-48.png';

/* Import below uncommented beacause it's value is not being read */
//import logo from '../assets/LostPawsLogo.png';

const Home = () => {
  const [petBubble, setpetBubble] = useState<React.ReactElement[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const petsPerPage = 30;

  const addFavorites = async (id: number): Promise<void> => {
    interface id {
      id: number
    }

    const body: id = {
      id
    }

    await fetch('/api/Petfavorities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      
    });
  }

  useEffect(() => {
    const GetPet = async (): Promise<void> => {
      // const response = await fetch('https://api.petfinder.com/v2/animals?status=adoptable&gender=female&size=medium&limit=100&organization=ON591,LA398,IL947,KY527,VA788,IN738,MI1075,TX2369,FL1618,OK473,FL1628,FL1579,TX2309,ME162,IL916', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ0MzNLTnBQbnNRUVllWHM5NzhyRWxpaVJ0dzVSSWxHSTlOS3NOM29SOUNOb2RwaDV2aiIsImp0aSI6ImU5MTQ5NDhlNTljMDczNjAwOWI0NTNhMWRiOGJkZDY4ZDQ4NzA4YWE1MWNlYmIzMWVhN2EzN2E4YmE3YmVmYTFlMjExMzQyOTlhODRmMzllIiwiaWF0IjoxNzQxODc1MTkzLCJuYmYiOjE3NDE4NzUxOTMsImV4cCI6MTc0MTg3ODc5Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.HAQw5IAbj5rMI_EG-mcbgcWZwcFTc8cy1hg2Ci53vbFXTTMLinqsQ5IyykDlRY1UyGnL0FTJ30DZ2MgpTs9k_TpJ4vcvBMxjkwvCzw5KAmLZo_X4FEirmqJIaFXYRiZiexfhz8KMD8dFKK2XL0IYJ4aOU1SyObkQTkG9MXRoLx6A3Xzh4qrDf6GNbI6SyVdlxNPcsKC8Ho7QzQGI-xzIL7B0sAVpuaFXqHsbaG8VTmyHGW149zz7D641NaY-BsfFTQRkKN2vYwaJg2vmFo2bLs-2fyLhGtEI5DTzSSFzCzNvyKCkWKTaPbTwIRqFMVZrfRm4eG7wUrNNGod_Po8Lzg'
      //   }
      // )},
      const response = await fetch('/api');

      const data = await response.json();
      const petInfo = data.animals;
      const array: React.ReactElement[] = [];

      for (const elem of petInfo) {
        const { name, photos, url, id } = elem;

        array.push(
          <div>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center'
              key={name}
            >
              <img
                className='mx-auto block h-24 rounded-full hover:bg-sky-700 shadow-xl shadow-blue-gray-900/50'
                src={photos[0]?.small}
                alt={name}
              />
              <p>{name}</p>
            </a>
            <img className='hover:bg-sky-700' src={addLogo} key={id} onClick={() => {
              addFavorites(id)
            }}/>
          </div>
        );
      }
      setpetBubble(array);
      return;
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
  const currentPets = petBubble.slice(
    currentPage * petsPerPage,
    (currentPage + 1) * petsPerPage
  );

  return (
    <div className='flex flex-col items-center mt-16 bg-gray-100 min-h-screen'>
      <div className='flex flex-col items-center mt-20'>
        <h2 className='text-3xl font-serif text-black flex items-center mb-4'>
          Welcome
        </h2>{' '}
        {/* Add destructured user */}
        <p>Pets based on your preference</p>
        <div className='flex justify-center items-center min-h-screen w-full'>
          <div className='bg-transparent p-8 rounded-lg w-full max-w-6xl shadow-lg'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {currentPets}
            </div>
            <div className='flex justify-between mt-4'>
              <button
                onClick={handlePreviousPage}
                className='px-4 py-2 bg-teal-500 text-white rounded hover:bg-blue-600'
                disabled={currentPage === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                className='px-4 py-2 bg-teal-500 text-white rounded hover:bg-blue-600'
                disabled={(currentPage + 1) * petsPerPage >= petBubble.length}
              >
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

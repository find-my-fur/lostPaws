import React, { ReactElement, useState, useEffect } from 'react';
import removeLogo from '../assets/icons8-minus-50.png';

//types for petInformation
interface PetInfo {
  name: string;
  photos: { small: string }[];
  url: string;
  id: number;
}

//types for Id below
interface id {
  id: number;
}

const Favorites = () => {
  const [petUpdate, setpetUpdate] = useState<boolean>(true);
  const [petBubble, setpetBubble] = useState<ReactElement[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const petsPerPage = 30;

  const removeFavorites = async (id: number): Promise<void> => {
    const body: id = {
      id,
    };

    await fetch('/api/removefavorites', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    setpetUpdate(!petUpdate);
  };

  useEffect(() => {
    const GetPet = async (): Promise<void> => {
      const response = await fetch('/api/getfavorites');

      const data = await response.json();
      const petInfo: PetInfo[] = data;
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
            <img
              className='hover:bg-sky-700'
              src={removeLogo}
              key={id}
              onClick={() => {
                removeFavorites(id);
              }}
            />
          </div>
        );
      }
      setpetBubble(array);
      return;
    };

    GetPet();
  }, [petUpdate]);

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

export default Favorites;

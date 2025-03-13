import React, { useEffect, useState } from 'react';
import logo from '../assets/LostPawsLogo.png';

const Home = () => {
  const [petBubble, setpetBubble] = useState([]); 

  useEffect(() => {
    const GetPet = async (): Promise<void> => {
      const response = await fetch('https://api.petfinder.com/v2/animals?status=adoptable&gender=female&size=medium&limit=100&organization=ON591,LA398,IL947,KY527,VA788,IN738,MI1075,TX2369,FL1618,OK473,FL1628,FL1579,TX2309,ME162,IL916', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ0MzNLTnBQbnNRUVllWHM5NzhyRWxpaVJ0dzVSSWxHSTlOS3NOM29SOUNOb2RwaDV2aiIsImp0aSI6ImU5MTQ5NDhlNTljMDczNjAwOWI0NTNhMWRiOGJkZDY4ZDQ4NzA4YWE1MWNlYmIzMWVhN2EzN2E4YmE3YmVmYTFlMjExMzQyOTlhODRmMzllIiwiaWF0IjoxNzQxODc1MTkzLCJuYmYiOjE3NDE4NzUxOTMsImV4cCI6MTc0MTg3ODc5Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.HAQw5IAbj5rMI_EG-mcbgcWZwcFTc8cy1hg2Ci53vbFXTTMLinqsQ5IyykDlRY1UyGnL0FTJ30DZ2MgpTs9k_TpJ4vcvBMxjkwvCzw5KAmLZo_X4FEirmqJIaFXYRiZiexfhz8KMD8dFKK2XL0IYJ4aOU1SyObkQTkG9MXRoLx6A3Xzh4qrDf6GNbI6SyVdlxNPcsKC8Ho7QzQGI-xzIL7B0sAVpuaFXqHsbaG8VTmyHGW149zz7D641NaY-BsfFTQRkKN2vYwaJg2vmFo2bLs-2fyLhGtEI5DTzSSFzCzNvyKCkWKTaPbTwIRqFMVZrfRm4eG7wUrNNGod_Po8Lzg'
        },
      });

      //name photo url
      const data = await response.json();
      const petInfo = data.animals
      console.log(data.animals)
      const array: React.ReactElement[] = []

      for (const elem of petInfo) {
        const { name, photos, url } = elem;

        array.push(
          <a href={url} target='_blank' className='flex-col'>
            <img
              key={name}
              className='mx-auto block h-24 rounded-full hover:bg-sky-700'
              src={photos[0].small}
              alt={name}
            ></img>
            <p>{name}</p>
          </a>
        );
      }
      setpetBubble(array)
      return;
    };

    GetPet();
  }, []);

  return (
    <div>
      <p>Welcome User</p>
      <p>Pets based on your preference</p>
      <div className='flex justify-center items-center min-h-screen w-full'>
        <div className='bg-red-50 p-8 rounded-lg w-full max-w-md mshadow-lg flex flex-col items-center'>
          {petBubble}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

import GitHubProfiles from '../components/GitHubProfiles.tsx';

const AboutMe = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'><br></br><br></br>
      <h1 className='text-5xl font-serif text-black flex items-center mb-4'>About Our Team</h1><br></br><br></br>
      <p className='font-serif text-lg text-center text-large max-w-2xl mb-4'>
      A group of passionate developers set out to create an app that helps shelter 
      animals find loving homes! 
       We started by researching the challenges faced by 
      shelters and adopters, realizing there was a real need for a user-friendly platform 
      to connect them. Collaborating closely with shelters, we gathered data on available pets
       and designed features that let users filter by breed, size, and age. Our goal is to make 
        the adoption process easier and more enjoyable, with your help we can achieve this! <br></br>
        <br></br> <br></br><br></br><br></br>
         <a href="https://www.gofundme.com/f/support-our-mission-to-find-homes-for-pets/widget/large?sharesheet=fundraiser sidebar&attribution_id=sl:4630f7af-91de-456a-9c0a-308f2c3c642d" target="_blank" className="inline-block bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-teal-500 transition duration-300">
  GoFundMe
</a>
       
         {/*donate now  and I’m proud to say that our app has already
        made a positive impact by increasing the visibility of shelter animals and facilitating many 
        successful adoptions. */}

        </p>
    <GitHubProfiles />
    </div>
        );
      };
    
export default AboutMe;
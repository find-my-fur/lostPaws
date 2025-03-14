const AboutMe = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-serif text-black flex items-center mb-4'>About Our Team</h1><br></br>
      <p className='text-lg text-center text-xs max-w-2xl mb-4'>
      A group of passionate developers set out to create an app that helps shelter 
      animals find loving homes! 
      <p className='text-lg text-center text-xs max-w-2xl mb-5'>
       We started by researching the challenges faced by 
      shelters and adopters, realizing there was a real need for a user-friendly platform 
      to connect them. Collaborating closely with shelters, we gathered data on available pets
       and designed features that let users filter by breed, size, and age. Our goal is to make 
        the adoption process easier and more enjoyable, with your help we can achieve this.. {/*donate now  and I’m proud to say that our app has already
        made a positive impact by increasing the visibility of shelter animals and facilitating many 
        successful adoptions. */}

        </p>
      </p>
    </div>
    
  );
};

export default AboutMe;
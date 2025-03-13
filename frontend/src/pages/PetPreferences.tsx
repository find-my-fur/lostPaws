import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetPreferences = () => {
  const navigate = useNavigate();

  const input: string[] = ['Breed', 'Age', 'Size', 'Gender'];
  const inputElement: React.ReactElement[] = [];

  for (const elem of input) {
    inputElement.push(
      <div className='mb-4'>
        <label
          key={elem}
          className='block text-sm font-medium text-gray-600 mb-2'
          htmlFor={elem}
        >
          Enter {elem}{' '}
        </label>
        <input
          id={elem}
          name={elem}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder={`Enter your ${elem}`}
        />
      </div>
    );
  }

  const submitSurvey = async (formData): void => {
    interface Values {
      Breed: string;
      Age: string;
      Size: string;
      Gender: string;
    }

    const body: Values = {};

    for (const elem of input) {
      body[elem] = formData.get(elem);
    }

    await fetch('/api/PostPreferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    navigate('/home');

    return;
  };

  return (
    <div className='flex justify-center items-center min-h-screen w-full'>
      <div className='bg-white p-8 rounded-lg w-full max-w-md mshadow-lg flex flex-col items-center'>
        <div id='surveycontainer'>
          <form
            action={submitSurvey}
            className='bg-white p-6 rounded-lg shadow-lg w-96 space-y-4 flex flex-col items-center'
          >
            {inputElement}
            <button
              type='submit'
              className='w-full bg-gray-400 text-blue-900 py-2 rounded-md hover:bg-orange-400 transition duration-300'
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PetPreferences;

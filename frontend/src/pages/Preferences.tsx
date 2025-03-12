import React from 'react';

const Preferences = () => {
  const input: string[] = ['Name', 'Address', 'State', 'City', 'Zip', 'Phone'];
  const inputElement: React.ReactElement[] = [];

  for (const elem of input) {
    inputElement.push(
      <label key={elem}>
        Enter {elem} <input name={elem} />
      </label>
    );
  }

  const submitSurvey = (formData): void => {
    interface Values {
      Name: string;
      Address: string;
      State: string;
      City: string;
      Zip: number;
      Phone: number;
    }

    const body: Values = {

    }


    for (const elem of input) {
      body[elem] = formData.get(elem);
    }

    fetch('/api/PostPreferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    return;
  };

  return (
    <div id='surveycontainer'>
      <form action={submitSurvey}>
        {inputElement}
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Preferences;

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
    // for (const elem of input) {
      
    // }

    fetch('');

    const query: string = formData.get('query');
    console.log(query)
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

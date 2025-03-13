
const GitHubProfiles = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-10 p-4 bg-gray-100">
        <h2 className="text-3xl font-serif mb-4">GitHub Profiles</h2>
        <div className="flex flex-wrap justify-center">
          <a 
            href="https://github.com/SierraRiv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="m-2 p-4 bg-teal-500 text-white rounded hover:bg-pink-300 hover:text-white transition duration-300"
          >
            Sierra Rivera
          </a>
          {/* Add more GitHub profiles here */}
          <a 
            href="https://github.com/JO901" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="m-2 p-4 bg-teal-500 text-white rounded hover:bg-white hover:text-teal-500 transition duration-300"
          >
            Jayson Sanon
          </a>
          <a 
            href="https://github.com/Jandrew2055" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="m-2 p-4 bg-teal-500 text-white rounded hover:bg-white hover:text-teal-500 transition duration-300"
          >
            Jose Anderew
    </a>
    <a 
            href="https://github.com/Kadeem929" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="m-2 p-4 bg-teal-500 text-white rounded hover:bg-white hover:text-teal-500 transition duration-300"
          >
           Kadeem Reid
          </a>
    </div>
    </div>
 );
    };

        
          {/* <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="m-2 p-4 bg-teal-500 text-white rounded hover:bg-teal-700 transition duration-300"
          >
            Fourth Profile */}

export default GitHubProfiles;
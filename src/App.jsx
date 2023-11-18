import { useEffect, useState } from 'react';
import _ from 'lodash';
import Slide from './Slide';

function App() {
  const [display, setDisplay] = useState(['1.png', '2.png', '3.png']);
  const [images, setImages] = useState([
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
  ]);

  const handleChange = () => {
    const intervalId = setInterval(() => {
      const newArray = _.sampleSize(images, 3);
      setDisplay(newArray);
    }, 10);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleChange();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-black h-screen">
      <div className="bg-black w-1/2 mx-auto">
        <div className="bg-black">
          <div className="grid grid-flow-col grid-cols-3 gap-3">
            {
              [0,1,2].map((item, __)=> <Slide
                key={__}
                display={display}
              />)
            }
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

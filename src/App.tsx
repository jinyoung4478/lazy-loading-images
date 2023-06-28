import styled, { keyframes } from 'styled-components';
import './App.css';
import { useState } from 'react';

const baseUrl = 'https://jinyoung4478.github.io/lazy-loading-images';

function genSmallImgPath(img: string) {
  return `${baseUrl}/imgs/${img}-small.jpg`;
}

const pulse = keyframes`
0% {
  background-color: rgba(255, 255, 255, 0);
}
50% {
  background-color: rgba(255, 255, 255, 0.1);
}
100% {
  background-color: rgba(255, 255, 255, 0);
}
`;

const BlurLoad = styled.div<{ imgPath: string }>`
  background-image: url(${({ imgPath }) => `${genSmallImgPath(imgPath)}`});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    animation: ${pulse} 2s infinite;
  }

  &.loaded {
    > img {
      opacity: 1;
    }

    &::before {
      content: none;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: block;
  object-position: center;
  object-fit: cover;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
`;

const imgList = [
  'img1',
  'img2',
  'img3',
  'img4',
  'img5',
  'img6',
  'img7',
  'img8',
  'img9',
  'img10',
  'img11',
  'img12',
  'img13',
  'img14',
  'img15',
  'img16',
];

function App() {
  const [loaded, setLoaded] = useState<boolean[]>(
    Array(imgList.length).fill(false),
  );

  const handleImageLoad = (index: number) => {
    setLoaded((prevLoaded) => {
      const newLoaded = [...prevLoaded];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <body>
      <div className="grid">
        {imgList.map((item, index) => (
          <BlurLoad
            key={index}
            imgPath={item}
            className={`blur-load ${loaded[index] ? 'loaded' : ''}`}
          >
            <Img
              id={item}
              src={`${baseUrl}/imgs/${item}.jpg`}
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
            />
          </BlurLoad>
        ))}
      </div>
    </body>
  );
}

export default App;

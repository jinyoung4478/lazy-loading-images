import styled from 'styled-components';
import LazyImage from './components/LazyImage';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const imgData = [
  {
    imgFull: '/imgs/img1.jpg',
    imgSmall: '/imgs/img1-small.jpg',
  },
  {
    imgFull: '/imgs/img2.jpg',
    imgSmall: '/imgs/img2-small.jpg',
  },
];

function App() {
  return (
    <body>
      <Grid>
        {/* {imgList.map((item, index) => (
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
        ))} */}
        {imgData.map(({imgFull, imgSmall}, index) => (
          <LazyImage key={index} imgFull={imgFull} imgSmall={imgSmall} />
        ))}
      </Grid>
    </body>
  );
}

export default App;

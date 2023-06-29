import styled from "styled-components";
import LazyImage from "@/components/LazyImage";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const imgData = [
  {
    imgFull: "/imgs/img1.jpg",
    imgSmall: "/imgs/img1-small.jpg",
  },
  {
    imgFull: "/imgs/img2.jpg",
    imgSmall: "/imgs/img2-small.jpg",
  },
  {
    imgFull: "/imgs/img3.jpg",
    imgSmall: "/imgs/img3-small.jpg",
  },
  {
    imgFull: "/imgs/img4.jpg",
    imgSmall: "/imgs/img4-small.jpg",
  },
  {
    imgFull: "/imgs/img5.jpg",
    imgSmall: "/imgs/img5-small.jpg",
  },
  {
    imgFull: "/imgs/img6.jpg",
    imgSmall: "/imgs/img6-small.jpg",
  },
  {
    imgFull: "/imgs/img7.jpg",
    imgSmall: "/imgs/img7-small.jpg",
  },
  {
    imgFull: "/imgs/img8.jpg",
    imgSmall: "/imgs/img8-small.jpg",
  },
  {
    imgFull: "/imgs/img9.jpg",
    imgSmall: "/imgs/img9-small.jpg",
  },
  {
    imgFull: "/imgs/img10.jpg",
    imgSmall: "/imgs/img10-small.jpg",
  },
  {
    imgFull: "/imgs/img11.jpg",
    imgSmall: "/imgs/img11-small.jpg",
  },
  {
    imgFull: "/imgs/img12.jpg",
    imgSmall: "/imgs/img12-small.jpg",
  },
  {
    imgFull: "/imgs/img13.jpg",
    imgSmall: "/imgs/img13-small.jpg",
  },
  {
    imgFull: "/imgs/img14.jpg",
    imgSmall: "/imgs/img14-small.jpg",
  },
  {
    imgFull: "/imgs/img15.jpg",
    imgSmall: "/imgs/img15-small.jpg",
  },
  {
    imgFull: "/imgs/img16.jpg",
    imgSmall: "/imgs/img16-small.jpg",
  },
];

function App() {
  return (
    <Grid>
      {imgData.map(({ imgFull, imgSmall }, index) => (
        <LazyImage key={index} imgFull={imgFull} imgSmall={imgSmall} />
      ))}
    </Grid>
  );
}

export default App;

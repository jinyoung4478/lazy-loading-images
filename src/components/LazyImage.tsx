import {useState} from 'react';
import styled, {keyframes} from 'styled-components';

const baseUrl = 'https://jinyoung4478.github.io/lazy-loading-images';

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

const BlurLoad = styled.div<{imgPath: string}>`
  background-image: url(${({imgPath}) => imgPath});
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

interface ILazyImage {
  imgFull: string;
  imgSmall: string;
}

function LazyImage({imgFull, imgSmall}: ILazyImage) {
  const [loaded, setLoaded] = useState(false);
  function handleImageLoad() {
    setLoaded(true);
  }
  return (
    <BlurLoad
      imgPath={imgSmall}
      className={`blur-load ${loaded ? 'loaded' : ''}`}
    >
      <Img
        src={`${baseUrl}${imgFull}`}
        loading="lazy"
        onLoad={handleImageLoad}
      />
    </BlurLoad>
  );
}

export default LazyImage;

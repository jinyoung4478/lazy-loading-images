# lazy-loading-images

A repository that implements various image lazy loading techniques.

## Demo

[바로가기](https://jinyoung4478.github.io/lazy-loading-images/)

## Installation and Setup

1. Clone the repository: `git clone https://github.com/jinyoung4478/lazy-loading-images.git`
2. Install dependencies: `yarn`
3. Start the development server: `yarn dev`

## Features

- A lazy loading technique using pure React and CSS effects.

## How to generate blurry placeholder images easily?

```bash
ffmpeg -i imageName.jpg -vf scale=20:-1 imageName-small.jpg
```

## Folder Structure

The project structure is organized as follows:

```bash
├── src
│    ├── components
│    ├── App.jsx
│    └── main.jsx
└── public
     └── imgs
```

## Tech Stack

This project utilizes the following technologies:

- React
- styled-components
- gh-pages

## References

- [Advanced Lazy Loading](https://blog.webdevsimplified.com/2023-05/lazy-load-images/)

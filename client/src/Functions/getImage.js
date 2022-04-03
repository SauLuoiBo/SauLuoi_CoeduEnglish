class GetImage {
  getPng(name) {
    return `/images/${name}.png`;
  }
  getJpeg(name) {
    return `/images/${name}.jpeg`;
  }
}

const getImage = new GetImage();

export { getImage };

function ImageShow({ image }) {
  return (
    <div className="col-md-4 mb-4">
      <img className="rounded" src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;

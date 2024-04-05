const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero-button">
          <button className="primary-button">Shop Now</button>
          <button className="secondary-button">Category</button>
        </div>

        <div className="shopping">
          <p>Available on</p>
          <div className="brand-icons">
            <img src="./images/flipkart.png" alt="flipkart logo" />
            <img src="./images/amazon.png" alt="amazon logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
};

export default Hero;

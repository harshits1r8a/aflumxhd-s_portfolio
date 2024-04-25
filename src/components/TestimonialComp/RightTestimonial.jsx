const RightTestimonial = () => {
  const value = 3.5;
  return (
    <div>
      <h1>It was a great experience</h1>
      <span>
        <i
          className={`
          text-[#dacb14]
          ${
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`
          text-[#dacb14]
          ${
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`
          text-[#dacb14]
          ${
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`
          text-[#dacb14]
          ${
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`
          text-[#dacb14]
          ${
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }`}
        ></i>
      </span>
      <p>
        This can be done in a multitude of ways for example if you are producing
        a brochure selling wellington boots then start every paragraph spelling
        out 'buy our wellington boots' or better still 'you have no choice but
        to buy our wellington boots now get out your cheque book and buy them -
        NOW!' Another crafty method is to doctor images in photoshop so that on
        an innocent picture of a tree for example carved into the bark is a
        message along the lines of 'U Luv Wellington boots' You get the idea.
      </p>
    </div>
  );
};

export default RightTestimonial;

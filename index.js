const element = (
  // Write your code here.
  <div className="main-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="card-container">
      <div className="image-container">
        <img
          className="imageElement"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        />
      </div>
      <h1 className="name-heading">Kiran V</h1>
      <p className="description-paragraph">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        classname=""
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

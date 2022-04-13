const StartPage = (props) => {
  return (
      <div className="startpage">
        <div className="startpage-content">
            <h1 className="startpage-header">Quizzical</h1>
            <p className="startpage-description">Take this Challenge! Give answer to 5 random questions. 😉</p>
            <div className="startpage-button-container">
            <button className="startpage-button" onClick={props.onClick}>Start quiz!</button>
            </div>
        </div>
        </div>
    );
  }

export default StartPage;
import { useState } from 'react';

import StartPage from "./components/StartPage"

const App = () => {
  const [quiz, setQuiz] = useState(false);

  const startQuiz = () => {
    setQuiz(true);
  }

  return (
    <div>
      <div className="yellow-blob"></div>
      <div className="blue-blob"></div>
      {!quiz && <StartPage onClick={startQuiz}/>}
    </div>
  );
}

export default App;

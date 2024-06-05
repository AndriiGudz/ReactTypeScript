import Lessons08 from 'lessons/Lessons08/Lessons08';
import './App.css';
import BlinkingText from './components/BlinkingText/BlinkingText';
import Consultation03 from './consultation/Consultation03/Consultation03';
import Homeworks06 from './homeworks/Homeworks06/Homeworks';
import Homeworks07 from './homeworks/Homeworks07/Homeworks07';
import Lessons06 from './lessons/Lessons06/Lessons06';
import Lessons07 from './lessons/Lessons07/Lessons07';
import GlobalStyles from 'styles/GlobalStyles';
import Homeworks08 from 'homeworks/Homeworks08/Homeworks08';

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <BlinkingText /> */}
      {/* <Lessons06 /> */}
      {/* <Lessons07 /> */}
      {/* <Lessons08 /> */}
      {/* <Homeworks06 /> */}
      {/* <Homeworks07 /> */}
      <Homeworks08 />
      {/* <Consultation03 /> */}
    </>
  );
}

export default App;

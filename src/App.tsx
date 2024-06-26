import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';
import Home from 'pages/Home/Home';
import User from 'pages/User/User';
import Clients from 'pages/Clients/Clients';
import About from 'pages/About/About';

// import BlinkingText from './components/BlinkingText/BlinkingText';

// import Consultation03 from './consultation/Consultation03/Consultation03';
// import Homeworks06 from './homeworks/Homeworks06/Homeworks';
// import Homeworks07 from './homeworks/Homeworks07/Homeworks07';
// import Homeworks08 from 'homeworks/Homeworks08/Homeworks08';
// import Homeworks09 from 'homeworks/Homeworks09/Homeworks09';
// import Homeworks11 from 'homeworks/Homeworks11/Homeworks11';
// import Lessons06 from './lessons/Lessons06/Lessons06';
// import Lessons07 from './lessons/Lessons07/Lessons07';
// import Lessons08 from 'lessons/Lessons08/Lessons08';
// import Lessons09 from 'lessons/Lessons09/Lessons09';
// import Lessons10 from 'lessons/Lessons10/Lessons10';
// import Lessons11 from 'lessons/Lessons11/Lessons';
import Layout from 'components/Layout/Layout';
import Amazon from 'pages/Clients/Amazon/Amazon';
import Ebay from 'pages/Clients/Ebay/Ebay';
import Netflix from 'pages/Clients/Netflix/Netflix';
import Lessons13 from 'lessons/Lessons13/Lessons13';
import Weather from 'pages/Weather/Wether';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <BlinkingText /> */}
      {/* <Lessons06 /> */}
      {/* <Lessons07 /> */}
      {/* <Lessons08 /> */}
      {/* <Lessons09 /> */}
      {/* <Lessons10 /> */}
      {/* <Lessons11 /> */}
      {/* <Homeworks06 /> */}
      {/* <Homeworks07 /> */}
      {/* <Homeworks08 /> */}
      {/* <Homeworks09 /> */}
      {/* <Homeworks11 /> */}
      {/* <Consultation03 /> */}
      {/* <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element='Page not found' />
          <Route path='/clients/amazon' element={<Amazon />} />
          <Route path='/clients/ebay' element={<Ebay />} />
          <Route path='/clients/netflix' element={<Netflix />} />
        </Routes>
      </Layout> */}
      {/* <Lessons13 /> */}
      <Weather />
    </BrowserRouter>
  );
}

export default App;

import About from './pages/About';
import Indonesia from './pages/Indonesia';
import {Routes, Route} from 'react-router-dom';
import Provinsi from './pages/Provinsi';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import GlobalStyle from './Global/GlobalLayout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" id="" element={<Home />} />
          <Route path="/indonesia" id="indonesia" element={<Indonesia />} />
          <Route path="/provinsi" id="provinsi" element={<Provinsi />} />
          <Route path="/about" id="about" element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

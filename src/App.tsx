import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { pages } from './utils/pages';

function App() {
  return (
    <>
      <Header />
      <main className='grow'>
        <Routes>
          {Object.values(pages).map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

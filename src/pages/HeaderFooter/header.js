import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './../layout';
import Home from './../home';
import Menu from '../menu';
import Contact from './../contact';
import NoPage from './../nopage';


function MyHeader() {
  return (
    <div className='p-1 mb-1'>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Menu" element={<Menu />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyHeader;
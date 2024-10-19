import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

const App = () => {
  return (
    /*
     * Tarayıcıdaki urle göre ekrana hangi bileşenin basılacağını belirler.
     * React router dom tarayıcıdaki urle window nesnesi ile erişir.
     * BrowserRouter:Routes dışında bütün sayfalar için ortak olanları tanımlarız.
     */
    <BrowserRouter>
      <Header />

      {/* Routes:Projedeki sayfaları tanımladığımız kapsayıcıdır. */}
      <Routes>
        {/*
         * Route:Projedeki her bir sayfa için tanımlanır.
         * path:yol
         * element:Verilen yol için ekrana basılacak olan bileşen verilir.
         */}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />
        {/* Dynamic Route */}
        <Route path="/ürün/:id" element={<DetailPage />} />

        {/* Nested Routes:İç İçe Yollar */}
        <Route path="/ekstra" element={<Layout />}>
          <Route path="kategoriler" element={<h1>Kategoriler</h1>} />
          <Route path="kampanyalar" element={<h1>Kampanyalar</h1>} />
          <Route path="ayarlar" element={<h1>Ayarlar</h1>} />
        </Route>

        {/* Undefined Route:Tanımsız bir routea yönlenirse */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;

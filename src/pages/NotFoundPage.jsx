import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  // navigate ile aktarılan hata mesajına erişiriz.
  const loc = useLocation();
  console.log(loc);
  return (
    <div className="container py-6 d-flex flex-column align-items-center gap-4 my-4">
      {loc.state && <p className="bg-danger p-2 rounded">{loc.state}</p>}

      <img src="/public/book-404.gif" className="img-fluid w-75" alt="" />

      <div>
        <h1>Aradığınız sayfa bulunamadı</h1>

        <p>
          Böyle bir sayfa bulunmuyor.Anasayfa dönüp başka bir şey
          aratabilirsiniz.
        </p>

        <Link className="btn btn-primary" to={"/"}>
          Anasayfaya dön
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

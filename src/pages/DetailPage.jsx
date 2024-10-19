import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookInfo from "../components/BookInfo";

const DetailPage = () => {
  const [book, setBook] = useState(null);
  //* useNavigate fonksiyonu çağırıp yönlendirme görevini yapacak olan fonksiyona erişiriz.
  const navigate = useNavigate();
  //* URL'deki id parametresini aldık.
  //* useParams urle eklenmiş olan pathParamasa erişim sağlar.
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => setBook(res.data))
      /*
       * Ürünün bilgisi apiden gelmediyse
       * kullanıcıyı 404 sayfasına yönlendir.
       * Hata mesajını 404 sayfasına aktar
       */
      .catch((err) => navigate("/undefined", { state: err.message }));
  }, []);

  return (
    <div>
      {/* Kitap verisi gelmediyse yükleniyor bas */}
      {/* {!book && <p>Yükleniyor...</p>} */}
      {/* Kitap içeriği geldiyse içeriği ekrana bas */}
      {/* {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 justify-content-center align-items-center">
            <img
              className="rounded img-fluid shadow"
              src={book.image}
              style={{ maxHeight: "400px" }}
              alt=""
            />
          </div>
          <div className="col-md-6 d-flex flex-column my-3 justify-content-center align-items-center">
            <h1>{book.title}</h1>
            <div className="my-4">
              <BookInfo label="Yazar" value={book.author} />
              <BookInfo label="Açıklama" value={book.description} />
              <BookInfo label="Yıl" value={book.year} />
              <BookInfo label="Sayfa Sayısı" value={book.page} />
            </div>
          </div>
        </div>
      )} */}

      {!book ? (
        <p>Yükleniyor...</p>
      ) : (
        <div className="row my-5 p-5">
          <div className="col-md-6 justify-content-center align-items-center">
            <img
              className="rounded img-fluid shadow"
              src={book.image}
              style={{ maxHeight: "400px" }}
              alt=""
            />
          </div>
          <div className="col-md-6 d-flex flex-column my-3 justify-content-center align-items-center">
            <h1>{book.title}</h1>
            <div className="my-4">
              <BookInfo label="Yazar" value={book.author} />
              <BookInfo label="Açıklama" value={book.description} />
              <BookInfo label="Yıl" value={book.year} />
              <BookInfo label="Sayfa Sayısı" value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;

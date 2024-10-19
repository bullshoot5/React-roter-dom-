import { useEffect, useState } from 'react';
import FilterArea from '../components/FilterArea';
import axios from 'axios';
import Card from '../components/Card';
import { useSearchParams } from 'react-router-dom';

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams] = useSearchParams();
  //* URL'deki arama parametrelerine eriştik.
  const query = searchParams.get('aramaTerimi');
  const order = searchParams.get('sırala');
  console.log(order);

  useEffect(() => {
    //* API'ye gönderilecek olan parametreleri belirle
    const params = {
      _sort: 'title',
      _order: order === 'z-a' ? 'desc' : 'asc',
      q: query,
    };
    //* apiye istek at
    axios
      .get('http://localhost:3000/books', { params })
      //* gelen cevabı books stateine aktar
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [query, order]);

  return (
    <div className="p-5">
      <h3>{books?.length} kitap bulundu</h3>
      <FilterArea />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gap-5 mt-3">
        {books?.map((book) => (
          <div key={book.id} className="col">
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

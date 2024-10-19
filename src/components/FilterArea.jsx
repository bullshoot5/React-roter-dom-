import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  /*
   * useSearchParams:URL'de ki arama parameterelerini yönetmemizi sağlar.
   * Çağrılınca dizi içerisinde iki değer dönderir.
   * 1.URL'de ki arama parametreleri
   * 2.URL'li güncellemeye yarayan method
   */
  const [searchParams, setSearchParams] = useSearchParams();
  //* Form gönderildiğinde çalışır.
  const handleSubmit = (e) => {
    //* Sayfa yenilemeyi engeller.
    e.preventDefault();
    //* Aratılan terimi arama parametresi olarak ekle
    searchParams.set("aramaTerimi", e.target[0].value);
    //* URL'i güncelle
    setSearchParams(searchParams);
  };
  //* Select değiştiğinde çalışır.
  const handleChange = (e) => {
    console.log(e);
    //* Eklenilecek olan parametreyi belirle
    searchParams.set("sırala", e.target.value);
    //* URL'i günceller
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-3 d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3 align-items-center">
        <label htmlFor="">Sırala</label>
        <select
          defaultValue={searchParams.get("sırala")}
          onChange={handleChange}
          className="form-select"
        >
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={searchParams.get("aramaTerimi")}
          className="form-control"
          type="text"
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;

import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column gap-5 p-4">
      <h1 className="text-center">Hoşgeldiniz!</h1>
      <img src="/public/welcome.jpg" alt="" className="w-full rounded-3" />
      <p>
        <Link to={"/ürünler"}>Ürünler sayfasında</Link> yeni çıkan bütün
        kitaplara ulaşabilirsiniz.
      </p>
    </div>
  );
};

export default MainPage;

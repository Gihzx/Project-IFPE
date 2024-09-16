import "./style.css";
import imgSection from "../../assets/relogio-ifpe-removebg-preview.png";
import img2 from "../../assets/Captura_de_tela_2024-09-03_012654-removebg-preview.png";
import img3 from "../../assets/Captura_de_tela_2024-09-04_032853-removebg-preview.png";
import { useEffect, useState } from "react";

function PagePrincipal() {
  const [imagenAtual, setimagenAtual] = useState(imgSection);
  const images = [imgSection, img2, img3];
  useEffect(() => {
    let indexImg = 0;
    const chageImage = () => {
      //funcção de mundaça de imagen
      indexImg = (indexImg + 1) % images.length;
      setimagenAtual(images[indexImg]);
    };
    const intevaloImg = setInterval(chageImage, 3000);

    const time = setTimeout(() => {
      chageImage();
      console.log("funcionou");
    }, 2000);

    return () => {
      clearInterval(intevaloImg);
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      <main className="section-one">
        <div className="text-section-one">
          <div>
            <h1>Lion Eletronics</h1>
            <h2>Um mundo de possibilidade para sua compra</h2>
            <button className="bntComprar">Compre já</button>
          </div>
          <img src={imagenAtual} alt="img" className="avata" />
        </div>
      </main>
      <div className="rowOorage"></div>
      <section></section>
    </>
  );
}
export default PagePrincipal;

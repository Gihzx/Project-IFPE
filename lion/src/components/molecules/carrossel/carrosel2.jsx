import Carousel from 'react-bootstrap/Carousel';
import imgTablete from '../../../assets/portrait-excited-young-woman-with-digital-tablet-sitting-couch-laughing-smiling-winning.jpg';
import imgOutra from '../../../assets/happy-african-woman-using-smartphone-workplace.jpg'

export function Blog() {
  return (
    <section className='Blog'>
      <div className='container'>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={imgOutra} alt="imagem, uma mulher com fone de ovido" className="d-block w-100" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={imgTablete} alt="imagem de uma garota com tablete" className="d-block w-100" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={imgTablete} alt="imagem de uma garota com tablete" className="d-block w-100" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}


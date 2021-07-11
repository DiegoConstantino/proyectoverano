import React from 'react';

function Carousel() {
  return (

    <div>
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/imagenes/12.png" className="d-block mx-auto" alt="..." width="70%" height="50%"/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Bienvenido a Bos Taurus App</h5>
            <p>
              Tu App Ideal Para El Control De Tu Ganado .
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/imagenes/30.jpg" className="d-block mx-auto" alt="..." width="70%" height="50%" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Bos Taurus App Te Ofrece</h5>
            <p>
              Un Manejo Facil y Sencillo Para El Control De Tu Ganado.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/imagenes/50.jpg" className="d-block mx-auto" alt="..." width="70%" height="50%" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Tu Opcion Ideal</h5>
            <p>
              Guarda y Registra Los Datos Para Tu Ganado Sin Problemas.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  )
}

export default Carousel;
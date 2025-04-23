import React from 'react'

const TestDaisy = () => {
  return (
    <div>
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Burger"
          />
        </div>
      </div>
      {/*
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
*/}

      <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
        <svg
          aria-label="Previous"
          className="fill-current size-4"
          slot="previous"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
        </svg>
        <svg
          aria-label="Next"
          className="fill-current size-4"
          slot="next"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
        <calendar-month></calendar-month>
      </calendar-date>
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          content
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
          content
        </div>
      </div>
    </div>
  );
}

export default TestDaisy
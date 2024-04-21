import React from "react";

// Componente para el SVG de "dj"
const DjIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
         className="fill-custom-fill"
         d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
      />
   </svg>
);

// Componente para el SVG de "espadas"
const EspadasIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
         className="fill-custom-fill"
         d="M96 329.4l50.7-50.7 86.6 86.6L182.6 416l20.7 20.7c6.2 6.2 6.2 16.4 0 22.6l-16 16c-4.7 4.7-11.8 6-17.8 3.3l-62-27.5L51.3 507.3c-6.2 6.2-16.4 6.2-22.6 0l-24-24c-6.2-6.2-6.2-16.4 0-22.6l56.2-56.2-27.5-62c-2.7-6.1-1.4-13.1 3.3-17.8l16-16c6.2-6.2 16.4-6.2 22.6 0L96 329.4zM484.5 114.2L365.3 233.4l-86.6-86.6L397.8 27.5c6.7-6.7 15.2-11.3 24.5-13.1L492.9 .3c5.2-1 10.7 .6 14.5 4.4s5.4 9.2 4.4 14.5L497.6 89.6c-1.9 9.3-6.4 17.8-13.1 24.5zM4.7 4.7C8.5 .9 13.9-.7 19.1 .3L89.6 14.4c9.3 1.9 17.8 6.4 24.5 13.1L393.4 306.7l-86.6 86.6L27.5 114.2c-6.7-6.7-11.3-15.2-13.1-24.5L.3 19.1C-.7 13.9 .9 8.5 4.7 4.7zm454.6 304l16 16c4.7 4.7 6 11.8 3.3 17.8l-27.5 62 56.2 56.2c6.2 6.2 6.2 16.4 0 22.6l-24 24c-6.2 6.2-16.4 6.2-22.6 0l-56.2-56.2-62 27.5c-6.1 2.7-13.1 1.4-17.8-3.3l-16-16c-6.2-6.2-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0z"
      />
   </svg>
);

// Componente para el SVG de "meseros"
const MeserosIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
         className="fill-custom-fill"
         d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"
      />
   </svg>
);

// Componente para el SVG de "mobiliario"
const MobiliarioIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path
         className="fill-custom-fill"
         d="M182.6 9.4C176.2 2.9 167.3-.5 158.2 0s-17.5 4.9-23.2 12L93.9 63.5c-13.5 16.9-29 31.9-46.3 44.9L12.8 134.4C4.7 140.4 0 149.9 0 160v32H576V160c0-10.1-4.7-19.6-12.8-25.6l-34.7-26.1c-17.3-12.9-32.8-28-46.3-44.9L441 12C435.3 4.9 426.9 .6 417.8 0s-18 2.9-24.4 9.3L374.6 28.1C351.7 51.1 320.5 64 288 64s-63.7-12.9-86.6-35.9L182.6 9.4zM576 224H0V480c0 17.7 14.3 32 32 32H240l0 0h16c17.7 0 32-14.3 32-32V297.9c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5L407.2 494.3c5.4 10.8 16.5 17.7 28.6 17.7H464l0 0h80c17.7 0 32-14.3 32-32V224z"
      />
   </svg>
);

// Componente para el SVG de "parrillada"
const ParrilladaIcon = () => (
   <svg viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg">
      <path
         className="fill-custom-fill"
         d="M 0,40 C 0,17.9 17.9,0 40,0 h 368 c 22.1,0 40,17.9 40,40 v 24 c 0,89.8 -52.9,167.3 -129.2,203 L 382,414.5 c 5.2,12.2 -0.4,26.3 -12.6,31.5 -12.2,5.2 -26.3,-0.4 -31.5,-12.6 L 316.7,384 H 160 c 0,35.3 -28.7,64 -64,64 -35.3,0 -64,-28.7 -64,-64 0,-35.3 28.7,-64 64,-64 3.4,0 6.8,0.3 10.1,0.8 L 129.2,267 C 52.9,231.3 0,153.8 0,64 Z m 151.8,296 h 144.4 l -22.9,-53.4 c -15.9,3.6 -32.3,5.4 -49.3,5.4 -17,0 -33.4,-1.9 -49.3,-5.4 z M 96,408 a 24,24 0 1 0 0,-48 24,24 0 1 0 0,48 z"
      />
   </svg>
);

// Componente para el SVG de "tacos"
const TacosIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
         className="fill-custom-fill"
         d="M274.8 38.4l44.1 34.2c5.6 4.4 12.6 6.6 19.7 6.4l55.8-1.7c14-.4 26.5 8.6 30.4 22.1l15.6 53.6c2 6.8 6.3 12.8 12.2 16.8L498.6 201c11.6 7.9 16.3 22.5 11.6 35.7l-17.1 47.7C441.1 209.2 354.3 160 256 160s-185.1 49.2-237.1 124.4L1.8 236.7c-4.7-13.1 0-27.8 11.6-35.7l46.1-31.4c5.9-4 10.2-9.9 12.2-16.8L87.3 99.3c3.9-13.4 16.4-22.5 30.4-22.1L173.4 79c7.1 .2 14.1-2 19.7-6.4l44.1-34.2c11-8.6 26.5-8.6 37.5 0zM512 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32C0 306.6 114.6 192 256 192s256 114.6 256 256zM112 416a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"
      />
   </svg>
);

const FacebookIcon = () => (
   <svg
      className="w-7 lg:w-10 h-10 lg:h-10"
      viewBox="0 0 16.814409 16.814449"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
   >
      <defs id="defs1" />
      <g id="layer1" transform="translate(-176.2125,-270.40416)">
         <path
            id="path740"
            className="fill-custom-fill"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="0.0352778"
            d="m 193.02691,278.81121 c 0,4.64326 -3.76396,8.4074 -8.40715,8.4074 -4.6433,0 -8.40726,-3.76414 -8.40726,-8.4074 0,-4.64291 3.76396,-8.40705 8.40726,-8.40705 4.64319,0 8.40715,3.76414 8.40715,8.40705"
         />
         <path
            id="path742"
            fill="#ffffff"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="0.0352778"
            d="m 185.54954,284.16602 v -4.68524 h 1.56228 l 0.29725,-1.93816 h -1.85953 v -1.25765 c 0,-0.53023 0.25961,-1.04705 1.09252,-1.04705 h 0.84554 v -1.65029 c 0,0 -0.7673,-0.13088 -1.50083,-0.13088 -1.53155,0 -2.53255,0.92815 -2.53255,2.60879 v 1.47708 h -1.7024 v 1.93816 h 1.7024 v 4.68524 h 2.09532"
         />
      </g>
   </svg>
);

const PrevArrow = () => (
   <svg
      viewBox="0 0 512 512"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
   >
      <defs id="defs1" />
      <path
         className="fill-gray-50"
         d="m 256,512 a 256,256 0 1 1 0,-512 256,256 0 1 1 0,512 z M 128,256 336,384 V 128 Z"
         id="path1"
      />
   </svg>
);

const NextArrow = () => (
   <svg
      viewBox="0 0 512 512"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
   >
      <defs id="defs1" />
      <path
         className="fill-gray-50"
         d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM384 256L176 384V128L384 256z"
         id="path1"
      />
   </svg>
);

export {
   DjIcon,
   EspadasIcon,
   MeserosIcon,
   MobiliarioIcon,
   ParrilladaIcon,
   TacosIcon,
   FacebookIcon,
   PrevArrow,
   NextArrow,
};

import React from "react";
import './loading.css';
const Loading = () => {
  return (
    <>
      <div class="loading-page" id="loading-page">
        <svg
          class="svg"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="500.000000pt"
          height="303.000000pt"
          viewBox="0 0 500.000000 303.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,303.000000) scale(0.100000,-0.100000)"
            fill="#000000"
          >
            <path
              d="M1932 2629 c-304 -174 -553 -321 -554 -325 0 -4 65 -46 146 -92 l146
-84 406 233 c223 127 408 237 410 243 3 7 3 86 2 177 l-3 165 -553 -317z"
            />
            <path
              d="M2510 2773 l1 -178 366 -210 c201 -115 385 -221 408 -234 l42 -25
139 79 c77 43 145 82 152 88 9 7 -44 42 -190 126 -112 64 -354 204 -538 310
-184 106 -345 199 -357 207 l-23 14 0 -177z"
            />
            <path
              d="M2650 2165 c-112 -65 -146 -81 -155 -71 -8 10 -169 -79 -710 -390
-385 -222 -710 -408 -722 -415 -19 -10 -45 3 -227 106 -113 65 -206 121 -206
125 0 4 159 99 353 210 193 111 356 206 361 210 8 8 -105 78 -239 150 l-60 32
-445 -257 c-245 -141 -478 -276 -517 -299 -40 -22 -73 -43 -73 -46 0 -3 74
-47 164 -98 90 -51 322 -185 516 -297 l352 -203 526 302 c290 166 548 315 575
330 l47 28 0 -397 c0 -314 3 -396 13 -392 6 3 75 41 152 85 102 59 141 77 143
67 2 -8 5 -15 6 -15 2 0 328 187 725 415 398 228 725 415 728 415 12 0 413
-233 413 -240 0 -4 -159 -99 -352 -210 -194 -111 -357 -206 -362 -210 -8 -8
105 -78 239 -150 l60 -32 445 257 c245 141 478 276 517 299 40 22 73 43 73 46
0 3 -74 47 -164 98 -90 51 -322 185 -516 297 l-352 203 -526 -302 c-290 -166
-548 -315 -574 -330 l-48 -28 0 396 c0 218 -3 396 -7 395 -5 0 -73 -38 -153
-84z"
            />
            <path
              d="M1540 839 c-69 -39 -136 -78 -148 -86 -27 -16 -111 36 718 -442 184
            -106 345 -199 358 -207 l22 -14 0 177 -1 178 -192 109 c-106 60 -288 165 -405
            233 -117 68 -216 123 -220 123 -4 0 -63 -32 -132 -71z"
            />
            <path
              d="M2920 677 l-405 -232 -3 -177 -2 -177 555 319 c306 175 556 322 557
            326 0 7 -280 174 -292 174 -3 0 -187 -105 -410 -233z"
            />
          </g>
        </svg>

        <div class="name-container-loader">
          <span style="display: block" class="name-logo" id="name-logo">
            ALEX-AAS-CODE
          </span>
        </div>
      </div>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"
        integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
        async
      ></script> 
      <script src="../js/script.js" async></script>
    </>
  );
};

export default Loading;

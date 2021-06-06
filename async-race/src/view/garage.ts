import { BaseComponent } from '../components/base/base';
import { getAllCars, MAX_CARS_ON_PAGE } from '../controllers/server';
import { getCars } from '../store/store';
import { createCar, deleteCar } from '../controllers/server';
import { selectCar, deleteSelectCar} from '../store/actions/actions'
import './garage.scss';

export class Garage extends BaseComponent {
  private readonly garageView: HTMLDivElement;

  constructor() {
    super('div', ['garageView']);
    this.garageView = document.createElement('div');
    this.element.append(this.garageView);
  }

  getView={
    render: (): string => `
    <div class="garageView">
      <div class="garage__create">
      <input class="form__input form__input_brand" type="text" placeholder="car brand">
      <input class="form__input form__input_color" type="color">
      <div class="page__button">
      </div>
      </div>
      <div class="page__garage garage">
      <p>${this.getCount()}</p>
      ${this.getCreateButton()}
      ${selectCar}
      </div>
      <div class="garage__listCar listCar">
      <p>${this.getCarsImage()}</p>
      </div>
    </div>
      `,
  };

  getCreateButton()  {
    const button = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(button,  (document.getElementById('root') as Element).lastChild);
    button.classList.add('form__button');
    button.innerHTML = `create car`;
    button?.addEventListener('click', this.createNewCar);
    button?.addEventListener('click', this.getCarsImage);
    return button;
  }

  createNewCar = async() => await createCar(
    (document.querySelector('.form__input_brand') as HTMLInputElement).value,
    (document.querySelector('.form__input_color') as HTMLInputElement).value, 5);

  getCount = async () => {
    const cars = await getCars();
    const quantity = cars.length;
    const pageNumber = Math.ceil(quantity / MAX_CARS_ON_PAGE);
    const el = `<div>Garage ${quantity}<div>
    <div>Page ${pageNumber}<div>`;
    document.getElementsByClassName('page__garage')[0].innerHTML = el
  };

  getCarsImage = async () => {
    const cars = await getCars();
    let viewCar = ``
    for (let car of cars){
      viewCar += `<div class="listCar__carTrack">
      <button class="deleteCar">Delete</button>
      <button class="selectCar">Select</button>
      ${car.name}
      <div class="car_img">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="70.000000pt" height="35.000000pt" viewBox="0 0 1280.000000 640.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
fill="${car.color}" stroke="none">
<path d="M4215 6014 c-960 -32 -1665 -127 -2182 -295 -131 -43 -302 -112 -364
-147 -19 -11 -146 -48 -284 -82 -137 -34 -251 -64 -253 -65 -2 -2 18 -35 44
-74 l47 -71 -60 -67 c-424 -480 -830 -1010 -939 -1225 -45 -89 -64 -462 -45
-886 10 -207 10 -266 0 -278 -7 -8 -50 -40 -97 -71 l-85 -55 7 -75 c3 -41 17
-102 30 -136 17 -44 36 -148 65 -352 23 -159 53 -344 66 -410 14 -66 29 -153
35 -194 7 -48 21 -94 41 -131 l30 -57 202 -6 c233 -7 757 -48 1080 -83 l57 -7
0 37 c0 39 9 43 54 26 16 -6 26 -17 26 -29 0 -28 67 -216 102 -285 310 -614
993 -793 1495 -391 73 58 172 166 231 252 12 17 47 45 76 62 30 17 95 64 143
105 48 40 91 70 94 65 3 -5 1056 -5 2530 1 1388 5 2741 10 3007 10 l482 0 0
40 0 40 48 -29 c26 -16 82 -46 124 -66 65 -31 86 -48 126 -99 308 -390 773
-510 1184 -306 150 75 296 202 402 352 46 66 48 67 128 93 106 34 155 60 163
85 8 24 21 26 29 4 18 -47 218 26 395 143 94 62 200 158 232 210 26 42 19 78
-28 140 l-35 45 23 62 c13 33 46 99 74 146 l52 85 11 145 c22 275 25 374 13
412 -13 40 -50 72 -126 111 l-51 25 -2 144 c-4 235 -38 411 -97 500 -36 54
-185 141 -395 231 -530 226 -1441 426 -2505 551 -192 23 -218 28 -305 64 -76
31 -310 178 -1165 728 -588 380 -1092 702 -1120 717 -227 125 -537 236 -742
267 -105 15 -399 38 -708 55 -261 14 -1135 27 -1360 19z m920 -134 c411 -15
678 -36 933 -75 102 -15 141 -31 52 -21 -262 30 -1085 44 -1555 27 -303 -11
-859 -42 -1065 -60 -52 -4 -98 -6 -102 -4 -5 2 -8 24 -8 47 l0 44 43 6 c265
36 1164 56 1702 36z m-1995 -90 c0 -10 -5 -30 -11 -44 -13 -28 7 -25 -319 -56
-113 -11 -222 -23 -242 -26 -136 -21 132 65 311 101 257 51 261 51 261 25z
m2100 -265 c0 -15 79 -859 120 -1280 10 -110 18 -200 17 -201 -5 -4 -1629 25
-1633 29 -19 19 -106 661 -149 1097 -14 140 -27 271 -29 291 l-4 37 52 6 c43
5 347 18 666 29 41 2 274 4 518 5 389 2 442 0 442 -13z m1130 -5 c41 -5 127
-20 190 -32 l115 -22 -105 -12 c-58 -7 -134 -19 -170 -27 -299 -71 -537 -220
-491 -306 13 -23 81 -51 125 -51 18 0 35 -2 38 -5 3 -3 -5 -32 -18 -65 -14
-32 -29 -94 -35 -137 -22 -153 33 -332 136 -450 l45 -52 -66 -166 c-37 -92
-70 -163 -74 -158 -4 4 -100 337 -214 738 -114 402 -210 739 -213 749 -5 19 3
19 328 12 184 -3 368 -11 409 -16z m-2920 -44 c0 -27 51 -523 71 -691 26 -221
66 -509 84 -609 8 -43 15 -84 15 -92 0 -11 -35 -14 -193 -14 -107 0 -256 3
-331 7 l-137 6 6 31 c17 84 120 490 160 630 66 230 185 591 240 729 9 22 85
25 85 3z m-521 -78 c-104 -261 -254 -706 -364 -1078 -36 -124 -69 -228 -73
-231 -7 -6 -1624 10 -1631 16 -1 2 20 73 48 157 49 144 57 160 143 283 125
179 262 347 350 430 117 111 359 245 567 314 94 32 362 84 596 116 242 33 321
43 352 44 l33 1 -21 -52z m4008 -19 c132 -52 498 -272 878 -527 272 -184 314
-214 315 -227 0 -6 -20 -16 -45 -23 -35 -9 -48 -19 -56 -40 -16 -41 -22 -216
-11 -317 9 -85 8 -92 -13 -130 -13 -23 -32 -51 -42 -64 l-19 -23 -249 57
c-138 31 -378 85 -535 121 -157 35 -289 66 -294 67 -5 2 12 16 38 31 27 16 74
55 106 87 l58 59 306 0 306 0 0 35 0 35 -286 0 c-269 0 -286 1 -279 18 44 99
50 129 50 252 0 145 -14 201 -72 298 -48 79 -121 154 -196 199 -48 31 -56 39
-50 57 4 12 7 31 6 44 0 12 1 22 3 22 2 0 38 -14 81 -31z m-594 -1107 c99 -49
211 -68 312 -53 44 6 92 14 108 17 21 5 26 3 22 -8 -5 -11 78 -33 407 -107
556 -125 539 -119 343 -114 -237 5 -1250 23 -1322 23 l-61 0 56 140 c31 77 58
139 61 138 3 -2 36 -18 74 -36z"/>
</g>
</svg>
      </div>
      <div>`
    }
    document.getElementsByClassName('garage__listCar')[0].innerHTML = viewCar
  };
}
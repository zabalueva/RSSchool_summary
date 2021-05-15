/* На странице About Game должна быть представлена краткая инструкция по началу игры */
import { Page } from '../models/page';

export const about: HTMLDivElement = document.createElement('div');
document.body.appendChild(about);
about.innerHTML = '<div>Instruction</div> ';
/* {
  render: `<section>
        <p>About game</p>
      </section> `,
}; */

/* export class About {

} */

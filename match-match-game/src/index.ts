import { title } from './components/header/header';
import { about } from './pages/about';

const content = about.render;
document.append(content);
console.log(title);

/* export interface Args {
  name: string;
  arr: string[];
}
 function
   handle({ name, arr }: Args) : { name, arr }: Args | null {
return null
} */

/* console.log('Hello world'); */
/* export type Fruit = 'Orange';
const newJ: string = function grut(r: Fruit) : string {
  return Array.from(r).reverse().toString();
}; */

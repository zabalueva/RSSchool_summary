/* На странице Settings должны находится настройки
приложения. Допускаются любые настройки, но две базовые нельзя игнорировать:

Настройка сложности игры (4х4, 6х6, 8х8)
Настройка типов карточек для сравнений (можно использовать любые типы. Пример: Животные, автомобили и т.п.)
 */
import { BaseComponent } from '../components/base/base';

const BASE_COMPLEXITY = 16;

export class Settings extends BaseComponent {
  private readonly settings: HTMLDivElement;

  private complexity: number = BASE_COMPLEXITY;

  constructor() {
    super('div', ['settings']);
    this.settings = document.createElement('div');
    this.element.append(this.settings);
  }

  getView = {
    render: () => `
    <div>Settings for game </div>
      `,
  };
  /* getComplexity() {
    return this.complexity;
  } */
}

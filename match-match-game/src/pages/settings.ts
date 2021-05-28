/* На странице Settings должны находится настройки
приложения. Допускаются любые настройки, но две базовые нельзя игнорировать:

Настройка сложности игры (4х4, 6х6, 8х8)
Настройка типов карточек для сравнений (можно использовать любые типы. Пример: Животные, автомобили и т.п.)
 */
import { BaseComponent } from '../components/base/base';

const BASE_DIFFICULTY = 16;
const BASE_CATEGORY = 'animal';
export class Settings extends BaseComponent {
  private readonly settings: HTMLDivElement;

  constructor() {
    super('div', ['settings']);
    this.settings=document.createElement('div');
    this.element.append(this.settings);
  }

  getView = {
    render: () => `
    <div class="settings">Settings for game
    <p> Choose difficulty</p>
    <select name="difficulty" class="settings__difficulty">
        <option value="16" selected>16</option>
        <option value="36">36</option>
    </select>
    <p> Choose image category</p>
    <select name="category" class="settings__category">
        <option value="animal" selected>animal</option>
        <option value="nature">nature</option>
    </select>

    <button class="settings__button btn" onclick="${this.destroy()}"}>OK</button>
    </div>
      `,

  };

  getDifficulty(): number {
    const selectDifficulty = document.querySelector('.settings__difficulty') as HTMLSelectElement;
    return +selectDifficulty?.value || BASE_DIFFICULTY;
  }

  getCategory(): string {
    const selectCategory = document.querySelector('.settings__category') as HTMLSelectElement;
    return selectCategory?.value||BASE_CATEGORY;
  }

  destroy() {
    console.log(this.settings);
    this.settings.innerHTML='';
    this.element.classList.add('settings_hidden');
  }
}

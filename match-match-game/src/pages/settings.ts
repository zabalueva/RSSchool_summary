import { BaseComponent } from '../components/base/base';

const BASE_DIFFICULTY = 16;
const BASE_CATEGORY = 'animal';
export class Settings extends BaseComponent {
  private readonly settings: HTMLDivElement;

  private difficulty: number;

  private category: string;

  constructor() {
    super('div', ['settings']);
    this.settings = document.createElement('div');
    this.element.append(this.settings);
    this.difficulty = BASE_DIFFICULTY;
    this.category = BASE_CATEGORY;
  }

  getView = {
    render: ():string => `
    <div class="settings">
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
    <button class="settings__button btn"}>OK</button>
    </div>
      `,
  };

  getDifficulty(): number {
    const selectDifficulty = document.querySelector('.settings__difficulty') as HTMLSelectElement;
    this.difficulty = +selectDifficulty?.value;
    return +selectDifficulty?.value || BASE_DIFFICULTY;
  }

  getCategory(): string {
    const selectCategory = document.querySelector('.settings__category') as HTMLSelectElement;
    this.category = selectCategory?.value;
    return selectCategory?.value || BASE_CATEGORY;
  }

  destroy():void {
    document.querySelector('.settings')?.classList.add('settings_hidden');
    this.difficulty = BASE_DIFFICULTY;
    this.category = BASE_CATEGORY;
  }
}

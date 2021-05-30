import { User } from '../../models/user';

export const displayUsers = (usersTop: User[]):void => {
  let listHTML = '<ul>';

  for (let i = 0; i < usersTop.length; i++) {
    const userInTop = usersTop[i];
    const tempScoreArray = [];
    tempScoreArray.push(userInTop.score);
    tempScoreArray.sort((a, b) => b - a);
    tempScoreArray.slice(0, 9);
    listHTML += `<li>${userInTop.name} - ${userInTop.score}</li>`;
  }
  const bestScore = document.querySelector('.bestScore');

  if (bestScore) {
    bestScore.innerHTML = listHTML;
  }
};

export class DataBase {
  public db!: IDBDatabase;

  public topUsers: User[] = [];

  reverseOrder = false;

  constructor() {
    this.openInitDB();
  }

  openInitDB(): void {
    const dbRequest: IDBOpenDBRequest = indexedDB.open('zabalueva', 1);

    if (!window.indexedDB) {
      throw new Error("Your browser doesn't support a stable version of IndexedDB.");
    }

    dbRequest.onupgradeneeded = (event) => {
      const eventElement = event.target as IDBOpenDBRequest;
      this.db = eventElement?.result;
      if (!this.db.objectStoreNames.contains('users')) {
        const users = this.db.createObjectStore('users', { keyPath: 'email' });

        users.createIndex('score', 'score', { unique: false });
      }
    };

    dbRequest.onsuccess = (event) => {
      const eventElement = event.target as IDBOpenDBRequest;
      this.db = eventElement?.result;
    };

    dbRequest.onerror = () => {
      throw new Error(`error opening database ${dbRequest.error}`);
    };

    dbRequest.onblocked = () => {
      throw new Error('another connection');
    };
  }

  async addUser(nameInput: string, surnameInput: string, emailInput: string, scoring = 0): Promise<void> {
    const user = {
      name: nameInput,
      surname: surnameInput,
      email: emailInput,
      score: scoring,
    };

    const transaction = await this.db.transaction(['users'], 'readwrite');
    const store = transaction.objectStore('users');
    store.add(user);

    transaction.oncomplete = () => {
      this.getBestPlayers();
    };

    transaction.onerror = (event) => {
      throw new Error(`error ${event}`);
    };
  }

  async getBestPlayers(): Promise<void> {
    const tx = await this.db.transaction(['users'], 'readonly');
    const store = tx.objectStore('users');
    const index = store.index('score');
    const req = index.openCursor();
    const allUsers: User[] = [];
    req.onsuccess = (event) => {
      const eventElement = event.target as IDBOpenDBRequest;
      const cursor = eventElement?.result as unknown as IDBCursorWithValue;
      if (cursor != null) {
        allUsers.push(cursor.value);
        cursor.continue();
      } else {
        displayUsers(allUsers);
      }
    };
    req.onerror = () => {
      throw new Error(`error in cursor request ${req.error}`);
    };
  }
}

export class DataBase {
  public db!: IDBDatabase;

  constructor() {
    this.openInitDB();
  }

  openInitDB() {
    const dbRequest: IDBOpenDBRequest = indexedDB.open('zabalueva', 1);

    if (!window.indexedDB) {
      window.alert("Your browser doesn't support a stable version of IndexedDB.");
    }

    dbRequest.onupgradeneeded = (event) => {
      console.log('running onupgradeneeded');
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

    dbRequest.onerror = (event) => {
      console.error(`error opening database ${dbRequest.error}`);
    };

    dbRequest.onblocked = (event) => {
      console.error('another connection');
    };
  }

  async addUser(nameI: string, surnameI: string, emailI: string) {
    const user = {
      name: nameI,
      surname: surnameI,
      email: emailI,
    };

    const transaction = await this.db.transaction(['users'], 'readwrite');
    const store = transaction.objectStore('users');
    store.add(user);

    transaction.oncomplete = () => {
      console.log('sucess');
    };

    transaction.onerror = (event) => {
      console.log('error');
    };
  }

  /* async getBestPlayers() {
    return new Promise((resolve) => {
      if (!this.db) {
        throw new Error('database\'s not exist yet');
      } else {
        const transaction = await this.db.transaction(['users'], 'readwrite');
        const store = transaction.objectStore('users');
        const data = await store.index('score').

        request.onsuccess() {
          document.querySelector('.bestScore')?.classList.add('.best__score_show');
        };

        request.onerror = function (event) {
          alert('Unable to add data\r\nPrasad is already exist in your database! ');
        };

      }
    });
  } */

  /* async getBestPlayers() {
    const tx = this.db.transaction(['users'], 'readonly');
    const store = tx.objectStore('users');
    // Создать запрос курсора
    const req = store.openCursor();
    const allUsers = [];
    req.onsuccess = (event) => {
      // Результатом req.onsuccess в запросах openCursor является
      // IDBCursor
      const eventElement = event.target as IDBOpenDBRequest;
      const cursor = eventElement?.result as unknown as IDBCursorWithValue;
      if (cursor != null) {
        // Если курсор не нулевой, мы получили элемент.
        allUsers.push(cursor.value);
        cursor.continue();
      } else {
        // Если у нас нулевой курсор, это означает, что мы получили
        // все данные, поэтому отображаем заметки, которые мы получили.
        this.displayUsers(allUsers);
      }
    };
    req.onerror = (event) => {
      const eventElement = event.target as IDBOpenDBRequest;
      alert(`error in cursor request ${eventElement?.errorCode}`);
    };
  } */

  /* displayUsers(usersTop):void {
    let listHTML = '<ul>';
    for (let i = 0; i < usersTop.length; i++) {
      const userInTop = usersTop[i];
      listHTML += `<li>${userInTop.text}</li>`;
    }
    document.querySelector('.bestScore')?.innerHTML = listHTML;
  } */
}

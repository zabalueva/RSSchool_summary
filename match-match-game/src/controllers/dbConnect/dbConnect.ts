import { User } from '../../models/user';

export class DataBase {
  public db!: IDBDatabase;

  constuctor() {
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

  /* const transaction = this.db.transaction('users', 'readwrite');

  const users = this.transaction.objectStore('users'); */

  addUser(nameI: string, surnameI: string, emailI: string) {
    const user = {
      name: 'kd',
      surname: 'dk',
      email: 'djdjjfd',
    };
    console.log('yuy');

    const transaction = this.db.transaction(['shows'], 'readwrite');
    const store = transaction.objectStore('shows');
    const request = store.add(user);

    /* const request = this.db.transaction('users', 'readwrite')
      .objectStore('users')
      .add({
        name: nameI, surname: surnameI, email: emailI,
      }); */

    request.onsuccess = function (event) {
      alert('Prasad has been added to your database.');
    };

    request.onerror = function (event) {
      alert('Unable to add data\r\nPrasad is already exist in your database! ');
    };
  }
}

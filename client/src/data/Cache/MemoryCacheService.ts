import { openDB, IDBPDatabase } from 'idb';


export class MemoryCacheService {
  private dbName = 'User';
  private storeName = 'CacheStore';
  private dbPromise: Promise<IDBPDatabase>;

  constructor() {
    this.dbPromise = this.initDB();
  }

  private async initDB(): Promise<IDBPDatabase> {
    return openDB(this.dbName, 1, {
      upgrade(db) {
        db.createObjectStore('CacheStore');
      }
    });
  }

  // Зберігаємо дані в IndexedDB
  public async setItem(key: string, value: any): Promise<void> {
    const db = await this.dbPromise;
    await db.put(this.storeName, value, key);
  }

  // Отримуємо дані з IndexedDB
  public async getItem(key: string): Promise<any> {
    const db = await this.dbPromise;
    return await db.get(this.storeName, key);
  }

  // Очищаємо елемент з IndexedDB
  public async clearItem(key: string): Promise<void> {
    const db = await this.dbPromise;
    await db.delete(this.storeName, key);
  }

  // Перевіряємо наявність елемента в кеші
  public async hasItem(key: string): Promise<boolean> {
    const item = await this.getItem(key);
    return item !== undefined;
  }
}

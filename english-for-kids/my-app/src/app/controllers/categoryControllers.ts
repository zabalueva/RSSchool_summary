import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }


public SERVER = 'http://localhost:3000';


public getAllCategories = async () => {
  const allCategoriesServer = await this.http.get(`${this.SERVER}/categories`);
  console.log(allCategoriesServer.subscribe((data) => console.log('dkfj', data)));
  return allCategoriesServer;
};


public configUrl = 'assets/config.json';

public getConfig = async () => {
  return this.http.get(this.configUrl);
}
}
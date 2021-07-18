import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }


public SERVER = 'http://localhost:3000';


public getAllCategories = () => {
  const allCategoriesServer = this.http.get(`${this.SERVER}/categories`);
  return allCategoriesServer;
};


public configUrl = 'assets/config.json';

public getConfig = async () => {
  return this.http.get(this.configUrl);
}
}
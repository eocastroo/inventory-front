import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  /**
   * get all categories
   * 
   */
  getCategories(){
    const endpoint = `${base_url}/categories`;
    return this.http.get(endpoint);
  /**
   * save all categories 
   */
  }
  saveCategories(body:any){
    const endpoint = `${base_url}/categories`;
    return this.http.post(endpoint, body);

  }
  /**
   * upodate category by id
   */

  uddateCategorie(body: any, id: any){
   const endpoint = `${base_url}/categories/${id}`;
    return this.http.put(endpoint, body);

  }
  /**
   * delete category by id
   */
  deleteCategories(id:any){
    const enpoint = `${base_url}/categories/${id}`;
    return this.http.delete(enpoint);
  }
  /**
   * 
   * searh category
   */
  getCategoryById(id: any){
    const endpoint = `${base_url}/categories/${id}`;
    return this.http.get(endpoint);
 }
}
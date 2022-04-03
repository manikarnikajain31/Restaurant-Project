import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RestaurantData } from '../restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  updateRestaurant(restaurantModelObj: RestaurantData, id: number) {
    throw new Error('Method not implemented.');
  } 

  constructor(private _http:HttpClient) { }
  //Defining POST, GET, PUT, DELETE
  //Create Restaurant using Post method
  postRestaurant(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //Using Get method
  getRestaurant(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }
  //Using Delete method
  deleteRestaurant(id:number){
    return this._http.delete<any>("http://localhost:3000/posts"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}

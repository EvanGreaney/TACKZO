import { Injectable } from '@angular/core';
import { Food } from './food';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class FoodService {
    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(private http: HttpClient) { }

    addFood(food: Food): Observable<any> {
        return this.http.post<Food>('http://localhost:4000/api/food/create', food, this.httpOptions)
        .pipe(
          catchError(this.handleError<Food>('Add Food item'))
        ); 
      }
      
      getFood(id):Observable<Food>{
        return this.http.get<Food>('http://localhost:4000/api/food'+ id)
        .pipe(
          tap(_ => console.log(`food item found: ${id}`)),
          catchError(this.handleError<Food>('got food item'))
        );
      }
      
      getFoodList(): Observable<Food> {
        return this.http.get<Food>('http://localhost:4000/api/food')
         .pipe(
          tap(food => console.log('All Food items fetched!')),
          catchError(this.handleError<Food>('Got all food items'))
        );
      }
    
      updateFood(id, food: Food) : Observable<any> {
        return this.http.put('http://localhost:4000/api/update-food/' + id, food, this.httpOptions)
          .pipe(
            tap(_ => console.log(`Food updated: ${id}`)),
            catchError(this.handleError<Food>('Update food item'))
          );
      }
    
      deleteFood(id): Observable<Food> {
        return this.http.delete<Food>('http://localhost:4000/api/delete-food/' + id, this.httpOptions)
          .pipe(
            tap(_ => console.log(`Food deleted: ${id}`)),
            catchError(this.handleError<Food>('Delete Food'))
          );
      }
    
      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
      }
}
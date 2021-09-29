import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class MovieService {

  url='/api';
  constructor(private http: HttpClient) { }


  //get Movies
  getMovies()
  {
    console.log(this.url)
    return this.http.get(this.url);
  }


  //get movie
  getMovie(mov_id:string){

    return this.http.get(this.url+'/'+mov_id);
  }


  //add movie
  addMovie(movie:Movie)
  {
    return this.http.post(this.url, movie);
  }


  //delete movie
  deleteMovie(mov_id:string){
    return this.http.delete(this.url+'/'+mov_id);
  }

  //edit movie
  editMovie(mov_id:string, movie:Movie){
    return this.http.put(this.url+'/'+mov_id, movie);
  }

}


export interface Movie{
  mov_id:string;
  mov_title?:string;
  mov_year?:string;
  mov_time?:string;
  mov_lang?:string;
  mov_dt_rel?:string;
  mov_rel_country?:string;
}
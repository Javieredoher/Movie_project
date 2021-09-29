import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../../SERVICES/movie.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //var
  ListMovie: any=[]


  constructor(private MovieService: MovieService, private router:Router) { }

  ngOnInit(): void {
    this.listMovie();
    console.table(this.ListMovie)
  }

  listMovie()
  {
    this.MovieService.getMovies().subscribe(
      res=>{
        
        console.log(res);
        this.ListMovie=<any>res;
      },
      err => console.log(err)
    );
  }

  delete(mov_id:string)
  {
    this.MovieService.deleteMovie(mov_id).subscribe(
      res=>{
        console.log('Película eliminada');
        this.listMovie();
      },
      err=> console.log(err)
      );
  }

  modify(mov_id:string){
    this.router.navigate(['/edit/'+mov_id]);
  }

}

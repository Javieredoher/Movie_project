import { Component, OnInit } from '@angular/core';
import {Movie, MovieService } from '../../SERVICES/movie.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})



export class ModifyComponent implements OnInit {

  movie: Movie={
    mov_id:'', 
    mov_title: '', 
    mov_year: '', 
    mov_time: '', 
    mov_lang: '', 
    mov_dt_rel: '', 
    mov_rel_country: '',
  }
  constructor(private MovieService: MovieService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrance = <string>this.activeRoute.snapshot.params.mov_id;
    console.log('id entrance: '+id_entrance);

    if(id_entrance){
      this.MovieService.getMovie(id_entrance).subscribe(
        (res:any)=>{
          this.movie = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      );
    }
  }
 
  modify()
    {

      this.MovieService.editMovie( this.movie.mov_id,this.movie).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/home']);
  }

} 



  



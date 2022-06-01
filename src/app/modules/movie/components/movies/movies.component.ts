import {Component, OnInit} from '@angular/core';
import {DataService, MovieService} from "../../services";
import {IResults} from "../../models";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IResults[];

  constructor(private dataService: DataService, private movieService: MovieService) {
  }

  page: number;
  total_page: number

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => {
      this.movies = value.results
      this.total_page = value.total_pages;
    });
  }

  change(event: number) {
    console.log(event);
    this.page = event;
    this.movieService.getMovies(this.page, '').subscribe(value => {
      this.dataService.storage.next(value);
    })
  }
}

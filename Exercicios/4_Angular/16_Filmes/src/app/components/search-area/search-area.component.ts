import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search-area',
  imports: [FormsModule],
  templateUrl: './search-area.component.html',
  styleUrl: './search-area.component.scss'
})
export class SearchAreaComponent {
  search: string = "";

  constructor(private getMoviesService: MoviesService) { }

  changeSearch() {
    this.getMoviesService.setSearch(this.search);
  }

  ngOnInit() {
    document.getElementById("search-movies")?.focus();
  }

}

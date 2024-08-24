import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  games: any[] = [];
  searchTerm: string = '';
  loading: boolean = true;
  game: any;
  gameLayout: boolean = true

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.fetchGames();
  }

  fetchGames(): void {
    this.gamesService.getGames().subscribe(
      (data) => {
        this.games = data.data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching games', error);
        this.loading = false;
      }
    );
  }

  changeLayout(event:any){
    if(event == "game"){
      this.gameLayout = true
    }
    if(event == "contact"){
      this.gameLayout = false
    }
  }

  get filteredGames() {
    return this.games
  }

  clearSearch(): void {
    this.searchTerm = '';
  }
}

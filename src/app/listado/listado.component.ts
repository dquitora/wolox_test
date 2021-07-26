import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { WoloxServiceService } from '../services/wolox-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements AfterViewInit {
  signUp : any = localStorage.getItem("SignUp"); 
  displayedColumns: string[] = ['position', 'name', 'url'];  
  pokemonArr = [];
  dataSource = new MatTableDataSource<PokemonModel>(ELEMENT_DATAPOKEMON);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  error: string;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private woloxService:WoloxServiceService,private router: Router) { }
  
  ngOnInit() {     
    if(this.signUp != 1){
      this.router.navigate(['/']);       
    }
    //GET DE POKEMON
    this.woloxService.getPokemon()
        .subscribe (
          dataP=>
          { 
            this.pokemonArr = dataP
          },
          err => {
            this.error = 'An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}';
          }
        ); 
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface PokemonModel {
  name: string;
  url: string;
  position: number;
}

//CAMBIAR POR OBJETO OBTENIDO DESDE API
const ELEMENT_DATAPOKEMON: PokemonModel[] = [
  {position: 1, name: 'vulpix',  url: 'https://pokeapi.co/api/v2/pokemon/10103/'},
  {position: 2, name: 'ninetales',  url: 'https://pokeapi.co/api/v2/pokemon/10104/'},
  {position: 3, name: 'diglett',  url: 'https://pokeapi.co/api/v2/pokemon/10105/'},
  {position: 4, name: 'dugtrio',  url: 'https://pokeapi.co/api/v2/pokemon/10106/'},
  {position: 5, name: 'meowth',  url: 'https://pokeapi.co/api/v2/pokemon/10107/'},
  {position: 6, name: 'persian',  url: 'https://pokeapi.co/api/v2/pokemon/10108/'},
  {position: 7, name: 'geodude',  url: 'https://pokeapi.co/api/v2/pokemon/10109/'},
  {position: 8, name: 'graveler',  url: 'https://pokeapi.co/api/v2/pokemon/10113/'},
  {position: 9, name: 'golem',  url: 'https://pokeapi.co/api/v2/pokemon/10123/'},
  {position: 10, name: 'grimer',  url: 'https://pokeapi.co/api/v2/pokemon/10133/'},
  {position: 11, name: 'muk',  url: 'https://pokeapi.co/api/v2/pokemon/10143/'},
  {position: 12, name: 'exeggutor',  url: 'https://pokeapi.co/api/v2/pokemon/10153/'},
  {position: 13, name: 'marowak',  url: 'https://pokeapi.co/api/v2/pokemon/10163/'},
  {position: 14, name: 'greninja',  url: 'https://pokeapi.co/api/v2/pokemon/10173/'},
  {position: 15, name: 'zygarde',  url: 'https://pokeapi.co/api/v2/pokemon/10183/'},
  {position: 16, name: 'gumshoos',  url: 'https://pokeapi.co/api/v2/pokemon/10193/'},
  {position: 17, name: 'vikavolt',  url: 'https://pokeapi.co/api/v2/pokemon/10203/'},
  {position: 18, name: 'oricorio',  url: 'https://pokeapi.co/api/v2/pokemon/10303/'},
  {position: 19, name: 'lycanroc',  url: 'https://pokeapi.co/api/v2/pokemon/10403/'},
  {position: 20, name: 'lurantis',  url: 'https://pokeapi.co/api/v2/pokemon/10503/'},
];


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];


// export class ListadoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

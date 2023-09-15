import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Post {
  id: number;
  title: string;
  gender: string;
  actor: string;
  date: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  filterPost: string = '';
  p!: number;
  posts: Post[]
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      filterPost: [''],
    });
    this.posts = [
      {
        "id": 1,
        "title": "Pulp Fiction",
        "gender": "Crime",
        "actor": "John Travolta",
        "date": "02/04/2016"
      },
      {
        "id": 2,
        "title": "The Shawshank Redemption",
        "gender": "Drama",
        "actor": "Tim Robbins",
        "date": "11/04/2016"
      },
      {
        "id": 3,
        "title": "The Godfather",
        "gender": "Crime",
        "actor": "Marlon Brando",
        "date": "22/04/2016"
      },
      {
        "id": 4,
        "title": "The Dark Knight",
        "gender": "Action",
        "actor": "Christian Bale",
        "date": "31/04/2016"
      },
      {
        "id": 5,
        "title": "Forrest Gump",
        "gender": "Drama",
        "actor": "Tom Hanks",
        "date": "12/05/2016"
      },
      {
        "id": 6,
        "title": "Inception",
        "gender": "Sci-Fi",
        "actor": "Leonardo DiCaprio",
        "date": "24/06/2016"
      },
      {
        "id": 7,
        "title": "The Matrix",
        "gender": "Sci-Fi",
        "actor": "Keanu Reeves",
        "date": "04/07/2016"
      },
      {
        "id": 8,
        "title": "Gladiator",
        "gender": "Action",
        "actor": "Russell Crowe",
        "date": "15/08/2016"
      },
      {
        "id": 9,
        "title": "Avatar",
        "gender": "Sci-Fi",
        "actor": "Sam Worthington",
        "date": "26/09/2016"
      },
      {
        "id": 10,
        "title": "Fight Club",
        "gender": "Drama",
        "actor": "Edward Norton",
        "date": "07/10/2016"
      },
      {
        "id": 11,
        "title": "Schindler's List",
        "gender": "Drama",
        "actor": "Liam Neeson",
        "date": "18/11/2016"
      },
      {
        "id": 12,
        "title": "The Silence of the Lambs",
        "gender": "Thriller",
        "actor": "Anthony Hopkins",
        "date": "29/12/2016"
      },
      {
        "id": 13,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "gender": "Fantasy",
        "actor": "Elijah Wood",
        "date": "10/01/2017"
      },
      {
        "id": 14,
        "title": "The Departed",
        "gender": "Crime",
        "actor": "Leonardo DiCaprio",
        "date": "21/02/2017"
      },
      {
        "id": 15,
        "title": "The Good, the Bad and the Ugly",
        "gender": "Western",
        "actor": "Clint Eastwood",
        "date": "04/03/2017"
      },
      {
        "id": 16,
        "title": "Saving Private Ryan",
        "gender": "War",
        "actor": "Tom Hanks",
        "date": "15/04/2017"
      },
      {
        "id": 17,
        "title": "The Lord of the Rings: The Two Towers",
        "gender": "Fantasy",
        "actor": "Elijah Wood",
        "date": "26/05/2017"
      },
      {
        "id": 18,
        "title": "The Shawshank Redemption",
        "gender": "Drama",
        "actor": "Tim Robbins",
        "date": "06/06/2017"
      },
      {
        "id": 19,
        "title": "The Godfather: Part II",
        "gender": "Crime",
        "actor": "Al Pacino",
        "date": "17/07/2017"
      },
      {
        "id": 20,
        "title": "The Dark Knight Rises",
        "gender": "Action",
        "actor": "Christian Bale",
        "date": "28/08/2017"
      },
      {
        "id": 21,
        "title": "Forrest Gump",
        "gender": "Drama",
        "actor": "Tom Hanks",
        "date": "09/09/2017"
      },
      {
        "id": 22,
        "title": "Inception",
        "gender": "Sci-Fi",
        "actor": "Leonardo DiCaprio",
        "date": "20/10/2017"
      },
      {
        "id": 23,
        "title": "The Matrix",
        "gender": "Sci-Fi",
        "actor": "Keanu Reeves",
        "date": "01/11/2017"
      },
      {
        "id": 24,
        "title": "Gladiator",
        "gender": "Action",
        "actor": "Russell Crowe",
        "date": "12/12/2017"
      },
      {
        "id": 25,
        "title": "Avatar",
        "gender": "Sci-Fi",
        "actor": "Sam Worthington",
        "date": "23/01/2018"
      },
      {
        "id": 26,
        "title": "Fight Club",
        "gender": "Drama",
        "actor": "Edward Norton",
        "date": "03/02/2018"
      },
      {
        "id": 27,
        "title": "Schindler's List",
        "gender": "Drama",
        "actor": "Liam Neeson",
        "date": "14/03/2018"
      },
      {
        "id": 28,
        "title": "The Silence of the Lambs",
        "gender": "Thriller",
        "actor": "Anthony Hopkins",
        "date": "25/04/2018"
      },
      {
        "id": 29,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "gender": "Fantasy",
        "actor": "Elijah Wood",
        "date": "06/05/2018"
      },
      {
        "id": 30,
        "title": "The Departed",
        "gender": "Crime",
        "actor": "Leonardo DiCaprio",
        "date": "17/06/2018"
      }
    ];
  }

  ngOnInit(): void {
    console.log(this.filterPost)
  }

  onSubmit(){
    console.log('Valor capturado: ' + this.filterPost);
  }
}

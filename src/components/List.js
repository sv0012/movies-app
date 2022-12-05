import React from 'react'
import { ListItem } from './ListItem';

const List = ({genre}) => {

    const movies = {
        "Action" : [
            {
                name: "Avengers",
                rating: "8/10"
            },
            {
                name: "Spiderman Homecoming",
                rating: "7.4/10"
            },
            {
                name: "Batman Vs Superman",
                rating: "6.4/10"
            }
        ],
        "Romance" : [
            {
                name: "After",
                rating: "5.3/10"
            },
            {
                name: "The NoteBook",
                rating: "6.9/10"
            },
            {
                name: "Love Rosie",
                rating: "7.1/10"
            }
        ],
        "Anime" : [
            {
                name: "One Piece Film: Red",
                rating: "6.9/10"
            },
            {
                name: "Dragon Ball Super: Broly",
                rating: "7.7/10"
            },
            {
                name: "The Last: Naruto the Movie",
                rating: "7.6/10"
            }
        ],
    }

    const listArray = movies[genre];
   

  return (
    <div>
        <h3>List of Movies</h3>
        {
            listArray.map((item)=>
                <ListItem name={item.name} rating={item.rating} />
            )
        }
    </div>
  )
}

export default List
import { Chat } from "./../models/chat.model";
import { Race } from "./../models/race.model";


//const API_KEY = import.meta.env.API_KEY;
const API_KEY = "5ea21f0b-7c03-4eb4-b211-d72bd6f4838b";

export class ChatService{
    static lesRaces: Array<Race>;

    static async getRandomCat () : Promise<Chat> {
        let cat: Chat;

        const res = await fetch('https://api.thecatapi.com/v1/images/search', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'x-api-key' : API_KEY},
        });
            
        const json = await res.json();
        if (json != null) {
            cat = new Chat(json[0].id, json[0].breed, json[0].url);
        }
        return cat;
    }

    static async getCatByBreed (breed: Race) : Promise<Chat> {
        let cat: Chat;

        const res = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=' + breed.id , {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json', 'x-api-key' : API_KEY},
        });
        const json = await res.json();
        if (json != null) {
            console.log(json);
            cat = new Chat(json[0].id, breed.nom, json[0].url);
        }
        return cat;
    }

    static async get4RandomBreeds (): Promise<Race[]> {
        const lesRaces = await ChatService.getAllBreeds();
        let quatre = new Array<number>();
        let nbr: number;
        while (quatre.length < 4)  {
            nbr =  Math.floor(Math.random() * lesRaces.length);
            if (!quatre.includes(nbr)){
                quatre.push(nbr);
            }
        }
        let les4Races = new Array<Race>();
        les4Races.push(new Race(lesRaces[quatre[0]].id, lesRaces[quatre[0]].nom));
        les4Races.push(new Race(lesRaces[quatre[1]].id, lesRaces[quatre[1]].nom));
        les4Races.push(new Race(lesRaces[quatre[2]].id, lesRaces[quatre[2]].nom));
        les4Races.push(new Race(lesRaces[quatre[3]].id, lesRaces[quatre[3]].nom));
        return les4Races;
    }

    static async getAllBreeds() : Promise<Race[]> {
        
        if (ChatService.lesRaces != null) {
            return ChatService.lesRaces;
        }

        const res = await fetch('https://api.thecatapi.com/v1/breeds', {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json', 'x-api-key' : API_KEY},
        });

        const json = await res.json();
        if (json != null) {
            ChatService.lesRaces = new Array<Race>();
            json.forEach(element => {
                ChatService.lesRaces.push(new Race(element.id, element.name));               
            });
        }
        console.log(this.lesRaces);
        return ChatService.lesRaces;
    }
}
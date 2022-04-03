import { Chat } from "./../models/chat.model";


//const API_KEY = import.meta.env.API_KEY;
const API_KEY = "5ea21f0b-7c03-4eb4-b211-d72bd6f4838b";

export class ChatService{
    static lesRaces: Array<string>;

    static async getRandomCat () : Promise<Chat> {
        let cat: Chat;
        console.log(ChatService.lesRaces);
        const res = await fetch('https://api.thecatapi.com/v1/images/search', {
            method: 'GET',
            headers: {'x-api-key' : API_KEY} 
        });
            
        const json = await res.json();
        if (json != null) {
            cat = new Chat(json[0].id, json[0].url);
        }
        return cat;
    }

    static async get4RandomBreed (): Promise<string[]> {
        const lesRaces = await ChatService.getAllBreeds();
        let quatre = new Array<number>();
        let nbr: number;
        while (quatre.length < 4)  {
            nbr =  Math.floor(Math.random() * lesRaces.length);
            if (!quatre.includes(nbr)){
                quatre.push(nbr);
            }
        }
        return [lesRaces[quatre[0]],  lesRaces[quatre[1]], lesRaces[quatre[2]],lesRaces[quatre[3]]];
    }

    static async getAllBreeds() : Promise<string[]> {
        
        if (ChatService.lesRaces != null) {
            return ChatService.lesRaces;
        }

        const res = await fetch('https://api.thecatapi.com/v1/breeds', {
            method: 'GET',
            headers: {'x-api-key' : API_KEY} 
        });
            
        const json = await res.json();
        if (json != null) {
            ChatService.lesRaces = new Array<string>();
            json.forEach(element => {
                ChatService.lesRaces.push(element.name)                
            });
        }
        return ChatService.lesRaces;
    }
}
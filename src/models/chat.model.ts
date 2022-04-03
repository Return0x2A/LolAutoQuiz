import type { Race } from "./race.model";

export class Chat {
    id: string;
    race: string;
    url : string;

    constructor (id: string , race: string, url: string){
        this.id = id;
        this.race = race;
        this.url = url;
    }
}
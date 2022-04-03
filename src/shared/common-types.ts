export enum QuestionCategorie {
    'champion', 'stat', 'item', 'custom'
}

export type QuestionOptions = {
    Categorie: QuestionCategorie;
    HasImage: boolean; 
}
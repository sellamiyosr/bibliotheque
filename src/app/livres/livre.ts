export class Livre {
    _id:object;
    isbn:string;
    titre:string;
    annedition:number;
    prix:number;
    qtestock:number;
    couverture:string;
    specialite:{
        id:object;
        nomspecialite:string;
    }
    editeur:{
        id:object;
        maisonedit:string;
    }
    auteurs:{
        id:object;
        nomauteur:string;
        email:string;
        numtel:string;
    }
}

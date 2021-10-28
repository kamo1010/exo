class Film {
    id : string;
    title : string;
    category : string;
    likeRatio : number;

    constructor(parent : {id : string, title : string, category : string, likes : number, dislikes : number}) {
        this.id = parent.id;
        this.title = parent.title;
        this.category = parent.category;
        this.likeRatio = Math.round(parent.likes * 100 / (parent.likes + parent.dislikes));
    }
}

export default Film
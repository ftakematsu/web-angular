export class Usuario {
    id?: number;
    nome?: string;
    email?: string;
    photo?: string;
    ativo: boolean;

    constructor(id: number, nome: string, 
                email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;          
        this.ativo = true;      
        this.photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    }
}
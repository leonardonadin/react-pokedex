export type Pokemon = {
    id: number;
    name: string;
    image: string;
    types: string[];
    weight: number;
    height: number;
    base_experience: number;
    abilities: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
        special_attack: number;
        special_defense: number;
    }
}
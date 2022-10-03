import { Image } from "./image";

export interface Project {
    id: number,
    name: string,
    description: string,
    urlRepo: string,
    urlDemo: string,
    Image: Image,
    startDate: Date
}
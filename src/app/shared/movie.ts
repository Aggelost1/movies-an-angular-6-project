import {Actor} from './actor'
export class Movie{
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public posterUrl : string,
        public actors :Actor[]    
    ){}
  }

export type MassData = {
   // something
   massValue: number;
   massExponent: number;
 };
 
 export type VolData = {
   // something
   volValue:number;
   volExponent: number;
 };
 
 export type Planet = {
   // something
   id: string;
   name: string;
   isPlanet: boolean;
   mass: MassData;
   vol: VolData;
   gravity: number;
   avgTemp: number;
   moonsCount?: number;
   moons?: string[]
 };
 
 export type Asteroid = {
   // something
   name:string;
   discoveryYear: number;
   orbitalPeriod: number;
 };
 
 export type AllData = {
   // something
 };
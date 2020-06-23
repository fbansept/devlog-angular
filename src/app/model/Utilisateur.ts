import { Role } from './Role';

export interface Utilisateur {
   id: number,
   pseudo: string, 
   nom: string, 
   prenom: string, 
   //isAdmin: boolean,
   //isProfessionnel: boolean,
   //role: Role,
   listeRole: Role[]
}
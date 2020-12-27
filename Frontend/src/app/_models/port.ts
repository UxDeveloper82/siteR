import { PortPhoto } from './portPhoto';

export interface IPort {
  id: number;
  name: string;
  type: string;
  language: string;
  link: string;
  gitLink: string;
  photoUrl: string;
  portPhotos?: PortPhoto[];
}


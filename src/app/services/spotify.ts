import { Injectable } from '@angular/core';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Arreglo de canciones con datos ficticios para probar el componente
  private tracks: Track[] = [
    {
      id: '1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      coverUrl: 'https://picsum.photos/300/300?random=1',
      duration: '3:20'
    },
    {
      id: '2',
      title: 'As It Was',
      artist: 'Harry Styles',
      album: "Harry's House",
      coverUrl: 'https://picsum.photos/300/300?random=2',
      duration: '2:47'
    },
    {
      id: '3',
      title: 'Starboy',
      artist: 'The Weeknd',
      album: 'Starboy',
      coverUrl: 'https://picsum.photos/300/300?random=3',
      duration: '3:50'
    }
  ];

  constructor() { }

  // Método para obtener las canciones desde TypeScript
  getTracks(): Track[] {
    return this.tracks;
  }
}
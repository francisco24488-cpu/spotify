import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from './services/spotify';
import { Track } from './models/track.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class App implements OnInit {
  title = 'spotify-app';
  tracks: Track[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.tracks = this.spotifyService.getTracks();
  }

  reproducirCancion(track: Track): void {
    Swal.fire({
      title: 'Reproduciendo',
      text: `${track.title} - ${track.artist}`,
      imageUrl: track.coverUrl,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: track.title,
      confirmButtonText: 'Pausar',
      confirmButtonColor: '#1db954',
      background: '#212529',
      color: '#ffffff'
    });
  }
}
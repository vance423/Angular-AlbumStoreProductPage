import { Track } from './track';

export interface album {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
}

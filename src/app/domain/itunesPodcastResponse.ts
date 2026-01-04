export interface itunesPodcastResponse {
    resultCount: number;
    results: PodcastResults[];
}

export interface PodcastResults{
    trackId: string;
    description: string;
    artistName: string;
    trackName: string;
    artworkUrl600: string;
    feedUrl: string;
    trackTimeMillis: number;
    releaseDate: string;
    previewUrl: string;
}
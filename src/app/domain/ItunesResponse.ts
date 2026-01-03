export interface itunesResponse {
    feed: {
        entry: {
            'im:image': { label: string }[];
            'im:name': { label: string };
            'im:artist': { label: string };
            summary: { label: string };
        }[];
        };
}

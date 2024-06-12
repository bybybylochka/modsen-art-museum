import { Art } from '@utils/art';

export type DetailedArt = Art & {
    place_of_origin: string;
    dimensions: string;
    credit_line: string;
    gallery_title: string;
};

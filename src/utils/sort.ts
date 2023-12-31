import { HotelOrder } from '@/enums/hotels';

export function orderButtonText(type: HotelOrder): string {
    switch (type) {
        case HotelOrder.Alphabetical:
        default:
            return 'sort alphabetically';
        case HotelOrder.Price:
            return 'sort by price';
        case HotelOrder.Rating:
            return 'sort by star rating';
    }
}

export function orderAlphbetically(current: string, next: string): number {
    if (current < next) return -1;
    if (current > next) return 1;

    return 0;
}

export function orderByPrice(current: number, next: number): number {
    if (current < next) return -1;
    if (current > next) return 1;

    return 0;
}

export function orderByRating(current: number, next: number): number {
    if (current > next) return -1;
    if (current < next) return 1;

    return 0;
}

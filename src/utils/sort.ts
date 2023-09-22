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

export interface Good {
    id?: string;
    name: string;
    price: number;
    image: string;
}

export interface CartItem extends Good {
    quantity: number;
}

export interface AppState {
    cart: {
        items: CartItem[];
    };
}

export interface AppConfig {
    dealers?: string[];
}
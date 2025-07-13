import React from 'react';
import { Button, InputNumber, Space } from 'antd';
import { CartItem } from '../../types/types';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../store/cartSlice';

interface CartItemProps {
    item: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (value: number | null) => {
        if (value !== null) {
            dispatch(updateQuantity({ name: item.name, quantity: value }));
        }
    };

    return (
        <Space>
            <Button
                onClick={() => handleQuantityChange(item.quantity - 1)}
                disabled={item.quantity <= 1}
            >
                -
            </Button>
            <InputNumber
                min={1}
                value={item.quantity}
                onChange={handleQuantityChange}
                style={{ width: '60px'}}
            />
            <Button onClick={() => handleQuantityChange(item.quantity + 1)}>+</Button>
        </Space>
    );
};

export default CartItemComponent;
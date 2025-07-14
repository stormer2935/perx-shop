import React from 'react';
import { Button, InputNumber } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { CartItem } from '../../types/types';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../store/cartSlice';
import styles from './CartItem.module.css';

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
        <div className={styles.quantityControl}>
            <Button
                icon={<MinusOutlined />}
                onClick={() => handleQuantityChange(item.quantity - 1)}
                disabled={item.quantity <= 1}
            />

            <InputNumber
                min={1}
                value={item.quantity}
                onChange={handleQuantityChange}
                className={styles.quantityInput}
            />

            <Button
                icon={<PlusOutlined />}
                onClick={() => handleQuantityChange(item.quantity + 1)}
            />
        </div>
    );
};

export default CartItemComponent;
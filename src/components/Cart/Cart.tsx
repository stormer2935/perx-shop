import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { Button, Divider, Empty, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import CartItemComponent from './CartItem';
import { clearCart, removeFromCart } from '../../store/cartSlice';
import { useTheme } from '../../context/ThemeContext';
import styles from './Cart.module.css';

const Cart: React.FC = () => {
    const { theme } = useTheme();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    if (cartItems.length === 0) {
        return (
            <div className={styles.cartContainer}>
                <Empty
                    description={
                        <div className={theme === 'light' ? styles.emptyTextLight : styles.emptyTextDark}>
                            Ваша корзина пуста
                        </div>
                    }
                >
                    <Button type="primary" href="/perx-shop">
                        Вернуться к покупкам
                    </Button>
                </Empty>
            </div>
        );
    }

    return (
        <div className={styles.cartContainer}>
            <h2 className={theme === 'light' ? styles.titleLight : styles.titleDark}>Корзина</h2>

            <div className={styles.itemsContainer}>
                {cartItems.map(item => (
                    <Card
                        key={item.name}
                        className={theme === 'light' ? styles.cardLight : styles.cardDark}
                    >
                        <div className={styles.itemContent}>
                            <img
                                src={`https://test-frontend.dev.int.perx.ru${item.image}`}
                                alt={item.name}
                                className={styles.itemImage}
                            />

                            <div className={styles.itemDetails}>
                                <div className={theme === 'light' ? styles.itemNameLight : styles.itemNameDark}>
                                    {item.name}
                                </div>
                                <div className={theme === 'light' ? styles.itemPriceLight : styles.itemPriceDark}>
                                    ${item.price.toFixed(2)}
                                </div>
                                <CartItemComponent item={item} />
                            </div>

                            <div className={styles.itemActions}>
                                <div className={theme === 'light' ? styles.itemTotalLight : styles.itemTotalDark}>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                                <Button
                                    danger
                                    type="text"
                                    icon={<DeleteOutlined />}
                                    onClick={() => dispatch(removeFromCart(item.name))}
                                />
                            </div>
                        </div>
                    </Card>
                ))}

                <Divider className={styles.divider} />

                <div className={styles.footer}>
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={handleClearCart}
                        className={styles.clearButton}
                    >
                        Очистить корзину
                    </Button>

                    <div className={theme === 'light' ? styles.totalLight : styles.totalDark}>
                        Итого: ${totalPrice.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
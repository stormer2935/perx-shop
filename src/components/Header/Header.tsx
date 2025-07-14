import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Switch } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const { theme, toggleTheme } = useTheme();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className={theme === 'light' ? styles.headerLight : styles.headerDark}>
            <Link
                to="/"
                className={theme === 'light' ? styles.logoLight : styles.logoDark}
            >
                PerxShop
            </Link>
            <div className={styles.controls}>
                <Switch
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    checkedChildren="🌙"
                    unCheckedChildren="☀️"
                />
                <Link to="/cart" className={styles.cartButton}>
                    <Badge count={totalItems}>
                        <Button type="primary" icon={<ShoppingCartOutlined />} size="large">
                            Корзина
                        </Button>
                    </Badge>
                </Link>
            </div>
        </header>
    );
};

export default Header;
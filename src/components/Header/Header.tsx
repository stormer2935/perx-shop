import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Switch } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const { theme, toggleTheme } = useTheme();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header style={{
            padding: '16px',
            background: theme === 'light' ? '#d8e0ed' : '#1d1d1d',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Link to="/perx-shop/" style={{ fontSize: '20px', fontWeight: 'bold', color: theme === 'light' ? '#333' : '#fff' }}>
                PerxShop
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Switch
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    checkedChildren="🌙"
                    unCheckedChildren="☀️"
                />
                <Link to="/cart">
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
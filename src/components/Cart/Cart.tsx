import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { Button, Table, Space, Typography, Divider, Empty } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import CartItem from './CartItem';
import { clearCart } from '../../store/cartSlice';
import { removeFromCart } from '../../store/cartSlice';
import { useTheme } from '../../context/ThemeContext';

const { Title, Text } = Typography;

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
            <div style={{ padding: '24px', textAlign: 'center' }}>
                <Empty
                    description={
                        <Text type="secondary" style={{color: theme === 'light' ? '#333' : '#fff'}}>Ваша корзина пуста</Text>
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
        <div style={{ padding: '24px' }}>
            <Title level={2} style={{color: theme === 'light' ? '#333' : '#fff' }}>Корзина</Title>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Table
                    dataSource={cartItems}
                    columns={[
                        {
                            title: 'Товар',
                            dataIndex: 'name',
                            key: 'name',
                            render: (text, record) => (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={`https://test-frontend.dev.int.perx.ru${record.image}`}
                                        alt={text}
                                        style={{ width: '50px', marginRight: '16px' }}
                                    />
                                    <span>{text}</span>
                                </div>
                            ),
                        },
                        {
                            title: 'Цена',
                            dataIndex: 'price',
                            key: 'price',
                            render: (price) => `$${price.toFixed(2)}`,
                        },
                        {
                            title: 'Количество',
                            dataIndex: 'quantity',
                            key: 'quantity',
                            render: (quantity, record) => (
                                <CartItem item={record} />
                            ),
                        },
                        {
                            title: 'Сумма',
                            key: 'total',
                            render: (_, record) => `$${(record.price * record.quantity).toFixed(2)}`,
                        },
                        {
                            title: 'Действия',
                            key: 'actions',
                            render: (_, record) => (
                                <Button
                                    danger
                                    icon={<DeleteOutlined />}
                                    onClick={() => dispatch(removeFromCart(record.name))}
                                />
                            ),
                        },
                    ]}
                    pagination={false}
                    rowKey="name"
                />
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={handleClearCart}
                    >
                        Очистить корзину
                    </Button>
                    <Title level={4} style={{ margin: 0, color: theme === 'light' ? '#333' : '#fff' }}>
                        Итого: ${totalPrice.toFixed(2)}
                    </Title>
                </div>
            </Space>
        </div>
    );
};

export default Cart;
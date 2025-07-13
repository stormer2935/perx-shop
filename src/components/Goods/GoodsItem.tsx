import React from 'react';
import {Card, Button, Typography} from 'antd';
import {Good} from '../../types/types';
import {useTheme} from '../../context/ThemeContext';
import styles from './GoodsItem.module.css';
const {Title, Text} = Typography;

interface GoodsItemProps {
    good: Good;
    onAddToCart: (good: Good) => void;
}

const GoodsItem: React.FC<GoodsItemProps> = ({good, onAddToCart}) => {
    const {theme} = useTheme();

    return (
        <Card hoverable style={{borderColor: theme === 'light' ? '#d9d9d9' : '#434343',}} cover={
                <img
                    alt={good.name}
                    src={`https://test-frontend.dev.int.perx.ru${good.image}`}
                    style={{ height: '150px', objectFit: 'contain', paddingTop: '24px' }}
                />
        }
              actions={[
                  <Button type="primary" onClick={() => onAddToCart(good)}>
                      В корзину
                  </Button>,
              ]}
        >
            <Card.Meta
                title={<Title level={4}>
                    <div className={styles?.textTheme || 'default-class'}>{good.name}</div>
                </Title>}
                description={<Text strong className='text-theme'>${good.price.toFixed(2)}</Text>}
            />
        </Card>
    );
};

export default GoodsItem;
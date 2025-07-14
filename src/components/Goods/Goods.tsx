import React from 'react';
import {useGetGoodsQuery} from '../../api/goodsApi';
import {Row, Col, Spin, message} from 'antd';
import GoodsItem from './GoodsItem';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/cartSlice';

interface GoodsProps {
    dealers?: string[];
}

const Goods: React.FC<GoodsProps> = ({dealers}) => {
    const {data: goods, isLoading, isError} = useGetGoodsQuery(dealers);
    const dispatch = useDispatch();
    const handleAddToCart = (good: any) => {
        dispatch(addToCart(good));
    };

    if (isLoading) return <Spin size="large" style={{display: 'block', margin: '20px auto'}}/>;
    if (isError) return <div className='textTheme'>Ошибка загрузки товаров</div>;

    return (
        <div style={{padding: '24px'}}>
            <Row gutter={[16, 16]}>
                {goods?.map((good) => (
                    <Col key={good.name} xs={24} sm={12} md={8} lg={6}>
                        <GoodsItem good={good} onAddToCart={handleAddToCart}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Goods;
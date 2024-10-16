import { Badge, Col } from 'antd'
//import Search from 'antd/lib/transfer/search'
import React from 'react'
import {WrapperTextHeaderSmall, WrapperHeader, WrapperTextHeader, WrapperHeaderAccount } from './style'
import { 
  ShoppingCartOutlined, 
  UserOutlined, 
  CaretDownOutlined  
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

function HeaderComponent() {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>TH Shop</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            textButton="Tìm kiếm"
            placeholder=" Input search text "
            // onSearch={onSearch}
          /> 
        </Col>
        <Col span={6} style={{display: 'flex', gap: '20px', alignItems:'center'}}>
          <WrapperHeaderAccount>
            <UserOutlined style ={{ fontSize: '30px' }} /> 
            <div>
              <WrapperTextHeaderSmall>Đăng nhập | Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined style ={{ fontSize: '30px', color: '#fff' }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
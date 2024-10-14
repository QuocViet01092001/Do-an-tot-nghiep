import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
  return (
    <Row style={{padding: '0 120px', background: '#efefef', flexWrap:'nowrap', paddingTop: '10px'}}>
        <WrapperNavbar span={4}>
            <NavbarComponent />
        </WrapperNavbar>
        <WrapperProducts span={20}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </WrapperProducts>
    </Row>
  )
}

export default TypeProductPage
import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import slider1 from '../../assets/images/370238109_177554168744176_6455132596177428242_n.jpg'
import slider2 from '../../assets/images/370263713_651996717023561_132615917330281902_n.jpg'
import slider3 from '../../assets/images/385545737_1075427466780920_2567510213129825837_n.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
// import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'


const HomePage = () => {
  const arr = ['TV','Tu Lanh', 'Lap top']
  return (
    <>
        <div style={{ padding: '0 120px'}}>
        <WrapperTypeProduct>   
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key ={item}/>
            )
          })}
        </WrapperTypeProduct>
        </div>
        <div id="container" style={{backgroundColor: '#efefef', padding: '0 120px', height: '1000px', maxwidth: '100%'}}>
          <SliderComponent arrImages = {[slider1, slider2, slider3]} />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div style={{width: '100%', display: 'flex', justifyContent:'center', marginTop: '10px'}}>
            <WrapperButtonMore textButton="Xem Thêm" type="outline" 
              styleButton={{
                border: '1px solid rgb(11, 116, 229)',
                color: 'rgb(11, 116, 229)',
                width: '240px',
                height: '38px',
                borderRadius: '4px'
              }}
              styleTextButton={{fontWeight: 500}}
            />
          </div>
        </div>
      </>
  )
}

export default HomePage
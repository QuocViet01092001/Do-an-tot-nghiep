import React from 'react'
import {WrapperTextPrice, WrapperContent, WrapperLableText, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
    const onChange =() => {}
    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                return options.map((option)=>{
                    return (
                    <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return(
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                    {options.map((option) => {
                        return (
                            <Checkbox value={option.value}>{option.label}</Checkbox>
                        )
                    })}
                    <Checkbox value="B">B</Checkbox>
                </Checkbox.Group>
                )
            case 'star':
                return options.map((option)=>{
                    return (
                        <div style={{dispaly: 'flex'}}>
                            <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                            <span> {`từ ${option} sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((option)=>{
                    return (
                        <WrapperTextPrice>
                            {option}
                        </WrapperTextPrice>
                    )
                })
            default:
                return{}
        }
    }
  return (
    <div style={{backgroundColor: '#fff'}}>
        <WrapperLableText>Lable</WrapperLableText>
        <WrapperContent>
            {renderContent('text', ['Tu lanh', 'TV', 'May giac'])}
        </WrapperContent>
        {/* <WrapperContent>
            {renderContent('checkbox', [
                {value: 'a', label: 'A'},
                {value: 'b', label: 'B'},
            ])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('star', [2, 4, 5])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('price', ['Dưới 40', 'Trên 50'])}
        </WrapperContent> */}
    </div>
  )
}

export default NavbarComponent 
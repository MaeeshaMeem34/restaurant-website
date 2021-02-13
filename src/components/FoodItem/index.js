import React from 'react';
import {useContext} from 'react'
import {CartContext} from '../contexts/CartContext'
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ItemLink
  
 
} from './FoodItemElement';
import {Link} from 'react-router-dom';

const FoodItem = ({ heading, data }) => {

  
const { dispatch } = useContext(CartContext);

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ItemLink to={product.path}> {product.button}</ItemLink>
                    
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default FoodItem;

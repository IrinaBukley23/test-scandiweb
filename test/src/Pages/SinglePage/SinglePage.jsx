import React, { useEffect, useState } from 'react';
import * as Styled from './SinglePage.style';
import { useQuery } from "@apollo/client";
import {FETCH_SINGLE} from '../../queries/queries';

const SinglePage = () => {

    const {data, loading} = useQuery(FETCH_SINGLE);
    const [isActive, setIsActive] = useState(true);
    const [product, setProduct] = useState([]);

    useEffect(() => {
       if(!loading) {
        setProduct(data);
       }
    }, [data, loading]);

    if (loading) {
        return <h2>Loading...</h2>
    }

    const handleClick = () => {
        setIsActive(!isActive);
      };

    const gal = data.product.gallery;
    const descrText = data.product.description.slice(3, data.product.description.length - 4);
    const attributes = data.product.attributes;
    //console.log(attributes[0].name);

    return(
        <>
        <Styled.Wrapper>
           <Styled.Photo>
               <Styled.Column>
                {gal.map( (elem) => {
                    return (<Styled.ColumnElem key={elem}>
                        <img key={elem} src={elem} alt="photo"/>
                    </Styled.ColumnElem>)
                } )}
               </Styled.Column>
               <Styled.Image>
                   <img src={gal[0]} alt={data.product.name} />
               </Styled.Image>
           </Styled.Photo>
            <Styled.Description>
                <Styled.Brand>{data.product.brand}</Styled.Brand>
                <Styled.Name>{data.product.name}</Styled.Name>
                    {attributes?.map( (elem) => {
                        if(elem.name === "Color") {
                            return (
                                <>
                                <Styled.Attr key={elem.id}>{elem.name}: </Styled.Attr>
                                <Styled.AttrBlock key={elem.id}>
                                {elem.items.map((item) => <Styled.AttrColor key={item.id} displayValue={item.displayValue} id={item.id}></Styled.AttrColor>)}
                                </Styled.AttrBlock>
                        </>) 
                        } else { 
                            return (
                                <>
                                <Styled.Attr key={elem.name}>{elem.name}: </Styled.Attr>
                                <Styled.AttrBlock key={elem.id}>
                                {elem.items.map((item) => {
                                    return (
                                        <Styled.AttrItem key={item.id} isActive={isActive} id={item.id} onClick={handleClick}>
                                            {item.displayValue}
                                        </Styled.AttrItem>
                                    )}
                                )}
                                </Styled.AttrBlock>
                                </>
                            )
                        }
                        })
                    }
                    <Styled.Btn>add to cart</Styled.Btn>
                <Styled.Text>{descrText}</Styled.Text>
            </Styled.Description>
        </Styled.Wrapper>
        </>
    )
}

export default SinglePage;

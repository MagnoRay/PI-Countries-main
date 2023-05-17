import React from "react";
import Card from "../Card/Card";
import styled from "./Home.module.css"

const Cards = ({data}) => {
    return(
        <div className={styled.container}>
            {
                data?.map((co)=>{
                    return(
                        <div className={styled.containersubcard}  key = {co?.id}>
                            <Card
                                id={co?.id}
                                flag = {co?.flag}
                                name = {co?.name}
                                region = {co?.region}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards;
import React from 'react'
import { FeatureButton, FeatureContainer } from './FeatureElement'

export const Feature = () => {
    return (
        <FeatureContainer >
            <h1> Pizza Of The Day! </h1>
            <p> Truffle alfredo sauce topped with 24 caret gold dust! </p>

            <FeatureButton> Order Now </FeatureButton>
        </FeatureContainer>
    )
}

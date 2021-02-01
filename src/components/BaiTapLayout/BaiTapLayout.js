import React, { Component } from 'react'
import BTHeader from './BTHeader';
import BTLaptop from './BTLaptop';
import BTPromotion from './BTPromotion';
import BTSlider from './BTSlider';
import BTSmartphone from './BTSmartphone';

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />

                <BTSlider />

                <BTSmartphone />

                <BTLaptop />

                <BTPromotion />

                
            </div>

        );
    }
}
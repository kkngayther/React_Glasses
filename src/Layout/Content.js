import React, { Component } from 'react';

class Content extends Component {
    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];

    state = {
        imgSrc: './img/v1.png',
        name: 'GUCCI G8850U',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
    }
    changeGlass = (newGlass) => {
        this.setState({
            imgSrc: `./img/v${newGlass}.png`,
            name: this.arrProduct[Number(newGlass) - 1].name,
            desc: this.arrProduct[Number(newGlass) - 1].desc
        })
    }



    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-3 position-relative" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/model.jpg" alt="" />
                        <img className="position-absolute" src={this.state.imgSrc} style={{ top: 80, left: 58, width: '60%' }} alt />
                        <div className="position-absolute text-left" style={{ bottom: 0, left: 0, width: '-webkit-fill-available', height: '35%', backgroundColor: '#fdbd8ec9', margin: '0 15px' }}>
                            <h4 className="text-primary font-weight-bold">{this.state.name}</h4>
                            <p className="text-white">{this.state.desc}</p>
                        </div>
                    </div>
                    <div className="col-2">
                    </div>
                    <div className="col-3 d-flex" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/model.jpg" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 d-flex" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/g1.jpg" alt="" onClick={() => {
                            this.changeGlass('1');
                        }} />
                    </div>
                    <div className="col-2 d-flex" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/g2.jpg" alt="" onClick={() => {
                            this.changeGlass('2');
                        }} />
                    </div>
                    <div className="col-2 d-flex" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/g3.jpg" alt onClick={() => {
                            this.changeGlass('3');
                        }} />
                    </div>
                    <div className="col-2 d-flex" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/g4.jpg" alt="" onClick={() => {
                            this.changeGlass('4');
                        }} />
                    </div>
                    <div className="col-2 d-flex" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/g5.jpg" alt="" onClick={() => {
                            this.changeGlass('5');
                        }} />
                    </div>
                    <div className="col-2 d-flex" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/g6.jpg" alt="" onClick={() => {
                            this.changeGlass('6');
                        }} />
                    </div>
                    <div className="col-2 d-flex" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/g7.jpg" alt="" onClick={() => {
                            this.changeGlass('7');
                        }} />
                    </div>
                    <div className="col-2 d-flex" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/g8.jpg" alt="" onClick={() => {
                            this.changeGlass('8');
                        }} />
                    </div>
                    <div className="col-2 d-flex" style={{ alignItems: 'center' }}>
                        <img className="w-100" src="./img/g9.jpg" alt="" onClick={() => {
                            this.changeGlass('9');
                        }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
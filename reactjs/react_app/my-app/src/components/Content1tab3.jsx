import { useState } from "react";
import pdImg7 from '../asset/image/products/new_07_01.jpg';
import pdImg8 from '../asset/image/products/new_08_01.jpg';
import pdImg9 from '../asset/image/products/new_09_01.jpg';

const Content1tab3 = () => {
    const tab1Arr = [
        {pdImg:pdImg7, pdTit:"High Court Regal Mid", pdTxt:"Women's Sneakers"},
        {pdImg:pdImg8, pdTit:"Cali Star Rainbow", pdTxt:"Women's Sneakers"},
        {pdImg:pdImg9, pdTit:"RS-Z Red", pdTxt:"CAMPUS"},
    ];
    return (
        <>
            <h2>TabCont3</h2>
            <div className="tab-cont-box d-flex col-gap-20">
                {tab1Arr.map((v, i) => (
                <div className="tab-item w-col-3" key={i}>
                    <div className="tab-item-img w-100-per h-200">
                        <img className="w-100-per h-100-per" src={v.pdImg} alt=""/>
                    </div>
                    <h3 className="tab-item-tit pt-10">{v.pdTit}</h3>
                    <p className="tab-item-txt pt-10">{v.pdTxt}</p>
                </div>
                ))}
            </div>
        </>
    )
}
export default Content1tab3;


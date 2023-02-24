import { useState } from "react";
import pdImg4 from '../asset/image/products/new_04_01.jpg';
import pdImg5 from '../asset/image/products/new_05_01.jpg';
import pdImg6 from '../asset/image/products/new_06_01.jpg';

const Content1tab2 = () => {
    const tab1Arr = [
        {pdImg:pdImg4, pdTit:"Leadcat", pdTxt:"G Sandals"},
        {pdImg:pdImg5, pdTit:"COOLADAPT", pdTxt:"Women’s Running Tank Top"},
        {pdImg:pdImg6, pdTit:"Sonora Waist", pdTxt:"BAG 2.0"},

    ];
    return (
        <>
            <h2>TabCont2</h2>
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
export default Content1tab2;


import { useState } from "react";
import pdImg1 from '../asset/image/products/new_01_01.jpg';
import pdImg2 from '../asset/image/products/new_02_01.jpg';
import pdImg3 from '../asset/image/products/new_03_01.jpg';


const Content1tab1 = () => {
    const tab1Arr = [
        {pdImg:pdImg1, pdTit:"KING Platinum 21 FG/AG", pdTxt:"Men's Soccer Cleats"},
        {pdImg:pdImg2, pdTit:"FUSE", pdTxt:"Training Shoes"},
        {pdImg:pdImg3, pdTit:"Suede RE.GEN", pdTxt:"Sneakers"},
    ];
    return (
        <>
            <h2>TabCont1</h2>
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

    );

}
export default Content1tab1;


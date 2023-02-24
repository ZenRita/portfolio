//탭 콘텐츠 양식의 통합 버전
import { useState } from "react";
import pdImg1 from '../asset/image/products/new_01_01.jpg';
import pdImg2 from '../asset/image/products/new_02_01.jpg';
import pdImg3 from '../asset/image/products/new_03_01.jpg';

import pdImg4 from '../asset/image/products/new_04_01.jpg';
import pdImg5 from '../asset/image/products/new_05_01.jpg';
import pdImg6 from '../asset/image/products/new_06_01.jpg';

import pdImg7 from '../asset/image/products/new_07_01.jpg';
import pdImg8 from '../asset/image/products/new_08_01.jpg';
import pdImg9 from '../asset/image/products/new_09_01.jpg';

//부모로부터 전달되어지는 props는 반드시 중괄호{} 내부에 선언한다. 
//만약 부모로부터 전달되어지는 props의 값이 여러가지이면 {속성명1, 속성명2}로 선언하면 된다.
const Content1tab = ({indexDepth1}) => {
    console.log(indexDepth1); //0 | 1 | 2
    const tabTitle = ["Runnig", "Athletic", "Arrivals"];
    const tabArr = [
        [
            {pdImg:pdImg1, pdTit:"KING Platinum 21 FG/AG", pdTxt:"Men's Soccer Cleats"},
            {pdImg:pdImg2, pdTit:"FUSE", pdTxt:"Training Shoes"},
            {pdImg:pdImg3, pdTit:"Suede RE.GEN", pdTxt:"Sneakers"},
        ],
        [
            {pdImg:pdImg4, pdTit:"Leadcat", pdTxt:"G Sandals"},
            {pdImg:pdImg5, pdTit:"COOLADAPT", pdTxt:"Women’s Running Tank Top"},
            {pdImg:pdImg6, pdTit:"Sonora Waist", pdTxt:"BAG 2.0"},
        ],
        [
            {pdImg:pdImg7, pdTit:"High Court Regal Mid", pdTxt:"Women's Sneakers"},
            {pdImg:pdImg8, pdTit:"Cali Star Rainbow", pdTxt:"Women's Sneakers"},
            {pdImg:pdImg9, pdTit:"RS-Z Red", pdTxt:"CAMPUS"},
        ]
    ];

    const [viewModal, setViewModal] = useState(false);
    const openModal = e => {
        setViewModal(true);
    }
    const closeModal = e => {
        setViewModal(false);
    }

    return (
        <>
            <h2>{tabTitle[indexDepth1]}</h2>
             
            <div className="tab-cont-box d-flex col-gap-20">
                {tabArr[indexDepth1].map((v, i) => (
                <div className="tab-item w-col-3" key={i}>
                    <div className="tab-item-img w-100-per h-200" onClick={openModal}>
                        <img className="w-100-per h-100-per" src={v.pdImg} alt=""/>
                    </div>
                    <h3 className="tab-item-tit pt-10">{v.pdTit}</h3>
                    <p className="tab-item-txt pt-10">{v.pdTxt}</p>
                </div>
                ))}

            </div>

            <div className={viewModal ? "dark on" : "dark"} onClick={closeModal}></div>
            <div className={viewModal ? "popup on" : "popup"}>
                <img src="" alt=""/>
                {/* 과제 : 클릭한 곳의 이미지 넣기*/}
            </div>
        </>
    );
}
export default Content1tab;
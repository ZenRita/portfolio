import { useState } from "react";
import Content1tab1 from "./Content1tab1";
import Content1tab2 from "./Content1tab2";
import Content1tab3 from "./Content1tab3";

import Content1tab from "./Content1tab";

const tabCont = [
    <Content1tab1/>,        
    <Content1tab2/>,
    <Content1tab3/>
];
 
const Content1 = () => {
    
    const tabMenu = ["Runnig", "Athletic", "Arrivals"];

    const [viewIndex, setViewIndex] = useState(0);
    //클릭한 곳의 속성을 추출하여 해당하는 콤포넌트를 가져온다.
    /*
    const tabClicked = e => {
        console.log("버튼 클릭 상태");
        console.log(e.target);  //클릭한 버튼의 영역
        console.log(e.target.getAttribute("data-index"));  //0 | 1 | 2
        const index = e.target.getAttribute("data-index");  //0 | 1 | 2
        setViewIndex(index);
    }
    */
    const tabClicked = (e, index) => {
        const tabBtnGroup = document.querySelectorAll(".tab-btn button");
        console.log(tabBtnGroup);

        for(const v of tabBtnGroup){
            v.classList.remove("on");
        }        

        const curBtn = e.target;
        curBtn.classList.add("on");

        console.log(index);
        setViewIndex(index);
    }

    return (
        <>
            <div className="tab-space wrap-1 pt-60">
                {/* 탭버튼 공간 */}
                <ul className="tab-btn d-flex">
                    {tabMenu.map((v, i) => (
                        
                        <li className="w-col-3 h-40" key={i}>
                            <button 
                            className={i === 0 ? "w-100-per h-100-per on" : "w-100-per h-100-per"} data-index={i} onClick={(e) => tabClicked(e, i)}>{v}</button>
                        </li>
                        
                    ))}
                </ul>
                {/* 탭콘텐츠 공간 - 인덱스번호에 따른 컴포넌트 불러오기 */}
                {/* <div className="tab-cont">
                    {tabCont[viewIndex]}
                </div> */}

                {/* 탭콘텐츠 공간 - props를 활용한 하나의 컴포넌트에 인덱스 번호 전달하여 자식 컴포넌트에서 처리시키기*/}
                <div className="tab-cont">
                    <Content1tab indexDepth1={viewIndex} dataIndex="0" />
                </div>

            </div>


        </>
    );

}
export default Content1;


import React, {useState} from 'react'

export default function SelfStudy3() {
  const [studentName, setStudentName] = useState(); // input학생이름 넣기
  const [studentList, setStudentList] = useState([]); // 학생이름저장된것을 담는 리스트
  // 인풋에입력하는 값넣기
  const handleNameInput = (e) => {
    setStudentName(e.target.value);
  }
  // 위에서넣은값과 이전값을함께 리스트에 담기
  const handlePlusBtn = (prevState) => {
    setStudentList( (prevState) => { //학생리스트에 학생이름state넣기 (학생이름state에 이전값을포함해서 담기)
        return [studentName, ...prevState]
    })
  }
  //학생이름담긴리스트 배열초기화
  const handleResetBtn = () => {
    setStudentList([])
  }
  return (
    <>
    <div>
      <input type="text" className='input_student_name' placeholder='학생이름을입력해주세요.' onChange={handleNameInput}/>
      <button className='btn_add_student' onClick={handlePlusBtn}>추가하기</button>
    </div>
    <div>
      <button className='btn_reset_student' onClick={handleResetBtn}>전체 초기화</button>
    </div>
    <div>
      <h3>학생 리스트</h3>
      <p>
        { !studentList.length ? '등록된 학생 이름이 없습니다.' :
          studentList.map( (name, idx) => {
            return <p key={idx}> {idx}번 {name} </p>
          })
        }
      </p>
    </div>
    </>
  )
}

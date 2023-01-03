import "./Account.css";

function Account() {
  return (
    <div className="account_form">
      <h2 className="account_title">에브리타임 회원가입</h2>
      <p className="account_desc">
        에브리타임 계정으로 <strong>캠퍼스픽,에브리타임</strong> 등<br />
        다양한 대학생 서비스를 모두 이용하실 수 있습니다.
      </p>
      <form action="" method="">
        <h2 className="account_title">학교 선택</h2>

        <div className="account_input">
          <label for="year" className="year_label">입학년도</label>
          <select id="year">
            <option disabled selected>연도 선택 (학번)</option>
            <option value="2023">2023학번</option>
          </select>
        </div>

        <div className="account_input">
          <label for="school" className="school_label">학교</label>
          <input type="text" id="school" placeholder="학교 이름을 검색하세요." />
          <button type="submit">다음</button>
        </div>
      </form>
    </div>
  )
}

export default Account;
import "./Account.css";
import "../App.css";

function Account() {
  return (
    <div>
      <h2>에브리타임 회원가입</h2>
      <p>
        에브리타임 계정으로 <strong>캠퍼스픽,에브리타임</strong> 등<br />
        다양한 대학생 서비스를 모두 이용하실 수 있습니다.
      </p>
      <form action="" method="">
        <h2>학교 선택</h2>
        <label for="year">입학년도</label>
        <select id="year">
          <option value="2023">2023학번</option>
        </select>
      </form>
    </div>
  )
}

export default Account;
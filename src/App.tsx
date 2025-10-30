/* 
 * font Pretendard tailwindcss에 전체 적용하기
 * color 이름 정하기
*/


function App() {
  return (
    <div className="w-full lg:w-4/5 h-full">
      <header className="p-5">
        <div className="w-8 h-8">
          <img
            src="https://stauter-web-dev.vercel.app/_next/static/media/Logo_Stauter.61da2b22.svg" alt="로고"
            className="w-full h-full"
          />
        </div>
      </header>

      <main className="w-full flex justify-center">
        <div id="container" className="flex flex-col items-center min-w-96 max-w-7xl">
          <div id="imageWrap" className="w-20 h-20 mb-6">
            <img src="https://stauter-web-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImg_main.66654e82.png&w=256&q=100" alt="아이콘" />
          </div>
          <div id="textWrap">
            <p className="text-center mb-2 font-[Pretendard] text-[22px] leading-9 font-bold">
              <span className="bg-clip-text bg-linear-to-r from-[rgb(255,115,148)] to-[rgb(118_108_255)] text-transparent">
                IT 스타터
              </span>
              를 위한 가이드 <br />
              스타우터
            </p>
            <p className="mb-4 text-center text-[13px] leading-6 font-[Pretendard] font-light">
              <b className="font-bold" >아웃소싱 제안에 필요한 문서</b>를 간편하게 정리하기! <br />
              스타우터 테스트를 통해 요구사항 정의서부터 기능구조도, <br />
              예시 화면까지 무료로 받아보세요!
            </p>
          </div>
          <div id="buttonWrap" className="w-full">
            <button className="w-full font-[Pretendard] font-bold text-white bg-[rgb(104_92_255)] py-4 rounded-xl mb-4 leading-6">
              지금 바로 시작하기
            </button>
          </div>
          <div id="detail" className="w-full text-[rgba(0,0,0,.65)] font-[Pretendard] font-light text-xs">
            <table className="w-full">
              <tr>
                <td>예상 소요시간</td>
                <td>약 8분 ~ 12분</td>
              </tr>
              <tr>
                <td>추천 이용자</td>
                <td>초기 기획을 완료하 IT 서비스 제작자</td>
              </tr>
            </table>
          </div>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App

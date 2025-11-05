/* 변경 사항
 * font Pretendard tailwindcss 적용 o
 * color 이름 변경 o
 * header 분리하기 o
 * footer 분리하기
 * 디자인 변경  
 *  1. 아이콘 눌렀을 때 홈으로 이동
 *  2. 버튼 커서 모양 변경
*/

import Header from "@common/Header"

function App() {
  return (
    <div className="w-full h-dvh">
      <Header />

      <main className="w-full h-full md:px-28 flex justify-center items-center ">
        <div id="container" className="flex flex-col grow max-w-7xl items-center md:items-start p-5">
          <div id="imageWrap" className="w-20 h-20 mb-8">
            <img src="https://stauter-web-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImg_main.66654e82.png&w=256&q=100" alt="아이콘" />
          </div>
          <div id="textWrap">
            <p className="w-2xs md:w-full break-all px-6 md:px-0 text-center md:text-start mb-6 lg:mb-4  text-xl md:text-3xl leading- font-bold"> 
              <span className="bg-clip-text bg-linear-to-r from-BlushPink to-MysticIndigo text-transparent">
                배드민턴{' '}
              </span>
              대진표를 원하는대로 만들고 싶다고요?
            </p>
            <div className="w-2xs md:w-xl break-all mb-4 text-center md:text-start text-sm md:text-base leading-10  font-light">
              <p>🏸 경기에서 볼 여러 팀의 <b className="font-bold" >대진표를 모아보기!</b></p>
              <p>❤️ <b className="font-bold" >원하는 클럽</b> 대진표를 한번에 모아놓고 살펴봐요</p>
              <p>
                😊 각 경기를 일일히 검색하지 않고 <b className="font-bold">한눈에 파악할 수 있어서 편리해요</b>
              </p>

            </div>
          </div>
          <div id="buttonWrap" className="w-full">
            <button className="w-full   font-bold text-white bg-RoyalAmethyst py-4 rounded-xl mb-4 leading-6">
              지금 바로 시작하기
            </button>
          </div>
          <div id="detail" className="w-full text-[rgba(0,0,0,.65)]  font-light text-xs">
            <table className="w-full border-separate border-spacing border-spacing-4 md:border-spacing-6">
              <tr>
                <td>사용 API</td>
                <td>스포넷</td>
              </tr>
              <tr>
                <td className="">예상 소요시간</td>
                <td>약 8분 ~ 12분</td>
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

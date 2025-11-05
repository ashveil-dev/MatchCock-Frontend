import { useState } from "react";

function FloatMenu() {
    const [mobileMenuButtonClicked, setMobileMenuButtonClicked] = useState(false);

    const onMobileMenuButtonClick = () => setMobileMenuButtonClicked(b => !b);
    
    return (
        <nav className="h-full fixed right-0 bottom-0 flex flex-col-reverse justify-start gap-6">
            <div
                onClick={onMobileMenuButtonClick}
                className="w-15 h-15 box-content p-2 flex justify-center items-center rounded-2xl shadow-2xl bg-white opacity-80 text-black text-2xl font-bold  cursor-pointer">
                메뉴
            </div>
            <div
                id="menuWrap"
                style={{ scale: mobileMenuButtonClicked ? "1" : "0" }}
                className="transition-transform origin-bottom duration-150 shadow-2xl rounded-2xl flex flex-col gap-5 py-3 px-2"
            >
                <div
                    id="tournament"
                    tabIndex={0}
                    // style={{"backgroundPosition" : "-3px -203px"}}
                    className="w-20 h-20 shrink-0 
                                bg-size-[300px] bg-position-[-3px_-23px] hover:bg-position-[-3px_-108px] focus:bg-position-[-3px_-108px] 
                                bg-[url('assets/images/MenuSprite.png')] bg-no-repeat cursor-pointer"
                />

                <div
                    id="club"
                    tabIndex={0}
                    // style={{"backgroundPosition" : "-75px -203px"}}
                    className="w-20 h-20 shrink-0
                            bg-size-[300px] 
                                bg-position-[-75px_-23px] hover:bg-position-[-75px_-108px] focus:bg-position-[-75px_-108px] 
                                bg-[url('assets/images/MenuSprite.png')] bg-no-repeat cursor-pointer"
                />
                <div
                    id="team"
                    tabIndex={0}
                    // style={{"backgroundPosition" : "-148px -203px"}}
                    className="w-20 h-20 shrink-0
                            bg-size-[300px] 
                                bg-position-[-148px_-23px] hover:bg-position-[-148px_-108px] focus:bg-position-[-148px_-108px] 
                                bg-[url('assets/images/MenuSprite.png')] bg-no-repeat cursor-pointer"
                />
                <div
                    id="schedule"
                    tabIndex={0}
                    // style={{"backgroundPosition" : "-221px -203px"}}
                    className="w-20 h-20 shrink-0
                            bg-size-[300px] 
                                        bg-position-[-221px_-23px] hover:bg-position-[-221px_-108px] focus:bg-position-[-221px_-108px] 
                                bg-[url('assets/images/MenuSprite.png')] bg-no-repeat cursor-pointer"
                />
            </div>

        </nav>
    )
}

export default FloatMenu;
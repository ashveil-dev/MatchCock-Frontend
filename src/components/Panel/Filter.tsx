import { motion, AnimatePresence } from "motion/react";

interface IProps {
    isOpen: boolean,
    onClose: () => void
}

function FilterPanel({
    isOpen,
    onClose,
}: IProps) {
    if (!isOpen) {
        return <></>
    }

    return (
        <>
            <div
                onClick={onClose}
                className="fixed right-0 top-0 w-dvw h-dvh bg-gray-50/70"
            />
            <AnimatePresence>
                {/* 드로어 패널 */}
                <motion.div
                    className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl rounded-l-2xl flex flex-col"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 150, damping: 18 }}
                >
                    <div className="flex items-center justify-between p-4 border-b border-b-gray-200">
                        <h2 className="text-lg font-semibold">필터</h2>
                        <button className="cursor-pointer" onClick={onClose}>✕</button>
                    </div>

                    <div className="p-4 space-y-5 overflow-y-auto grow ">
                        <div className="border-b border-b-gray-100 pb-6">
                            <h3 className="text-xl font-bold mb-2">상태</h3>
                            <div className="flex gap-2 justify-self-end">
                                <button className="p-4 py-2 shadow-2xs text-black hover:text-white border border-gray-100/50 cursor-pointer hover:bg-BlushPink rounded-2xl text-sm">예정</button>
                                <button className="p-4 py-2 shadow-2xs text-black hover:text-white border border-gray-100/50 cursor-pointer hover:bg-blue-300 rounded-2xl text-sm">진행</button>
                                <button className="p-4 py-2 shadow-2xs text-black hover:text-white border border-gray-100/50 cursor-pointer hover:bg-MysticIndigo rounded-2xl text-sm">종료</button>
                            </div>
                        </div>

                        <div>
                            <div className="border-b border-b-gray-100 pb-6">
                                <h3 className="col-span-2 text-xl font-bold">기간</h3>
                                <div className="col-span-6 ">
                                    <div className="grid grid-cols-4 items-center justify-center mb-4">
                                        <span className="col-start-2 col-span-1 text-sx font-semibold">시작</span>
                                        <span className="col-span-2">
                                            <input type="date" className="bg-white px-4 py-2 rounded-2xl border border-zinc-500/50" />
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-4 items-center">
                                        <span className="col-start-2 col-span-1 text-sx font-semibold">종료</span>
                                        <span className="col-span-2">
                                            <input type="date" className="bg-white px-4 py-2 rounded-2xl border border-zinc-500/50" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 하단 고정 버튼 */}
                    <div className="p-4 border-t flex gap-2">
                        <button className="flex-1 border rounded-lg py-2 cursor-pointer">초기화</button>
                        <button className="flex-1 bg-linear-to-r from-pink-500 to-purple-500 
                                                            text-white rounded-lg py-2 cursor-pointer">
                            적용하기
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default FilterPanel;
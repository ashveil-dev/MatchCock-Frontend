import { motion, AnimatePresence } from "motion/react";

interface IProps {
    isOpen: boolean,
    onClose: () => void
}

function AlignPanel({
    isOpen,
    onClose,
}: IProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* 드로어 패널 */}
                    <motion.div
                        className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl rounded-l-2xl flex flex-col"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 150, damping: 18 }}
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-lg font-semibold">정렬</h2>
                            <button className="cursor-pointer" onClick={onClose}>✕</button>
                        </div>

                        <div className="p-4 space-y-5 overflow-y-auto grow">
                            <div className="grid grid-cols-2 items-center gap-4">
                                <h3 className="font-medium mb-2">대회명</h3>
                                <select className="rounded-lg p-2 font-bold">
                                    <option value="" disabled selected hidden>선택하기</option>
                                    <option className="">올림차순</option>
                                    <option className="">내림차순</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 items-center gap-4">
                                <h3 className="font-medium mb-2">대회 일시</h3>
                                <select className="rounded-lg p-2 font-bold">
                                    <option value="" disabled selected hidden>선택하기</option>
                                    <option>올림차순</option>
                                    <option>내림차순</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 items-center gap-4">
                                <h3 className="font-medium mb-2">등록일</h3>
                                <select className="rounded-lg p-2 font-bold">
                                    <option value="" disabled selected hidden>선택하기</option>
                                    <option value="">올림차순</option>
                                    <option>내림차순</option>
                                </select>
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
                </>
            )}
        </AnimatePresence>
    )
}

export default AlignPanel;
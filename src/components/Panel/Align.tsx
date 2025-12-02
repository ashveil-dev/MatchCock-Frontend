import useTournamentStore from "@stores/useTournamentStore";
import { motion, AnimatePresence } from "motion/react";
import { useCallback, useState, type ChangeEvent, type FormEvent } from "react";

interface IProps {
    isOpen: boolean,
    onClose: () => void
}

function AlignPanel({
    isOpen,
    onClose,
}: IProps) {
    const { setOrder } = useTournamentStore();
    const [nameOrder, setNameOrder] = useState("");
    const [dateOrder, setDateOrder] = useState("");
    const [regOrder, setRegOrder] = useState("");

    const onNameOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setNameOrder(e.currentTarget.value)
    }

    const onDateOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setDateOrder(e.currentTarget.value)
    }

    const onRegOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setRegOrder(e.currentTarget.value)
    }

    const onReset = () => {
        setNameOrder("");
        setDateOrder("");
        setRegOrder("");
    }

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOrder({
            name: nameOrder,
            date: dateOrder,
            reg: regOrder
        })

        onClose();
    }, [nameOrder, dateOrder, regOrder])

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
                {(
                    < motion.form
                        className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl rounded-l-2xl flex flex-col"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        onReset={onReset}
                        onSubmit={onSubmit}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-lg font-semibold">정렬</h2>
                            <button className="cursor-pointer" onClick={onClose}>✕</button>
                        </div>

                        <div className="p-4 space-y-5 overflow-y-auto grow">
                            <div className="grid grid-cols-2 items-center gap-4">
                                <h3 className="font-medium mb-2">대회명</h3>
                                <select value={nameOrder} onChange={onNameOrderChange} className="rounded-lg p-2 font-bold">
                                    <option value="">선택하기</option>
                                    <option value="asc">올림차순</option>
                                    <option value="desc">내림차순</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 items-center gap-4">
                                <h3 className="font-medium mb-2">대회 일시</h3>
                                <select value={dateOrder} onChange={onDateOrderChange} className="rounded-lg p-2 font-bold">
                                    <option value="">선택하기</option>
                                    <option value="asc">올림차순</option>
                                    <option value="desc">내림차순</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 items-center gap-4">
                                <h3 className="font-medium mb-2">등록일</h3>
                                <select value={regOrder} onChange={onRegOrderChange} className="rounded-lg p-2 font-bold">
                                    <option value="">선택하기</option>
                                    <option value="asc">올림차순</option>
                                    <option value="desc">내림차순</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-4 border-t flex gap-2">
                            <button type="reset"
                                className="flex-1 border rounded-lg py-2 cursor-pointer">초기화</button>
                            <button type="submit"
                                className="flex-1 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-lg py-2 cursor-pointer"
                            >
                                적용하기
                            </button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence >
        </>
    )
}

export default AlignPanel;
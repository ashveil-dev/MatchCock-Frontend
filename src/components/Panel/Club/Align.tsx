import useTournamentStore from "@stores/useTournamentStore";
import { motion, AnimatePresence } from "motion/react";
import { useCallback, useState, type ChangeEvent, type FormEvent } from "react";

interface IProps {
    isOpen: boolean,
    setAlignOption : (_alignOption : AlignOptionType) => void
    onClose: () => void
}

export type AlignOptionType = {
    name : string,
    total : string,
}

function AlignPanel({
    isOpen,
    setAlignOption,
    onClose,
}: IProps) {
    const [nameOrder, setNameOrder] = useState("");
    const [totalOrder, setTotalOrder] = useState("");
    const [selectOrder, setSelectOrder] = useState("");

    const onNameOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setNameOrder(e.currentTarget.value)
    }

    const onTotalOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTotalOrder(e.currentTarget.value)
    }

    const onSelectOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectOrder(e.currentTarget.value)
    }

    const onReset = () => {
        setNameOrder("");
        setTotalOrder("");
        setSelectOrder("");
        setAlignOption({
            name : "",
            total : "",
        })
    }

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAlignOption({
            name: nameOrder,
            total: totalOrder,
        })

        onClose();
    }, [nameOrder, totalOrder, selectOrder])

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
                                <h3 className="font-medium mb-2">클럽명</h3>
                                <select value={nameOrder} onChange={onNameOrderChange} className="rounded-lg p-2 font-bold">
                                    <option value="">선택하기</option>
                                    <option value="asc">올림차순</option>
                                    <option value="desc">내림차순</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 items-center gap-4">
                                <h3 className="font-medium mb-2">팀 총원</h3>
                                <select value={totalOrder} onChange={onTotalOrderChange} className="rounded-lg p-2 font-bold">
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
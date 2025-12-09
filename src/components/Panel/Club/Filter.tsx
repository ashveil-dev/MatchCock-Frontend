import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import { useState, type FormEvent } from "react";

export type FilterOptionType = {
    selected: boolean,
    unSelected: boolean,
    age: number[],
    group: string[],
    matchName: string[]
}

interface IProps {
    isOpen: boolean,
    onClose: () => void,
    setFilterOption: (_filterOption: FilterOptionType) => void
    filterOption: {
        selected: boolean,
        unSelected: boolean,
        age: number[],
        group: string[],
        matchName: string[]
    }
}

const groupNameArray = ["A", "B", "C", "D", "E"]
const matchNameArray = ["A", "M", "F"]

function FilterPanel({
    isOpen,
    filterOption,
    setFilterOption,
    onClose,
}: IProps) {
    const [selected, setSelected] = useState(false);
    const [unSelected, setUnSelected] = useState(false);
    const [age, setAge] = useState<number[]>([]);
    const [group, setGroup] = useState<string[]>([]);
    const [matchName, setMatchName] = useState<string[]>([]);

    const onReset = () => {
        setSelected(false);
        setUnSelected(false);
        setAge([]);
        setGroup([]);
        setMatchName([]);
    }

    const onClickSelectedButton = () => {
        setSelected(s => !s);
    }

    const onClickUnSelectedButton = () => {
        setUnSelected(u => !u)
    }

    const onAgeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const _age = parseInt(e.currentTarget.value, 10)

        if (age.includes(_age)) {
            setAge(age.filter(a => a !== _age));
        } else {
            setAge([...age, _age])
        }
    }

    const onGroupClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const _group = e.currentTarget.value
        if (group.includes(_group)) {
            setGroup(group.filter(g => g !== _group));
        } else {
            setGroup([...group, _group])
        }
    }

    const onMatchNameClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const _matchName = e.currentTarget.value
        if (matchName.includes(_matchName)) {
            setMatchName(matchName.filter(m => m !== _matchName));
        } else {
            setMatchName([...matchName, _matchName])
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFilterOption({
            selected,
            unSelected,
            age,
            group,
            matchName
        })
        onClose();
    }

    if (!isOpen) {
        return <></>
    }

    return (
        <>
            <div
                onClick={onClose}
                className="fixed right-0 top-0 w-dvw h-dvh bg-gray-50/70 z-0"
            />
            <AnimatePresence>
                <motion.form
                    onReset={onReset}
                    onSubmit={onSubmit}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 150, damping: 18 }}
                    className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-10 shadow-2xl rounded-l-2xl flex flex-col"
                >
                    <div className="flex items-center justify-between p-4 border-b border-b-gray-200">
                        <h2 className="text-lg font-semibold">필터</h2>
                        <button className="cursor-pointer" onClick={onClose}>✕</button>
                    </div>

                    <div className="p-4 space-y-5 overflow-y-auto grow ">
                        <div className="border-b border-b-gray-100 pb-6">
                            <h3 className="text-xl font-bold mb-2">선택</h3>
                            <div className="flex justify-end gap-2">
                                <button type="button"
                                    className={clsx("p-4 py-2 shadow-2xs text-black hover:text-white border border-gray-100/50 cursor-pointer rounded-2xl text-sm",
                                        !selected ? "text-black hover:text-white hover:bg-FairyBlue" : "text-white bg-FairyBlue"
                                    )}
                                    onClick={onClickSelectedButton}>선택</button>
                                <button type="button"
                                    className={clsx("p-4 py-2 shadow-2xs text-black hover:text-white border border-gray-100/50 cursor-pointer rounded-2xl text-sm",
                                        !unSelected ? "text-black hover:text-white hover:bg-BlushPink" : "text-white bg-BlushPink"
                                    )}
                                    onClick={onClickUnSelectedButton}>미선택</button>

                            </div>
                        </div>
                        <div className="border-b border-b-gray-100 pb-6">
                            <h3 className="text-xl font-bold mb-2">나이</h3>
                            <div className="flex justify-end gap-2 flex-wrap">
                                {
                                    Array
                                        .from({ length: 10 }, (_, i) => (i + 1) * 10)
                                        .map(i => (
                                            <button
                                                key={i}
                                                value={i}
                                                type="button"
                                                className={clsx("p-4 py-2 shadow-2xs text-black hover:text-white border border-gray-100/50 cursor-pointer rounded-2xl text-sm",
                                                    !age.includes(i) ? "text-black hover:text-white hover:bg-MysticIndigo" : "text-white bg-MysticIndigo"
                                                )}
                                                onClick={onAgeClick}>{i}대</button>
                                        ))
                                }
                            </div>
                        </div>
                        <div className="border-b border-b-gray-100 pb-6">
                            <h3 className="text-xl font-bold mb-2">등급</h3>
                            <div className="flex justify-end gap-2 flex-wrap">
                                {
                                    groupNameArray.map(_group => (
                                        <button
                                            key={_group}
                                            value={_group}
                                            type="button"
                                            className={clsx("p-4 py-2 shadow-2xs text-black hover:text-white border border-gray-100/50 cursor-pointer rounded-2xl text-sm",
                                                !group.includes(_group) ? "text-black hover:text-white hover:bg-fuchsia-300" : "text-white bg-fuchsia-300"
                                            )}
                                            onClick={onGroupClick}>{_group}조</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="border-b border-b-gray-100 pb-6">
                            <h3 className="text-xl font-bold mb-2">복식 유형</h3>
                            <div className="flex justify-end gap-2 flex-wrap">
                                {
                                    matchNameArray.map(_matchName => (
                                        <button
                                            key={_matchName}
                                            value={_matchName}
                                            type="button"
                                            className={clsx("p-4 py-2 shadow-2xs text-black hover:text-white border border-gray-100/50 cursor-pointer rounded-2xl text-sm",
                                                !matchName.includes(_matchName) ? "text-black hover:text-white hover:bg-emerald-300" : "text-white bg-emerald-300"
                                            )}
                                            onClick={onMatchNameClick}>
                                            {_matchName === "A" ? "혼성" :
                                                _matchName === "M" ? "남자" : "여자"
                                            }복식</button>
                                    ))
                                }
                            </div>
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
            </AnimatePresence >
        </>
    )
}

export default FilterPanel;
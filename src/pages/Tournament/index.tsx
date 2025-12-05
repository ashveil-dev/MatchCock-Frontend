import PageMode from "./PageMode"
import InfiniteMode from "./InfiniteMode"
import { useState } from "react";

export default function Tournament() {
    const [type, setType] = useState<"page" | "infinite">("page");

    return type === "page"
        ? <PageMode type={type} setType={setType} />
        : <InfiniteMode type={type} setType={setType} />
}
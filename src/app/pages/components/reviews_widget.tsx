import {FC} from "react"

type ReviewType = {
    userName: string,
    content: string,
}

const ReviewWidget: FC<ReviewType> = ({userName, content}) => {
    return (
        <div className="rounded-xl border border-gray-200 p-2 reviewWidget">
            {/* owner name */}
                <h1 className="text-xl  text-black p-4">
                {userName}
            </h1>
            {/* details */}
            <h3 className="text-base font-extralight text-black py-4">
                {content}
            </h3>
        </div>
    )
}

export default ReviewWidget
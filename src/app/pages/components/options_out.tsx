import { FC } from "react";

type OtherOptionsType = {
    title: string;
    button: string;
    image: string;
};

{/* items types widget */}
const OptionType: FC<OtherOptionsType> = ({ title, button, image }) => {
    {/* set bg of the phone */}
    return (
        <div
            className="rounded-lg p-8 md:h-2/3 flex flex-col items-start justify-start  md:w-1/4  bg-cover bg-center slideInBanners"
            style={{ backgroundImage: `url(images/types/${image})` }}
        >
            {/* name of item */}
            <h1 className="text-2xl font-semibold text-white mb-4">
                {title}
            </h1>
             {/* order button */}
            <button className="rounded-3xl border border-white text-white py-2 px-4 mb-4 orderButton">
                {button}
            </button>
        </div>
    );
};

export default OptionType;

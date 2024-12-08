import { FC } from 'react';

type ItemDisplayType = {
    icon: string;
    content: string;
    title: string;
    subTitle: string
};

const ItemDisplay: FC<ItemDisplayType> = ({ icon, content, title, subTitle }) => {
    return (
        <div className="border rounded-xl flex items-center flex-col justify-center p-4 detailsWidget">
            <img src={icon} alt={content} className="w-8 h-8 mb-2" />
            <h1 className="text-lg font-bold text-black text-center">{title}</h1>
            <h1 className="text-base font-light text-gray-700 text-center py-2">{subTitle}</h1>
            <h1 className="text-sm font-extralight text-black text-center">{content}</h1>
        </div>
    );
};

export default ItemDisplay;

import ItemDisplay from "./components/item_widget";
import HotLine from "./components/hot_line";

export default function WhatTheySaySection() {
    return (
        <section className=" bg-white" id="whatTheySay">
            {/* section title */}
            <div className="border p-4 rounded-xl">
                <h1 className="pt-8 pl-8 text-black font-semibold text-lg">
                    What’s New In
                </h1>
            </div>

            {/* data display */}
            <div className="flex dm:justify-center md:flex-row flex-col items-start p-12 md:space-x-8 md:space-y-0 space-y-8 space-x-0">
                {/* cpu box display */}
                <ItemDisplay 
                    icon="icons/cpu.png" 
                    title="Snapdragon 8 Gen 3" 
                    subTitle="12GB RAM"
                    content="Seamless multitasking and enhanced gaming experience with advanced AI capabilities" 
                />
                {/* camera box display */}
                <ItemDisplay 
                    icon="icons/camera.png" 
                    title="200 MP Primary Sensor for Stunning Detail" 
                    subTitle="10x Optical Zoom for Close-up Shots Without Quality Loss"
                    content="8K video recording, Super Steady mode, and enhanced Night Mode for low-light photography" 
                />
                {/* charging box display */}
                <ItemDisplay 
                    icon="icons/charging.png" 
                    title="5000mAh for All-Day Usage" 
                    subTitle=""
                    content="Fast charging and wireless charging options ensure you stay powered up quickly" 
                />
            </div>
            <div className="p-14">
                {/* new design material line */}
            <HotLine />
            </div>
        </section>
    );
}

import OptionType from "./components/options_out";

export default function OptionsSections() {
    return (
        <section className="h-screen w-screen flex flex-col md:flex-row justify-around justify-items-center items-center px-12" id="options">
            {/* first ultra edition phone */}
            <OptionType title="Galaxy S24 Ultra" button="Buy Now" image="1.jpg" />
            {/* for business */}
            <OptionType title="Galaxy S24 Ultra for business" button="Buy Now" image="2.jpg" />
            {/* normal and plus */}
                <OptionType title="Galaxy S24 | S24+" button="Buy Now" image="3.jpg" />
            
           
        </section>
    );
}

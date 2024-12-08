export default function MoreSection() {
    return (
        <section className="h-screen w-screen flex items-center justify-around px-2" id="more">
            <div className="bg-gray-100 rounded-xl flex w-full max-w-4xl shadow-lg slideInBigBanners flex-col md:flex-row">
                {/* Content Section */}
                <div className="flex flex-col justify-center items-start p-8 md:w-1/2">
                    <h1 className="text-2xl font-semibold text-black mb-4">
                        Get Accessories for your phone
                    </h1>
                    <button className="rounded-xl border border-black text-black py-2 px-4 mb-4 orderButton">
                        Explore More
                    </button>
                </div>
                {/* Background Image Section */}
                <img src="/images/exo.jpg" className="md:w-1/2 h-full rounded-l-xl bg-cover bg-center" alt="" />
            </div>
        </section>
    );
}

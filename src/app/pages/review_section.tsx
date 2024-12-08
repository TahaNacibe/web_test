import ReviewWidget from "./components/reviews_widget";

export default function ReviewsSection() {
    // Sample reviews data
    const reviews = [
        { userName: "Taha", content: "I can't afford it." },
        { userName: "Alice", content: "Absolutely love it!" },
        { userName: "Bob", content: "Best purchase ever!" },
        { userName: "Charlie", content: "Not worth the price." },
        { userName: "Dana", content: "It's okay, but could be better." },
        { userName: "Taha", content: "I can't afford it." },
        { userName: "Alice", content: "Absolutely love it!" },
        { userName: "Bob", content: "Best purchase ever!" },
        { userName: "Charlie", content: "Not worth the price." },
        { userName: "Dana", content: "It's okay, but could be better." },
        { userName: "Taha", content: "I can't afford it." },
        { userName: "Alice", content: "Absolutely love it!" },
        { userName: "Bob", content: "Best purchase ever!" },
        { userName: "Charlie", content: "Not worth the price." },
        { userName: "Dana", content: "It's okay, but could be better." },
        { userName: "Taha", content: "I can't afford it. It's too expensive for my budget." },
        { userName: "Alice", content: "Absolutely love it! This product exceeded my expectations and I would recommend it to anyone." },
        { userName: "Bob", content: "Best purchase ever! The features are incredible and it's very user-friendly." },
        { userName: "Charlie", content: "Not worth the price. I expected more quality for what I paid." },
        { userName: "Dana", content: "It's okay, but could be better. I found a few issues that need to be addressed." },
        { userName: "Eve", content: "Great product! It works well and has all the features I need." },
        { userName: "Frank", content: "Decent but not perfect. I had some issues setting it up." },
    ];

    return (
        <section className="flex flex-col items-start h-auto w-screen p-4 bg-white" id="reviews">
            {/* title */}
            <h1 className="text-black text-lg font-extralight  p-12">
                Some Users Reviews on The Phone
            </h1>
            {/* reviews body */}
            <div className="flex flex-wrap justify-start w-full">
                {reviews.map((review, index) => (
                    <div
                    key={index}
                        className="p-2">
                        {/* each item render a widget */}
                        <ReviewWidget userName={review.userName} content={review.content} />
                    </div>
                ))}
            </div>
        </section>
    );
}

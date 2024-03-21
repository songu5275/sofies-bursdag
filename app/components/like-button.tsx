import { useState, useEffect } from 'react';

export default function LikeButton() {
    const [likeCount, setLikeCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        // Fetch the like count from the textile file or any other source
        fetchLikeCount();
    }, []);

    const fetchLikeCount = () => {
        // Fetch like count from the textile file or any other source
        // This could be similar to the previous example

        // For demonstration, setting initial like count to 0
        setLikeCount(0);

        // Check local storage if user has already liked
        const userHasLiked = localStorage.getItem('hasLiked');
        if (userHasLiked === 'true') {
            setHasLiked(true);
            setLikeCount(1); // Set like count to 1 if user has liked
        }
    };

    const handleLikeClick = () => {
        if (hasLiked) {
            // Unlike: Decrement like count only if it's greater than 0
            if (likeCount > 0) {
                const updatedLikeCount = likeCount - 1;
                setLikeCount(updatedLikeCount);
                localStorage.removeItem('hasLiked');
                setHasLiked(false);
                // You may also update the like count on the server or in the textile file here
            }
        } else {
            // Like: Increment like count and update local storage
            const updatedLikeCount = likeCount + 1;
            setLikeCount(updatedLikeCount);
            localStorage.setItem('hasLiked', 'true');
            setHasLiked(true);
            // You may also update the like count on the server or in the textile file here
        }
    };

    return (
        <div>
            <button onClick={handleLikeClick} className={`rounded-full py-1 px-3 ${hasLiked ? 'bg-pink-600' : 'bg-pink-200'}`}>
                ❤️ {likeCount}
            </button>
        </div>
    );
}

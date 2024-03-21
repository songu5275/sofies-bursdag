import { useState, useEffect } from 'react';

export default function LikeButton() {
    const [likeCount, setLikeCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        // Fetch the like count from the server when the component mounts
        fetchLikeCount();
    }, []);

    const fetchLikeCount = () => {
        // Simulate fetching like count from the server (replace with your actual fetch logic)
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
                // Send a request to the server to update the like count
                updateLikeCount(updatedLikeCount);
            }
        } else {
            // Like: Increment like count and update local storage
            const updatedLikeCount = likeCount + 1;
            setLikeCount(updatedLikeCount);
            localStorage.setItem('hasLiked', 'true');
            setHasLiked(true);
            // Send a request to the server to update the like count
            updateLikeCount(updatedLikeCount);
        }
    };

    const updateLikeCount = (count:number) => {
        // Send a request to your server to update the like count
        // Replace '/update-like-count' with your server endpoint
        fetch('db/like-count.txt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ count })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update like count');
            }
        })
        .catch(error => {
            console.error('Error updating like count:', error);
        });
    };

    return (
        <div>
            <button onClick={handleLikeClick} className={`rounded-full py-1 px-3 ${hasLiked ? 'bg-pink-600' : 'bg-pink-200'}`}>
                ❤️ {likeCount}
            </button>
        </div>
    );
}

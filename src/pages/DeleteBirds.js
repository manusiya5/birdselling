import React, { useState, useEffect } from "react";
import axios from "axios";

const DeleteBirds = () => {
    const [birdsInCart, setBirdsInCart] = useState([]);

    // Fetch available birds in the cart (this can be fetched from an API)
    useEffect(() => {
        const fetchBirdsInCart = async () => {
            try {
                const response = await axios.get('/api/cart/birds'); // Fetch birds from cart API
                setBirdsInCart(response.data);
            } catch (error) {
                console.error('Error fetching birds:', error);
            }
        };

        fetchBirdsInCart();
    }, []);

    // Handle deletion of a bird from the cart
    const deleteBirdFromCart = async (birdId) => {
        try {
            // Send delete request to remove bird from the cart in backend
            await axios.delete(`/api/cart/birds/${birdId}`); // Replace with your delete endpoint
            // Remove the bird from state after successful deletion
            setBirdsInCart(birdsInCart.filter(bird => bird.id !== birdId));
            alert('Bird has been deleted from the cart!');
        } catch (error) {
            console.error('Error deleting bird:', error);
            alert('Failed to delete bird.');
        }
    };

    return (
        <div>
            <h1>Available Birds in Cart</h1>
            {birdsInCart.length === 0 ? (
                <p>No birds available in the cart.</p>
            ) : (
                <ul>
                    {birdsInCart.map((bird) => (
                        <li key={bird.id}>
                            {bird.name} - {bird.type}
                            <button onClick={() => deleteBirdFromCart(bird.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DeleteBirds;

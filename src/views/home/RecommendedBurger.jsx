import { useEffect, useState } from 'react';

function RecommendedBurger() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const url = `https://moreburger.org/ai/recommend`;
        try {
            const response = fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    user_id: localStorage.getItem('username')
                })
            })

            if (!response.ok) {

            }
        } catch (error) {

        } finally {

        }
    });
}

export default RecommendedBurger;

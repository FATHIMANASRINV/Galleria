import { useState, useEffect } from 'react';
import { BASE_URL } from '../pages/api/config';

export default function usePackages() {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        fetch(BASE_URL + 'user/getPackages')
            .then((res) => res.json())
            .then((data) => {
                if (isMounted && data.success) {
                    setPackages(data.packages);
                }
            })
            .catch((err) => console.error('Error loading packages:', err))
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return { packages, loading };
}
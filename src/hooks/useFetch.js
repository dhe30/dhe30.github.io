import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const fetchy = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(url, {...options, signal});
                const json = await res.json();
                setData(json);
                setIsLoading(json ? false : true);
                console.log(json);
            } catch (error) {
                setError(error)
                setIsLoading(false);
            }
        };
        fetchy();
        return () => {
            abortController.abort();
        }
    }, []);

    return { data, error, isLoading };
}

export default useFetch;
"use client"
import React, { useEffect, useState } from 'react'
import './styles.scss'
import ChatCard from './ChatCard'

interface IPost {
    userAvatar: string;
    title: string;
    url: string;
    id: number;
}

function ChatFeed() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const params = new URLSearchParams({ _page: String(page), _limit: '10' })
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos?${params}`)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json();
                setPosts((prevPosts) => [...prevPosts, ...data]);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    const handleObserver: IntersectionObserverCallback = (entries) => {
        const target = entries[0];
        if (target && target.isIntersecting) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(handleObserver, options)
        const loaderRef = document.getElementById('loader')

        if (loaderRef) {
            observer.observe(loaderRef)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div className='chatFeed'>
            {
                posts.map((item, index) =>
                    <ChatCard key={index} item={item} />
                )
            }
            {loading && <p id="loading-text">Loading...</p>}
            <div id="loader"></div>
        </div>
    )
}

export default ChatFeed
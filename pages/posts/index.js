import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ComponentWillMount from '../../components/ComponentWillMount';
import postsStore from '../../store/postsStore';
import API from '../api/API';

const posts = ({ data, errorCode }) => {
    const router = useRouter();
    console.log(router);
    if (errorCode) {
        return <h1>{errorCode}</h1>;
    }

    ComponentWillMount(() => postsStore.setPosts(data))

    return (
        <ul>
            {postsStore.posts.map(post => (
                <Link href={`${router.pathname}/${post.id}`} key={post.id}>
                    <a>
                        <li>
                            {post.title}
                        </li>
                    </a>
                </Link>
            ))}
        </ul>
    )
}

export async function getServerSideProps(context) {
    const { locale } = context;

    try {
        const { data } = await API.get('/posts');
        return {
            props: {
                data: data
            }
        }
    } catch (error) {
        return {
            props: {
                errorCode: error.response.status,
            },
        };
    }
}

export default posts
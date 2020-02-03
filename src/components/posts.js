import React from 'react';
import Card from './card';
import '../styles/k-grid.css';

function Posts() {
    const posts = [
        {
            id: 1,
            title: 'Title 1',
            img: 'https://picsum.photos/id/1022/400/300',
            text: 'A sample post'
        },
        {
            id: 2,
            title: 'Title 2',
            img: 'https://picsum.photos/seed/picsum/400/300',
            text: 'This is awesome'
        },
        {
            id: 3,
            title: 'Title 3',
            img: 'https://picsum.photos/id/1026/400/300',
            text: 'Whoa.. who built this'
        }
    ]

    return (
        <div>
            <div class="">
                <div class="row">
                    {posts.map(post => (
                        <div class="col-4">
                            <Card key={post.id} title={post.title} img={post.img} text={post.text} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Posts;
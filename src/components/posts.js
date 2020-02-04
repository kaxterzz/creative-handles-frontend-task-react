import React from 'react';
import Card from './card';

function Posts() {
    const posts = [
        {
            id: 1,
            title: 'Title 1',
            img: 'https://picsum.photos/id/1028/400/300',
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
        },
        {
            id: 4,
            title: 'Title 4',
            img: 'https://picsum.photos/id/1027/400/300',
            text: 'This is random'
        }
    ]

    return (
        <div>
            <div class="">
                <div class="row">
                    {posts.map(post => (
                        <div class="col-3">
                            <Card key={post.id} title={post.title} img={post.img} text={post.text} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Posts;
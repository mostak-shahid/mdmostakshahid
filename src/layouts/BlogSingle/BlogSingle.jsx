import React from 'react';
import { useParams } from 'react-router-dom';

const BlogSingle = (props) => {
    const params = useParams();
    return (
        <div>BlogSingle {params.slug}</div>
    )
}

export default BlogSingle
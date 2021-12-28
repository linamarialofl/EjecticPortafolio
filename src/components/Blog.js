import React from 'react';
import Iframe from 'react-iframe';
import "./Blog.css";

function Blog() {
    return (
        <div className="blog__conteiner">
            <Iframe url="https://ejeticonferencias.blogspot.com" className="myClassname" />
        </div>
    )
}

export default Blog

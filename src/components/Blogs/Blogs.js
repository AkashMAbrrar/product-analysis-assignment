import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='ans-container'>
            <div className='answar'>
                <h5>What is context api?</h5>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.this is uesd modern javascript librery react js.context api is an uniqe system to use data
                </p>
            </div>
            <div className='answar'>
                <h5>what is semantic tag?</h5>
                <p>Semantics is the study of the meanings of words and phrases in a language. Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a  tag indicates that the enclosed text is a paragraph. This is both semantic and presentational, because people know what paragraphs and browsers know how to display them.</p>
            </div>
        </div>
    );
};

export default Blogs;
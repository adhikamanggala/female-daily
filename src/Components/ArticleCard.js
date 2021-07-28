import React, {useEffect, useState} from 'react';

function ArticleCard(props) {

    const [author, setAuthor] = useState('');
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [published, setPublished] = useState('');

    useEffect(() => {
        if(props && props.data){
            settingData();
        }
    });

    const settingData = () => {
        setAuthor(props.data.author);
        setImg(props.data.img);
        setTitle(props.data.title);
        setPublished(props.data.published);
    }

    return(
        <div className="col-4">
            <div className="image-card ">
                <img src={img} alt='article' className="image-card-style"/>
            </div>
            <div className="article-info-container">
                <p className="title-article">{title}</p>
                <p className="username">{author} | <span className="username-time">{published}</span></p>
            </div>
        </div>
    );
};
export default ArticleCard;
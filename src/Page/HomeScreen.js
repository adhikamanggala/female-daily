import React, {useEffect, useState} from 'react';
import Navbar from '../Components/Navbar';
import ProductCard from '../Components/ProductCard';
import ArticleCard from '../Components/ArticleCard';
import GroupCard from '../Components/GroupCard';

import BGImage from '../Assets/Frame25.png';
import Video from '../Assets/video2.png';
import Video2 from '../Assets/video3.png';
import Video3 from '../Assets/video4.png';
import Nivea from '../Assets/Nivea.png';
import Ordinary from '../Assets/theordinary.png';
import BodyShop from '../Assets/bodyshop.png';
import SK2 from '../Assets/SK2.png';
import Maybe from '../Assets/Maybelline.jpeg';
import IF from '../Assets/innisfree.png';
import Apple from '../Assets/app-store.png';
import Google from '../Assets/googleplay.png';
import Logo from '../Assets/FD-Logo-Pink.png';

import axios from 'axios';
import config from '../config.json';
import Data from '../data.json';

function Home() {
    const [, setData] = useState();
    const [editorData, setEditorData] = useState();
    const [articles, setArticles] = useState();
    const [, setReview] = useState();

    useEffect(() => {
        setEditorData(Data.editorChoice);
        setArticles(Data.latestArticles);
        setReview(Data.latestReview);
        console.log(Data);
    }, []);

    // eslint-disable-next-line no-unused-vars
    const getData = async () => {
        await axios({
            method: 'GET',
            url: `${config.baseurl}/wp`,
        })
        .then(res => {
            setData(res.data);
            console.log(res, 'inires');

        })
        .catch(err => {
            console.log(err.response, 'inierr');
        });
    };

    return(
        <div>
            <Navbar />
            <div className="home">
                <div className="billboard-section">
                    <div className="top-frame">
                        <p className="frame-billboard-text">Top Frame 970x50</p>
                    </div>
                    <div className="billboard">
                        <p className="frame-billboard-text">Billboard 970x250</p>
                    </div>
                </div>
                <div className="editors-choice-section">
                    <p className="editor-text">Editor's Choice</p>
                    <p className="curated-text">Curated with love</p>
                    <div className="card-container">
                        {
                            editorData && editorData.map((res, i) => {
                                // console.log(res);
                                const data = {
                                    editor_name : res.editor,
                                    role: res.role,
                                    product_name : res.product.name,
                                    rating : res.product.rating,
                                    desc: res.product.description,
                                    img: res.product.image
                                }
                               return (
                                   <ProductCard data={data}/>
                               )
                            })
                        }
                    </div>
                </div>
                <div className="foryou-section" style={{backgroundImage: `url(${BGImage})`}}>
                    <div className="foryou-highlight">
                        <p className="foryou-title">Looking for products that are just simply perfect for you?</p>
                        <p className="foryou-desc">Here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concerns too?</p>
                        <div className="button-matches">
                            <p className="button-text">See My Matches</p>
                        </div>
                    </div>
                    <div className="card-margin">
                        <ProductCard secondary={true} />
                    </div>
                    <div className="card-margin">
                        <ProductCard secondary={true} />
                    </div> <div className="card-margin">
                        <ProductCard secondary={true} />
                    </div>
                </div>
                <div className="internal-campaign-container">
                    <div className="billboard">
                        <p className="frame-billboard-text">Billboard 970x250</p>
                    </div>
                </div>
                <div className="lates-article-section">
                    <p className="editor-text">Latest Articles</p>
                    <div className="see-more-container">
                        <p className="curated-text">So you can make better purchase decision</p>
                        <p className="seemore-text">See more {'>'}</p>
                    </div>
                    <div className="articles-container row">
                        {
                            articles && articles.map((res, i) => {
                                const data = {
                                    author: res.author,
                                    img: res.image,
                                    title: res.title,
                                    published: res.published_at
                                }
                                return (
                                    <ArticleCard data={data} />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="latest-review-section">
                    <p className="editor-text">Latest Reviews</p>
                    <div className="review-container">
                        <div className="see-more-container">
                            <p className="curated-text">So you can make better purchase decision</p>
                            <p className="seemore-text">See more {'>'}</p>
                            <div className="review-card-container">

                            </div>
                        </div>
                        <div className="mr-2">
                            <p className="frame-billboard-text">MR 2 300x250</p>
                        </div>
                    </div>
                </div>
                <div className="popular-group-section">
                    <p className="editor-text">Popular Groups</p>
                    <div className="see-more-container">
                        <p className="curated-text">Where the beauty TALK are</p>
                        <p className="seemore-text">See more {'>'}</p>
                    </div>
                    <div className="groupcaard-container">
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                    </div>
                </div>
                <div className="latest-videos-section">
                    <p className="editor-text">Latest Videos</p>
                    <div className="see-more-container">
                        <p className="curated-text">Watch and learn, ladies</p>
                        <p className="seemore-text">See more {'>'}</p>
                    </div>
                    <div className="video-container">
                        <img src={Video} alt='video' className="video-style"></img> 
                        <div className="side-video">
                            <img src={Video2} alt="video"/>
                            <img src={Video3} alt="video"/>
                        </div>
                    </div>
                </div>
                <div className="trending-section">
                    <p className="editor-text">Trending This Week</p>
                    <div className="see-more-container">
                        <p className="curated-text">See our weekly most reviewed products</p>
                    </div>
                </div>
                <div className="topbrands-section">
                    <p className="editor-text">Top Brands</p>
                    <div className="see-more-container">
                        <p className="curated-text">We all know and love</p>
                        <p className="seemore-text">See more {'>'}</p>
                    </div>
                    <div className="brand-container">
                        <img src={Nivea} alt="icon-brand" className="icon-brand"/>
                        <img src={Ordinary} alt="icon-brand" className="icon-brand"/>
                        <img src={BodyShop} alt="icon-brand" className="icon-brand"/>
                        <img src={SK2} alt="icon-brand" className="icon-brand"/>
                        <img src={Maybe} alt="icon-brand" className="maybe-brand"/>
                        <img src={IF} alt="icon-brand" className="icon-brand"/>
                    </div>
                    <p className="female-daily">Female Daily - Find everything you want to know about beauty on Female Daily</p>
                    <p className="fd-desc">Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, 
                        Beauty Workshops, anything! We are here to be your friendly solution to all things
                        beauty, inside and out!
                    </p>
                </div>
                <div className="footer">
                    <div className="footer-body">
                        <div className="first-container">
                            <p className="footer-menu">About Us</p>
                            <p className="footer-menu">Feedback</p>
                            <p className="footer-menu">Contact</p>
                        </div>  
                        <div className="first-container">
                            <p className="footer-menu">Terms & Condition</p>
                            <p className="footer-menu">Privacy Policy</p>
                            <p className="footer-menu">Help</p>
                        </div>  
                        <div className="first-container">
                            <p className="footer-menu">Awards</p>
                            <p className="footer-menu">Newsletter</p>
                        </div>  
                        <div className="download-container">
                            <p className="footer-menu">Download Our Mobile App</p>
                            <div>
                                <img src={Apple} alt="apple" className="download-logo"/>
                                <img src={Google} alt="google" className="download-logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="lower-footer">
                        <div className="copyright-container">
                            <img src={Logo} alt="logo" className="fd-logo" />
                            <p>Copyright 2015-2017 Female Daily Network - All rights reserved</p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="billboard">
                        <p className="frame-billboard-text">Bottom Frame 970x50, 486x60, 320x50</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
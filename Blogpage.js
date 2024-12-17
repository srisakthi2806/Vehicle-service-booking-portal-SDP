/*import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Blogpage.css';

const Blogpage = () => {
    
    const tags = ['Repair', 'Wheels', 'Oil', 'Vacuum', 'Paint', 'clean', 'Break', 'Battery'];
    const reviews = [
        {
          name: 'Jessica',
          date: 'December 28, 2023 At 9.00am',
          text: 'Wheelbro exceeded my expectations. The website made it so easy to schedule a service, and the team did a fantastic job. I will definitely be a returning customer.',
          avatar: 'https://thumbs.dreamstime.com/b/happy-beautiful-young-s-indian-girl-face-close-up-happy-beautiful-young-s-indian-girl-face-close-up-cheerful-female-model-woman-314823645.jpg' // Replace with actual image URL
        },
        {
          name: 'Arjun',
          date: 'November 12, 2023 At 3.00pm',
          text: 'I loved how easy it was to book a service on Wheelbro. The interface is clean and straightforward, and the service was completed perfectly. Great job!',
          avatar: 'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp' // Replace with actual image URL
        },
        {
          name: 'Sarah',
          date: 'October 06, 2023 At 7.00pm',
          text: 'The website is very intuitive, and I had no trouble booking my car service. The team at Wheelbro provided excellent service, and I appreciated the detailed updates throughout the process',
          avatar: 'https://t3.ftcdn.net/jpg/06/20/73/04/360_F_620730419_9cf73do9dxGaNJCztZPETHdB5bdrbW5D.jpg' // Replace with actual image URL
        }
      ];



  return (
    <div className="blog-container">
      <div className="blog-content">
        <img src="http://autalogic-react.themepresss.com/static/media/img-7.fa3aa719.jpg" alt="Blog" className="blog-image" />
<h4>Comments</h4>
        <div className="feedback-container">
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <img src={review.avatar} alt={review.name} className="avatar" />
          <div className="review-content">
            <h4>{review.name}</h4>
            <p className="review-date">{review.date}</p>
            <p className="review-text">{review.text}</p>
            <button className="reply-button">Reply</button>
          </div>
        </div>
      ))}
    </div>
      </div>
      <div className="sidebar">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button><FaSearch /></button>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Engine Repair (10)</li>
            <li>Oil Replacement (07)</li>
            <li>Transmission (09)</li>
            <li>Diagnostic (11)</li>
            <li>Batteries Replacement (06)</li>
            <li>Break Repair (17)</li>
          </ul>
        </div>
        <div className="recent-posts">
          
          <div className="tags-section">
      <h2>Tags </h2>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div key={index} className="tag-box">{tag}</div>
        ))}
      </div>
    </div>
          
        </div>
        <div className="comments-section">
      <h2>Post Comments</h2>
      <form>
        <div className="form-group">
          <textarea placeholder="Write Your Comments..." className="comments-textarea"></textarea>
        </div>
        
        <div className="form-group-inline">
          <input type="text" placeholder="Name" className="form-control" />
          <input type="email" placeholder="Email" className="form-control" />
        </div>
        <button type="submit" className="submit-button">Post Comment</button>
      </form>
    </div>
      </div>
      
    </div>
  );
};

export default Blogpage;*/


import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiArrowUp } from "react-icons/hi";
import './Blogpage.css';
import axios from 'axios';

const Blogpage = () => {

    const [isVisible, setIsVisible] = useState(false);
  
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);


    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ name: '', email: '', comment: '' });
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/api/users/comments')
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching comments:', error));
    }, []);

    const handleChange = (e) => {
        setNewComment({ ...newComment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/users/comments', newComment)
            .then(response => {
                setComments([...comments, response.data]);
                setNewComment({ name: '', email: '', comment: '' });
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000);
            })
            .catch(error => console.error('Error posting comment:', error));
    };

    const tags = ['Repair', 'Wheels', 'Oil', 'Vacuum', 'Paint', 'clean', 'Break', 'Battery'];
    const reviews = [
        {
            name: 'Jessica',
            date: 'December 28, 2023 At 9.00am',
            text: 'Wheelbro exceeded my expectations. The website made it so easy to schedule a service, and the team did a fantastic job. I will definitely be a returning customer.',
            avatar: 'https://thumbs.dreamstime.com/b/happy-beautiful-young-s-indian-girl-face-close-up-happy-beautiful-young-s-indian-girl-face-close-up-cheerful-female-model-woman-314823645.jpg' // Replace with actual image URL
          },
          {
            name: 'Arjun',
            date: 'November 12, 2023 At 3.00pm',
            text: 'I loved how easy it was to book a service on Wheelbro. The interface is clean and straightforward, and the service was completed perfectly. Great job!',
            avatar: 'https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp' // Replace with actual image URL
          },
          {
            name: 'Sarah',
            date: 'October 06, 2023 At 7.00pm',
            text: 'The website is very intuitive, and I had no trouble booking my car service. The team at Wheelbro provided excellent service, and I appreciated the detailed updates throughout the process',
            avatar: 'https://t3.ftcdn.net/jpg/06/20/73/04/360_F_620730419_9cf73do9dxGaNJCztZPETHdB5bdrbW5D.jpg' // Replace with actual image URL
          }
        
        
    ];

    return (
        <div className="blog-container">
            <div className="blog-content">
                <img src="http://autalogic-react.themepresss.com/static/media/img-7.fa3aa719.jpg" alt="Blog" className="blog-image" />
                <h4>Comments</h4>
                <div className="feedback-container">

                {reviews.map((review, index) => (
                    <div key={index} className="review">
                      <img src={review.avatar} alt={review.name} className="avatar" />
                      <div className="review-content">
                        <h4>{review.name}</h4>
                        <p className="review-date">{review.date}</p>
                        <p className="review-text">{review.text}</p>
                        <button className="reply-button">Reply</button>
                      </div>
                    </div>))}


                    {comments.map((comment, index) => (
                        <div key={index} className="review">
                            <div className="review-content">
                                <h4>{comment.name}</h4>
                                <p className="review-date">{comment.email}</p>
                                <p className="review-text">{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sidebar">
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <button><FaSearch /></button>
                </div>
                <div className="categories">
                    <h3>Categories</h3>
                    <ul>
                        <li>Engine Repair (10)</li>
                        <li>Oil Replacement (07)</li>
                        <li>Transmission (09)</li>
                        <li>Diagnostic (11)</li>
                        <li>Batteries Replacement (06)</li>
                        <li>Break Repair (17)</li>
                    </ul>
                </div>
                <div className="recent-posts">
                    <div className="tags-section">
                        <h2>Tags</h2>
                        <div className="tags-container">
                            {tags.map((tag, index) => (
                                <div key={index} className="tag-box">{tag}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="comments-section">
                    <h2>Post Comments</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <textarea
                                name="comment"
                                placeholder="Write Your Comments..."
                                className="comments-textarea"
                                value={newComment.comment}
                                onChange={handleChange}
                        required  ></textarea>
                        </div>
                        <div className="form-group-inline">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="form-control"
                                value={newComment.name}
                                onChange={handleChange}
                          required  />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                value={newComment.email}
                                onChange={handleChange}
                            required />
                        </div>
                        <button type="submit" className="submit-btn">Post Comment</button>
                    </form>
                </div>
                
            </div>
            {showPopup && (
                <div className="popupblog">
                    <div className="popupblog-content">
                        Thanks for your valuable time!
                    </div>
                </div>
            )}

            <div className="scroll-to-top">
            {isVisible &&
              <div onClick={scrollToTop} className="scroll-button">
                <p><HiArrowUp /></p>
              </div>
            }
          </div>

        </div>
    );
};

export default Blogpage;

import React, { Component } from 'react';
import './blog-component.scss';
import BlogItem from '../../Page/blog-item/blog-item.js';

function BlogComponent() {
  return (
    <section className="blog-component">
      <div className="bradcam_area breadcam_bg">
        <h3>blog</h3>
      </div>
      <div className='blog_area section-padding'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <BlogItem></BlogItem>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder='Search Keyword'
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Search Keyword'"></input>
                        <div className="input-group-append">
                          <button className="btn" type="button"><i className="ti-search"></i></button>
                        </div>
                      </div>
                    </div>
                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                      type="submit">Search</button>
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogComponent

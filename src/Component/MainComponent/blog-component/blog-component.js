import React, { Component } from 'react';
import single_blog_1 from '../../../Assets/images/blog/single_blog_1.png';
import './blog-component.scss'

export class BlogComponent extends Component {
  render() {
    return (
      <section className="blog-component">
        <div class="bradcam_area breadcam_bg">
          <h3>blog</h3>
        </div>
        <div className='blog_area section-padding'>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src={single_blog_1} alt=""></img>
                      <a href="#" className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>

                    <div className="blog_details">
                      <a className="d-inline-block" href="single-blog.html">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                  he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                        <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                      </ul>
                    </div>
                  </article>
                </div>
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
}

export default BlogComponent

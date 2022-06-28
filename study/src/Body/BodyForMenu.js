import 'bootstrap/dist/css/bootstrap.min.css';
import BasicTabs from '../Component/Component';
import Footer from '../Footer/footer';
import HeaderNav from '../Header/HeaderNav';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function BodyForMenu() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <HeaderNav/>
                
                <div className="container-fluid">
                    <section className="py-5">
                        <div className="container px-4 px-lg-5 mt-5">
                          <nav className="navbar navbar-light bg-light">
                            <div className="container-fluid">
                              <a className="navbar-brand" href="blank">공무원</a>
                            </div>
                          </nav>

                <BasicTabs/>

                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">게시글</h5>
                                                작성자 : 이준기
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="blank">자세히보기</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">Special Item</h5>
                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>
                                                <span className="text-muted text-decoration-line-through">$20.00</span>
                                                $18.00
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="blank">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">Special Item</h5>
                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>
                                                <span className="text-muted text-decoration-line-through">$20.00</span>
                                                $18.00
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="blank">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">Special Item</h5>
                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>
                                                <span className="text-muted text-decoration-line-through">$20.00</span>
                                                $18.00
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="blank">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="blank0.html">이전</a></li>
                            <li className="page-item"><a className="page-link" href="blank0.html">1</a></li>
                            <li className="page-item"><a className="page-link" href="blank0.html">2</a></li>
                            <li className="page-item"><a className="page-link" href="blank0.html">3</a></li>
                            <li className="page-item"><a className="page-link" href="blank0.html">다음</a></li>
                          </ul>
                        </nav>
                    </section>
                </div>

            </div>
            <Footer/>
        </div>
        );
}

export default BodyForMenu;

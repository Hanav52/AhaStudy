import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/footer';
import HeaderNav from '../Header/HeaderNav';

function FireFighter() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">

                <HeaderNav/>

                <div class="container-fluid">
                    <section class="py-5">
                        <div class="container px-4 px-lg-5 mt-5">
                          <nav class="navbar navbar-light bg-light">
                            <div class="container-fluid">
                              <a class="navbar-brand" href="blank0.html">소방</a>
                              <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                              </form>
                            </div>
                          </nav>
                            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div class="col mb-5">
                                    <div class="card h-100">
                                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        <div class="card-body p-4">
                                            <div class="text-center">
                                                <h5 class="fw-bolder">게시글</h5>
                                                작성자 : 이준기
                                            </div>
                                        </div>
                                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">자세히보기</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col mb-5">
                                    <div class="card h-100">
                                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        <div class="card-body p-4">
                                            <div class="text-center">
                                                <h5 class="fw-bolder">Special Item</h5>
                                                <div class="d-flex justify-content-center small text-warning mb-2">
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                </div>
                                                <span class="text-muted text-decoration-line-through">$20.00</span>
                                                $18.00
                                            </div>
                                        </div>
                                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col mb-5">
                                    <div class="card h-100">
                                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        <div class="card-body p-4">
                                            <div class="text-center">
                                                <h5 class="fw-bolder">Special Item</h5>
                                                <div class="d-flex justify-content-center small text-warning mb-2">
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                </div>
                                                <span class="text-muted text-decoration-line-through">$20.00</span>
                                                $18.00
                                            </div>
                                        </div>
                                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col mb-5">
                                    <div class="card h-100">
                                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        <div class="card-body p-4">
                                            <div class="text-center">
                                                <h5 class="fw-bolder">Special Item</h5>
                                                <div class="d-flex justify-content-center small text-warning mb-2">
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                    <div class="bi-star-fill"></div>
                                                </div>
                                                <span class="text-muted text-decoration-line-through">$20.00</span>
                                                $18.00
                                            </div>
                                        </div>
                                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example">
                          <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="blank0.html">이전</a></li>
                            <li class="page-item"><a class="page-link" href="blank0.html">1</a></li>
                            <li class="page-item"><a class="page-link" href="blank0.html">2</a></li>
                            <li class="page-item"><a class="page-link" href="blank0.html">3</a></li>
                            <li class="page-item"><a class="page-link" href="blank0.html">다음</a></li>
                          </ul>
                        </nav>
                    </section>
                </div>

            </div>
            <Footer/>
        </div>
        );
}

export default FireFighter;

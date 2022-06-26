import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sb-admin-2.min.css';
import Footer from '../Footer/footer';
import HeaderNav from '../Header/HeaderNav';

function ContentBody() {
  return (
    <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
                <HeaderNav/>
                <div class="container-fluid">
                    <section class="py-5">
                        <div class="container px-4 px-lg-5 mt-5">
                          <div class="container">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                              <div class="container-fluid">
                                <a class="navbar-brand" href="#">공무원</a>
                              </div>
                            </nav>
                          </div>
                          <ul class="nav justify-content-end">
                          <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">경찰</a>
                          </li>
                          <li class="nav-item">
                          <a class="nav-link" href="#">소방</a>
                          </li>
                          <li class="nav-item">
                          <a class="nav-link" href="#">행정</a>
                          </li>
                          <li class="nav-item">
                          <a class="nav-link" href="#">질문 & 답변</a>
                          </li>
                          </ul>
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
                            <div class="container">
                              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div class="container-fluid">
                                  <a class="navbar-brand" href="#">자격증</a>
                                </div>
                              </nav>
                            </div>
                            <ul class="nav justify-content-end">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">자격증</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">질문 & 답변</a>
                            </li>
                            </ul>
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
                              <div class="container">
                                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                  <div class="container-fluid">
                                    <a class="navbar-brand" href="#">개발</a>
                                  </div>
                                </nav>
                              </div>
                              <ul class="nav justify-content-end">
                              <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="#">디자인</a>
                              </li>
                              <li class="nav-item">
                              <a class="nav-link" href="#">프론트</a>
                              </li>
                              <li class="nav-item">
                              <a class="nav-link" href="#">백엔드</a>
                              </li>
                              <li class="nav-item">
                              <a class="nav-link" href="#">질문 & 답변</a>
                              </li>
                              </ul>
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
                                <div class="container">
                                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                    <div class="container-fluid">
                                      <a class="navbar-brand" href="#">외국어</a>
                                    </div>
                                  </nav>
                                </div>
                                <ul class="nav justify-content-end">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">중국어</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">일본어</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">영어</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">질문 & 답변</a>
                                </li>
                                </ul>
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
                                  <div class="container">
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                      <div class="container-fluid">
                                        <a class="navbar-brand" href="#">면접</a>
                                      </div>
                                    </nav>
                                  </div>
                                  <ul class="nav justify-content-end">
                                  <li class="nav-item">
                                  <a class="nav-link active" aria-current="page" href="#">대기업</a>
                                  </li>
                                  <li class="nav-item">
                                  <a class="nav-link" href="#">유학</a>
                                  </li>
                                  <li class="nav-item">
                                  <a class="nav-link" href="#">질문 & 답변</a>
                                  </li>
                                  </ul>
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
                    </section>

                </div>
            </div>
            <Footer/>
    </div>
    );
}

export default ContentBody;

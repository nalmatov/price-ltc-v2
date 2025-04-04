import Table, { TableProps } from '@/components/Table';
import Head from "next/head";
import Script from 'next/script';


export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.BASE_API}/api/ltc-exchanges`);
    const currencies = await res.json();
  
    return {
      props: {
        initialCurrencies: currencies.data,
        initialSort: 0,
        initialSortValue: 'invert',
        BASE_API: process.env.BASE_API,
      },
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      initialCurrencies: [],
      initialSort: 0,
      initialSortValue: 'invert',
      BASE_API: process.env.BASE_API,
    },
  }
}

export default function Home({ initialCurrencies, BASE_API }: TableProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Buy Litecoin (LTC) in vetted exchangers</title>
        <meta name="description" content="Our monitoring of exchanges will help you choose the most favorable and reliable online
        exchange rate among all popular exchanges." />
        <link href="https://ltc-rate.com/assets/css/fonts.css@2.css" rel="stylesheet" />
        <link href="https://ltc-rate.com/assets/css/animate.min.css@2.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://ltc-rate.com/assets/css/dataTables.bootstrap5.min.css"/>
        <link href="https://ltc-rate.com/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://ltc-rate.com/assets/css/styles.css@2.css" rel="stylesheet" />
        <link rel="shortcut icon" href="https://ltc-rate.com/assets/img/favicon.svg" type="image/x-icon" />
        <link rel="icon" href="https://ltc-rate.com/assets/img/favicon.svg@1" type="image/x-icon" />
      </Head>
      <div>
        <header>
          <div className="header-info animate__animated animate__fadeInDown">
            <div className="container h-100">
              <div className="user-info">
                <div className="hi-start">
                  <p className="wth-icon">
                    <img src="https://ltc-rate.com/assets/img/icons/number.svg" />Number of exchanges:
                    <b>47</b>
                  </p>
                  <p className="wth-icon">
                    <img src="https://ltc-rate.com/assets/img/icons/exchange.svg" />Average cost:
                    <b id="h-course">Loading..</b>
                  </p>
                </div>
                <div className="hi-end">
                  <a href="mailto:info@ltc-rate.com">info@ltc-rate.com</a>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Offcanvas navbar large">
            <div className="container">
              <a className="navbar-brand d-block d-lg-none" href="index.html"><img src="https://ltc-rate.com/assets/img/logo.svg" alt="Limanode" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                    <a className="navbar-brand" href="index.html"><img src="https://ltc-rate.com/assets/img/logo.svg" alt="Limanode" /></a>
                  </h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                    <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                    <li className="nav-item "><a className="nav-link" href="about.html">About us</a></li>
                    <li className="nav-item"><a className="nav-link" href="index.html#exchanges">Exchanges</a></li>
                    <li className="d-none d-lg-block"><a className="nav-link" href="index.html"><img src="https://ltc-rate.com/assets/img/logo.svg"/></a></li>
                    <li className="nav-item "><a className="nav-link" href="faq.html">FAQ</a></li>
                    <li className="nav-item "><a className="nav-link" href="terms.html">Rules</a></li>
                    <li className="nav-item "><a className="nav-link" href="contacts.html">Contacts</a></li>
                                </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
          
    <main>
      <section className="test">
          <div className="container mt-4">
              <div className="row">
                  {/*<!-- Левый большой блок -->*/}
                  <div className="col-lg-8 col-md-12 mb-4">
                              <div className="article">
                                  <div className="section-title">
                                      <h2 id="course">Loading..</h2>
                                      {/*<!-- <p className="mt-1 wth-icon" id="procent"></p> -->*/}
                                  </div>
                                  <div className="graph-block mt-3">
                                      <canvas id="chart" height="280"></canvas>
                                  </div>
                              </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                      <div className="article mb-4">
                          <p>Our directory ranks offering vetted licensed exchangers for safe transactions. We monitor exchange rates across these platforms in real time, allowing you to select the most cost-effective options with the best prices. Whether you{"'"}re a beginner or an experienced trader, you can find the perfect exchange to suit your needs.</p>
                      </div>
                      <div className="article">
                          <div className="article-cols">
                              <div className="ac-col">
                                  <p>Market cap</p>
                                  <p>$9.92B</p>
                              </div>
                              <div className="ac-col">
                                  <p>Circulating supply</p>
                                  <p>75,477,705 LTC</p>
                              </div>
                              <div className="ac-col">
                                  <p>Max supply</p>
                                  <p>84,000,000 LTC</p>
                              </div>
                              <div className="ac-col">
                                  <p>24h trading volume</p>
                                  <p>$2.38B</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="sec-def markets" id="exchanges">
        <div className="container">
          <div>
            <div className="row">
              <div className="section-title">
                <h2>LTC Markets</h2>
              </div>
            </div>
            <div className="table-responsive no-scrollbar">
              <Table initialCurrencies={initialCurrencies} BASE_API={BASE_API}/>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sdr mt-5">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-8 text-top">
                      <div className="site-desc">
                          <h2><span>Live LTC/USDT</span> rates,<br/>
                          and Exchange Rankings</h2>
                          <p className="mt-5">
                              Stay updated with real-time Ripple to USDT prices and track the latest market trends effortlessly. Our interactive price
      charts give you detailed insights into Ripple’s performance over time. Monitor the market cap, trading volume, and
      price fluctuations to make informed investment decisions. Whether you’re a seasoned trader or a beginner, we
      provide the tools you need to analyze the market with confidence. Keep an eye on live data and seize opportunities
      in the fast-moving cryptocurrency world. Your journey to smarter trading starts here!
                            </p>
                      </div>
                  </div>
                  <div className="col-lg-4 image-bottom">
                      <img className="img-LTC mt-5" style={{ marginBottom: '3rem' }} src="https://ltc-rate.com/assets//img/LTC_right.svg" />
                  </div>
              </div>
          </div>
      </section>
    </main>
      <footer className="footer mt-auto py-3">
          <div className="container">
              <div className="row justify-content-center justify-content-lg-start text-center text-lg-start py-5">
                  <div className="col-lg-5 mb-3">
                      <div className="pe-0 pe-lg-5">
                          <a href="index.html" className="d-flex align-items-center mb-3 justify-content-center justify-content-lg-start">
                              <img src="https://ltc-rate.com/assets//img/logo_footer.svg"/>
                          </a>
                          <p className="text-ln-main mw-copy">
                              © 2025, ltc-rate.com
                              — cryptocurrency<br/> exchange monitoring
                          </p>
                      </div>
                  </div>
                  <div className="col-lg-2 mb-3">
                      <h5>Useful</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item mb-2">
                              <a href="about.html" className="nav-link p-0">About Us</a>
                          </li>
                          <li className="nav-item mb-2">
                              <a href="terms.html" className="nav-link p-0">Rules</a>
                          </li>
                          <li className="nav-item mb-2">
                              <a href="faq.html" className="nav-link p-0">FAQ</a>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-3 mb-3">
                      <h5>Additionally</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item mb-2">
                              <a href="privacy.html" className="nav-link p-0">Privacy policy</a>
                          </li>
                          <li className="nav-item mb-2">
                              <a href="contacts.html" className="nav-link p-0">Contact Us</a>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-2 mb-3">
                      <h5>Contacts</h5>
                      <ul className="nav flex-column">
                          <li className="nav-item mb-2">
                              <a href="mailto:info@ltcrate.com" className="nav-link p-0">info@ltc-rate.com</a>
                          </li>
                          <li className="nav-item mb-2">
                              <a href="mailto:support@ltcrate.com" className="nav-link p-0">support@ltc-rate.com</a>
                          </li>
                          <li className="nav-item mb-2">
                              <a href="mailto:partners@ltcrate.com" className="nav-link p-0">partners@ltc-rate.com</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
      <Script src="https://ltc-rate.com/assets//js/bootstrap.bundle.min.js"></Script>
      <Script src="https://ltc-rate.com/assets//js/jquery-3.5.1.min.js"></Script>
      <Script src="https://ltc-rate.com/assets//js/dataTables.min.js"></Script>
      <Script src="https://ltc-rate.com/assets//js/dataTables.bootstrap5.min.js"></Script>
      <Script src="https://ltc-rate.com/assets//js/interaction.js"></Script>
      <Script src="https://ltc-rate.com/assets//js/chart.js"></Script>
      <Script src="https://ltc-rate.com/assets//js/main.js"></Script>
      </div>
    </>
  );
}

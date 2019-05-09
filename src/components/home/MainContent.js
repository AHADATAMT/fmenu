// @ts-nocheck
import React, { Component } from 'react'
import featureIcon01 from './src/images/feature-icon-01.svg'
import featureIcon02 from './src/images/feature-icon-02.svg'
import featureIcon03 from './src/images/feature-icon-03.svg'
import featureIcon04 from './src/images/feature-icon-04.svg'
import featureIcon05 from './src/images/feature-icon-05.svg'
import featureIcon06 from './src/images/feature-icon-06.svg'


export default class MainContent extends Component {
  render() {
    return (
        <main>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
						<div className="hero-copy">
	                        <h1 className="hero-title mt-0">fMenu</h1>
	                        <p className="hero-paragraph">The fastest way to process orders and accept payments </p>
	                        <div className="hero-cta"><a className="button button-primary" href="#">Register now</a><a className="button" href="#">Get in touch</a></div>
						</div>
						<div className="hero-figure anime-element">
							<svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
								<rect width="528" height="396" style={{"fill": "transparent"}}/>
							</svg>
							<div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
							<div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
							<div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
							<div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
							<div className="hero-figure-box hero-figure-box-05"></div>
							<div className="hero-figure-box hero-figure-box-06"></div>
							<div className="hero-figure-box hero-figure-box-07"></div>
							<div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
							<div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
							<div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
						</div>
                    </div>
                </div>
            </section>

            <section className="features section">
                <div className="container">
					<div className="features-inner section-inner has-bottom-divider">
                        <div className="features-wrap">
                            <div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
										<img src={featureIcon01} alt="Feature 01" />
                                    </div>
                                    <h4 className="feature-title mt-24">Be Productive</h4>
                                    <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
							<div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
										<img src={featureIcon02} alt="Feature 02" />
                                    </div>
                                    <h4 className="feature-title mt-24">Be Productive</h4>
                                    <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
										<img src={featureIcon03} alt="Feature 03" />
                                    </div>
                                    <h4 className="feature-title mt-24">Be Productive</h4>
                                    <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
										<img src={featureIcon04} alt="Feature 04" />
                                    </div>
                                    <h4 className="feature-title mt-24">Be Productive</h4>
                                    <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
							<div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
										<img src={featureIcon05} alt="Feature 05" />
                                    </div>
                                    <h4 className="feature-title mt-24">Be Productive</h4>
                                    <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div className="feature text-center is-revealing">
                                <div className="feature-inner">
                                    <div className="feature-icon">
										<img src={featureIcon06} alt="Feature 06" />
                                    </div>
                                    <h4 className="feature-title mt-24">Be Productive</h4>
                                    <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing section">
                <div className="container-sm">
                    <div className="pricing-inner section-inner">
                        <div className="pricing-header text-center">
                            <h2 className="section-title mt-0">Unlimited for all</h2>
                            <p className="section-paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                        </div>
						<div className="pricing-tables-wrap">
                            <div className="pricing-table">
                                <div className="pricing-table-inner is-revealing">
                                    <div className="pricing-table-main">
                                        <div className="pricing-table-header pb-24">
                                            <div className="pricing-table-price"><span className="pricing-table-price-currency h2">$</span><span className="pricing-table-price-amount h1">49</span><span className="text-xs">/month</span></div>
                                        </div>
										<div className="pricing-table-features-title text-xs pt-24 pb-24">What you will get</div>
                                        <ul className="pricing-table-features list-reset text-xs">
                                            <li>
                                                <span>Lorem ipsum dolor sit nisi</span>
                                            </li>
                                            <li>
                                                <span>Lorem ipsum dolor sit nisi</span>
                                            </li>
                                            <li>
                                                <span>Lorem ipsum dolor sit nisi</span>
                                            </li>
											<li>
												<span>Lorem ipsum dolor sit nisi</span>
											</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-table-cta mb-8">
                                        <a className="button button-primary button-shadow button-block" href="#">Pre order now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

			<section className="cta section">
				<div className="container">
					<div className="cta-inner section-inner">
						<h3 className="section-title mt-0">Still not convinced on buying?</h3>
						<div className="cta-cta">
							<a className="button button-primary button-wide-mobile" href="#">Get in touch</a>
						</div>
					</div>
				</div>
			</section>
        </main>
    )
  }
}

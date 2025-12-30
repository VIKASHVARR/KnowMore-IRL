import ClientScript from './ClientScript';

export default function Home() {
  return (
    <>
      <ClientScript />
      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="logo.png" alt="KnowMoreIRL Logo" className="logo-image" />
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#courses" className="nav-link">Courses</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button className="btn-primary">Get Started</button>
          <button className="mobile-menu-toggle" id="mobileMenuToggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container">
          <div className="hero-content reveal">
            <div className="hero-badge">🚀 Welcome to the Future of Learning</div>
            <h1 className="hero-title">
              Learn. Grow. <span className="gradient-text">Innovate.</span>
            </h1>
            <p className="hero-subtitle">
              Unlock your potential with cutting-edge courses, hands-on projects, and a community that empowers
              you to turn errors into expertise.
            </p>
            <div className="hero-cta">
              <button className="btn-primary btn-large">Start Learning</button>
              <button className="btn-secondary btn-large">Explore Courses</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Learners</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Courses</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">Transforming Learning Into Mastery</h2>
            <p className="section-subtitle">
              We believe that every mistake is a stepping stone to success. Our platform is designed to help you
              learn from errors and grow into an expert.
            </p>
          </div>
          <div className="about-content">
            <div className="about-card reveal">
              <div className="card-icon">🎯</div>
              <h3>Goal-Oriented Learning</h3>
              <p>Clear objectives and structured paths help you achieve your learning goals faster and more
                efficiently.</p>
            </div>
            <div className="about-card reveal">
              <div className="card-icon">💡</div>
              <h3>Ask Unlimited Questions</h3>
              <p>Our community thrives on curiosity. Get answers from experts and peers whenever you need them.
              </p>
            </div>
            <div className="about-card reveal">
              <div className="card-icon">🤝</div>
              <h3>Inclusive Community</h3>
              <p>Everyone is welcome here. We foster a supportive environment where all learners can thrive.</p>
            </div>
            <div className="about-card reveal">
              <div className="card-icon">🔥</div>
              <h3>Challenge Yourself</h3>
              <p>Don't shy away from difficult topics. Embrace challenges and emerge stronger on the other side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Premium Learning Features</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-visual">
                <div className="feature-icon">📚</div>
              </div>
              <div className="feature-content">
                <h3>Comprehensive Curriculum</h3>
                <p>Access a wide range of courses covering everything from basics to advanced topics.</p>
              </div>
            </div>
            <div className="feature-card reveal">
              <div className="feature-visual">
                <div className="feature-icon">🎓</div>
              </div>
              <div className="feature-content">
                <h3>Expert Instructors</h3>
                <p>Learn from industry professionals with years of real-world experience.</p>
              </div>
            </div>
            <div className="feature-card reveal">
              <div className="feature-visual">
                <div className="feature-icon">⚡</div>
              </div>
              <div className="feature-content">
                <h3>Hands-On Projects</h3>
                <p>Build real projects to solidify your understanding and showcase your skills.</p>
              </div>
            </div>
            <div className="feature-card reveal">
              <div className="feature-visual">
                <div className="feature-icon">🏆</div>
              </div>
              <div className="feature-content">
                <h3>Certifications</h3>
                <p>Earn recognized certificates to boost your career and validate your expertise.</p>
              </div>
            </div>
            <div className="feature-card reveal">
              <div className="feature-visual">
                <div className="feature-icon">🌐</div>
              </div>
              <div className="feature-content">
                <h3>Global Community</h3>
                <p>Connect with learners worldwide and expand your professional network.</p>
              </div>
            </div>
            <div className="feature-card reveal">
              <div className="feature-visual">
                <div className="feature-icon">🔄</div>
              </div>
              <div className="feature-content">
                <h3>Lifetime Access</h3>
                <p>Once enrolled, enjoy unlimited access to course materials forever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses" id="courses">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Popular Courses</span>
            <h2 className="section-title">Start Your Journey Today</h2>
          </div>
          <div className="courses-grid">
            <div className="course-card reveal">
              <div className="course-image" style={{ background: 'linear-gradient(135deg, #003D82 0%, #0052B4 100%)' }}>
                <span className="course-badge">Bestseller</span>
              </div>
              <div className="course-content">
                <h3>Full-Stack Web Development</h3>
                <p>Master HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp.</p>
                <div className="course-meta">
                  <span className="course-duration">⏱️ 12 weeks</span>
                  <span className="course-level">📊 Beginner</span>
                </div>
                <button className="btn-course">Enroll Now</button>
              </div>
            </div>
            <div className="course-card reveal">
              <div className="course-image" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)' }}>
                <span className="course-badge">New</span>
              </div>
              <div className="course-content">
                <h3>Data Science & AI</h3>
                <p>Dive into machine learning, deep learning, and AI with Python and TensorFlow.</p>
                <div className="course-meta">
                  <span className="course-duration">⏱️ 16 weeks</span>
                  <span className="course-level">📊 Advanced</span>
                </div>
                <button className="btn-course">Enroll Now</button>
              </div>
            </div>
            <div className="course-card reveal">
              <div className="course-image" style={{ background: 'linear-gradient(135deg, #003D82 0%, #FF6B00 100%)' }}>
                <span className="course-badge">Trending</span>
              </div>
              <div className="course-content">
                <h3>Mobile App Development</h3>
                <p>Build stunning iOS and Android apps using React Native and Flutter.</p>
                <div className="course-meta">
                  <span className="course-duration">⏱️ 10 weeks</span>
                  <span className="course-level">📊 Intermediate</span>
                </div>
                <button className="btn-course">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <h2>Ready to Transform Your Future?</h2>
            <p>Join thousands of learners who have already started their journey to success.</p>
            <button className="btn-primary btn-large">Get Started Now</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Connect</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h3>Have Questions?</h3>
              <p>We're here to help! Reach out to us and we'll get back to you as soon as possible.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">hello@knowmoreirl.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-label">Location</div>
                    <div className="contact-value">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form reveal">
              <div className="form-group">
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea id="message" rows={5} placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn-primary btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-logo">Know<span className="highlight">More</span>IRL</h3>
              <p>Learning That Works IRL - Empowering learners worldwide to turn mistakes into mastery.</p>
              <div className="social-links">
                <a href="#" className="social-link">𝕏</a>
                <a href="#" className="social-link">in</a>
                <a href="#" className="social-link">f</a>
                <a href="#" className="social-link">ig</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 KnowMoreIRL. All rights reserved. Built with ❤️ for learners.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
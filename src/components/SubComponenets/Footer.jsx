const Footer = () => {
  return (
    <div className="bg-footer text-white p-4 mt-auto">
      <div className="container">
        <div className="row">
          
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="flex gap-4">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <ul>
              <li><i className="fa fa-map-marker"></i>D. Y. Patil Vidyanagar, Kasaba Bavada,
Kolhapur, 416006 , Maharashtra, India.</li>
              <li><i className="fa fa-phone"></i> (0231) 2991436</li>
              <li><i className="fa fa-envelope"></i> info@dypatilkolhapur.org</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        &copy; Copyright. All rights reserved. D. Y. PATIL EDUCATION SOCIETY (DEEMED UNIVERSITY), KOLHAPUR by 
      </div>
    </div>
  )
}

export default Footer
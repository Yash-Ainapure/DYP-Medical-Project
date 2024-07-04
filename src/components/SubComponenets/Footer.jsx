const Footer = () => {
  return (
    <div className="bg-neutral-800 text-white  mt-auto">
      <div className="container m-4 py-2">
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
            <h3 className="m-2">Contact Us</h3>
            <ul>
              <li><i className="fa fa-map-marker m-2"></i> D. Y. Patil Vidyanagar, Kasaba Bavada,
Kolhapur, 416006 , Maharashtra, India.</li>
              <li><i className="fa fa-phone m-2"></i> (0231) 2991436</li>
              <li><i className="fa fa-envelope m-2"></i> info@dypatilkolhapur.org</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center  bg-neutral-900  p-3">
        &copy; Copyright. All rights reserved. by D. Y. PATIL EDUCATION SOCIETY (DEEMED UNIVERSITY), KOLHAPUR  
      </div>
    </div>
  )
}

export default Footer
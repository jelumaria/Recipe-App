import React from 'react'


const Footer = () => {
  return (
    <div style={{height:'200px'}} className='mt-5 container w-100'>
      <div className="d-flex justify-content-between">
        {/* intro */}
        <div style={{width:'400px'}}>
          <h3>              <i className="fa-solid fa-utensils me-3 text-light"></i>
          Taste Tales</h3>
          
        </div>

        {/* contact */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className="d-flex">
            <input placeholder='enter your email!' type="text" className="form-control me-2" />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3">
           
          <a href="" style={{textDecoration:'none',color:'white'}} target= '_blank'> <i className="fa-brands fa-twitter"></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}} target= '_blank'> <i className="fa-brands fa-linkedin"></i></a> 
          <a href="" style={{textDecoration:'none',color:'white'}} target= '_blank'> <i className="fa-brands fa-facebook"></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}} target= '_blank'> <i className="fa-brands fa-instagram"></i></a>
          <a href="" style={{textDecoration:'none',color:'white'}} target= '_blank'> <i className="fa-brands fa-youtube"></i></a>
          </div> 
        </div>
      </div>
      <p className="text-center mt-3">Copyright &copy; July 2024 Batch, Recipe App. Built with React</p>
    </div>
  )
}

export default Footer
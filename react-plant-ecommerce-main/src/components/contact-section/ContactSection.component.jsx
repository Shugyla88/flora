import React from 'react'

const ContactSection = () => {
  return (
    <div className='p-5'>
    <div className='row'>
    <div className='mb-4'>
            <h1>Contact Us</h1>
        </div>
        <div className='mb-5'>
        <p><i className="fas fa-home me-3"></i> 123, ABAI, Almaty</p>
            <p>
                <i className="fas fa-envelope me-3"></i>
                flora@gmail.com
            </p>
            <p><i className="fas fa-phone me-3"></i> 8 776 291 1747</p>
            <p><i className="fas fa-print me-3"></i> 8 771 131 8350</p>
        </div>
        
    </div>
    <div className='row '>
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A37bada1dd4aecbec5b031d0430aea70d120e24fec50cf51a3d3d68fc3d23d034&amp;source=constructor"
            width="500" height="400" frameBorder="0"></iframe>
    </div>
    </div>
  )
}

export default ContactSection

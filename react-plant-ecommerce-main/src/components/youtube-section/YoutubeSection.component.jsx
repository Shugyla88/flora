import React from 'react'

const YoutubeSection = () => {
  return (
    <div className='row justify-content-center'>
        <h3>HOW TO CARE FOR PLANTS</h3>
      <hr/>
        <div className='row'>
            <div className='col-lg-6 col-sm-12 m-lg-0 m-sm-5'>
                <div className="ratio ratio-16x9">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/J1LW1Nz0pd4"
                            title="PLANT CARE » 7 mistakes to avoid 🪴" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12 m-lg-0 m-sm-5'>
                <div className="ratio ratio-16x9">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/LZhnCxG5c6s"
                            title="HOUSEPLANT CARE TIPS FOR BEGINNERS » + printable guide" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YoutubeSection
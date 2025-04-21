import React from 'react';

const Location = () => {
    return (
        <div>
             <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.2723597553468!2d89.92423927606207!3d24.26721576873799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdf9658f57f3bb%3A0x586c81b1de760b9f!2sMathmozo%20IT!5e0!3m2!1sen!2sbd!4v1730794109748!5m2!1sen!2sbd'
              width='100%'
              height='100%'
              className='rounded-lg'
              loading='lazy'
              allowFullScreen
            ></iframe>
        </div>
    );
}

export default Location;

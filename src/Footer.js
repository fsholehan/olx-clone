import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <img src="https://statics.olx.co.id/external/base/img/phone-app.webp" alt="" />
        <div className="footer__topInfo">
          <h1>COBA APLIKASI OLX</h1>
          <h3>Beli, jual, dan temukan apa saja menggunakan aplikasi di handphone Anda.</h3>
        </div>
        <div className="footer__download">
          <h3>DOWNLOAD APLIKASI OLX HARI INI</h3>
          <div className="footer__downloadGet">
            <img src="https://statics.olx.co.id/external/base/img/appstore_2x.webp" alt="" />
            <img src="https://statics.olx.co.id/external/base/img/playstore_2x.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="footer__sidebar">
        <div className="footer__category">
          <h3 className="footer__heading">Kategori</h3>
          <ul className="footer__lists">
            <li>Mobil bekas</li>
            <li>Rumah & Apartemen</li>
            <li>Motor bekas</li>
            <li>Handphone</li>
          </ul>
        </div>
        <div className="footer__search">
          <h3 className="footer__heading">Kategori</h3>
          <ul className="footer__lists">
            <li>Mobil bekas</li>
            <li>Rumah & Apartemen</li>
            <li>Motor bekas</li>
            <li>Handphone</li>
          </ul>
        </div>
        <div className="footer__about">
          <h3 className="footer__heading">Olx Indonesia</h3>
          <ul className="footer__lists">
            <li>OLX Karir</li>
            <li>OLX News</li>
            <li>Jual Mobil instan</li>
            <li>Pusat Kredit dan Gadai</li>
          </ul>
        </div>
        <div className="footer__about">
          <h3 className="footer__heading">Olx Indonesia</h3>
          <ul className="footer__lists">
            <li>OLX Karir</li>
            <li>OLX News</li>
            <li>Jual Mobil instan</li>
            <li>Pusat Kredit dan Gadai</li>
          </ul>
        </div>
        <div className="footer__follow">
          <h3>Ikuti kami</h3>
          <div className="footer__icon">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
      <div className="footer__end">
        <p><span className="footer__span">Negara lain</span> India - South Africa - Pakistan</p>
        <p><span className="footer__span">Iklan Baris Gratis Indonesia</span> . © 2006-2021 OLX</p>
      </div>
    </div>
  )
}

export default Footer;

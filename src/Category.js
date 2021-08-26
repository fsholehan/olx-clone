import React from 'react';
import './Category.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Category() {
  return (
    <div className="category">
      <div class="category__left">
        <h3>Semua Kategori</h3> <ExpandMoreIcon fontSize="large" />
      </div>
      <ul class="category__right">
        <li>Mobil Bekas</li>
        <li>Motor Bekas</li>
        <li>Poperti</li>
        <li>Handphone</li>
        <li>Jasa & Lowongan Kerja</li>
        <li>TV & Audio, Video</li>
      </ul>
    </div>
  )
}

export default Category

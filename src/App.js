import './App.css';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Category />
      <img src="https://statics.olx.co.id/external/base/img/hero_bg_id.jpg" alt="" />
      <div className="app__body">
        <h2>Rekomendasi Baru</h2>
        <div class="app__card">
          <Card
            image="https://apollo-singapore.akamaized.net/v1/files/55igj623opwz-ID/image;s=300x600;q=60"
            price="Rp 400.000.000"
            year="2013"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, cum!"
            location="Sukoharjo"
            time="21 Januari"
          />
          <Card
            image="https://apollo-singapore.akamaized.net/v1/files/55igj623opwz-ID/image;s=300x600;q=60"
            price="Rp 400.000.000"
            year="2013"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, cum!"
            location="Sukoharjo"
            time="21 Januari"
          />
          <Card
            image="https://apollo-singapore.akamaized.net/v1/files/55igj623opwz-ID/image;s=300x600;q=60"
            price="Rp 400.000.000"
            year="2013"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, cum!"
            location="Sukoharjo"
            time="21 Januari"
          />
          <Card
            image="https://apollo-singapore.akamaized.net/v1/files/55igj623opwz-ID/image;s=300x600;q=60"
            price="Rp 400.000.000"
            year="2013"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, cum!"
            location="Sukoharjo"
            time="21 Januari"
          />
          <Card
            image="https://apollo-singapore.akamaized.net/v1/files/55igj623opwz-ID/image;s=300x600;q=60"
            price="Rp 400.000.000"
            year="2013"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, cum!"
            location="Sukoharjo"
            time="21 Januari"
          />
          <Card
            image="https://apollo-singapore.akamaized.net/v1/files/55igj623opwz-ID/image;s=300x600;q=60"
            price="Rp 400.000.000"
            year="2013"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, cum!"
            location="Sukoharjo"
            time="21 Januari"
          />
          <Card
            image="https://apollo-singapore.akamaized.net/v1/files/55igj623opwz-ID/image;s=300x600;q=60"
            price="Rp 400.000.000"
            year="2013"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, cum!"
            location="Sukoharjo"
            time="21 Januari"
          />
          <Card
            image="https://apollo-singapore.akamaized.net/v1/files/55igj623opwz-ID/image;s=300x600;q=60"
            price="Rp 400.000.000"
            year="2013"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, cum!"
            location="Sukoharjo"
            time="21 Januari"
          />
        </div>
        <div class="app__pagination">
          <button>Muat lainnya</button>
        </div>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

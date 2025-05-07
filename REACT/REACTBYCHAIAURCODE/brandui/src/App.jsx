
import './App.css';

const App = () => {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src=" /vite.svg" alt="logo" />
        </div>
         <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>

         </ul>

       <button>Login</button>
      </nav>
      {/* hero section */}
       <div className='hero'>
       <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOU WITH OUR SHOES</p>
            <div className="hero-button">
                <button>Shop Now</button>
                <button>Categoray</button>
            </div>
            <div className="shopping">
                <p>Also Avalible On</p>
                <div className="brand-icon">
                    <img src="/react.svg" alt="react" />
                    <img src="/vite.svg" alt="vite" />
                </div>
            </div>
       </div>
       <div className="hero-img">
            <img src="/image.png" alt="" />
            </div>
       </div>
    </div>
  );
}
// tum isko do cmponet bana ke hero and nav yaha render kar sakte hai
export default App;

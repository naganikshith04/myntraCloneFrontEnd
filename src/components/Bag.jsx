import React from 'react'
import Header from './Header';

function Bag() {
  return (
    <div>
        <head>
            <title>Myntra Clone</title>
            <link rel="stylesheet" href="../css/index.css"/>
            <link rel="stylesheet" href="../css/bag.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
        <body>
            <Header />
            <main>
            <div className="bag-page">
                <div className="bag-items-container">
                </div>
                <div className="bag-summary">
                </div>

            </div>
            </main>
            <footer>
                <div className="footer_container">
                    <div className="footer_column">
                        <h3>ONLINE SHOPPING</h3>

                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Kids</a>
                        <a href="#">Home & Living</a>
                        <a href="#">Beauty</a>
                        <a href="#">Gift Card</a>
                        <a href="#">Myntra Insider</a>
                    </div>

                    <div className="footer_column">
                        <h3>ONLINE SHOPPING</h3>

                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Kids</a>
                        <a href="#">Home & Living</a>
                        <a href="#">Beauty</a>
                        <a href="#">Gift Card</a>
                        <a href="#">Myntra Insider</a>
                    </div>

                    <div className="footer_column">
                        <h3>ONLINE SHOPPING</h3>

                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Kids</a>
                        <a href="#">Home & Living</a>
                        <a href="#">Beauty</a>
                        <a href="#">Gift Card</a>
                        <a href="#">Myntra Insider</a>
                    </div>
                </div>
                <hr />

                <div className="copyright">
                    © 2023 www.myntra.com. All rights reserved.
                </div>
            </footer>
            <script src="../data/items.js"></script>
            <script src="../scripts/index.js"></script>
            <script src="../scripts/bag.js"></script>
        </body>
    </div>

  )
}

export default Bag;
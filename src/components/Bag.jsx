import React from 'react'
import Header from './Header';
import Footer from './Footer';

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
            <Footer />
            <script src="../data/items.js"></script>
            <script src="../scripts/index.js"></script>
            <script src="../scripts/bag.js"></script>
        </body>
    </div>

  )
}

export default Bag;
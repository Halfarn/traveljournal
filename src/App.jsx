// import data from "./data"
import Header from "./components/header"
import Cards from "./components/cards"
import data from "./data"
import Footer from "./components/footer"
export default function App() {
  const cards = data.map(item => {
    return (
      <Cards
      key={item.id}
      item={item}
      />
    )
  })


  return ( <div>
    <Header />
    <section className="cards-list">{cards}</section>
    <Footer />
  </div>)

}
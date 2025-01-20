import './App.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

function App() {
  const cardData = [
    { title: "Laptops", description: "This is a Macbook Pro M3" },
    { title: "Apple Iphone", description: "This is an Apple Iphone 16" },
    { title: "Nike Shoes", description: "These are Air max Shoes." },
    { title: "Sunglasses", description: "These are RayBan Sunglasses" },
  ];

  return (
    <>
      <h1>Hello from React + Vite</h1>
      <Navbar />
      <div style = {{display: 'flex', justifyContent: 'space-evenly'}}>
        <Card cardTitle={"Laptops"}/>
        <Card cardTitle={"Mobile"}/>
        <Card cardTitle={"Clothing"}/>
        <Card cardTitle={"Gifting"}/>
      </div>

      <div style = {{display: 'flex', justifyContent: 'space-evenly'}}>
        {
          cardData.map((item) => (
            <Card cardTitle={item.title} cardDescription={item.description} />
          ))
        }
      </div>
    </>
  )
}

export default App
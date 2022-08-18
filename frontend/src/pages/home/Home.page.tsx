import homePicture from '@noister/assets/home.png'

function Home() {
  return (
    <div className="flex bg-white h-screen p-4">
      <img className="mx-auto" src={homePicture} alt="home-img" />
    </div>
  )
}

export default Home

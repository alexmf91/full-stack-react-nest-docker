import homePicture from '../assets/home.png'

function Home() {
  return (
    <div className="flex bg-white h-screen p-4">
      <img className="mx-auto" src={homePicture} />
    </div>
  )
}

export default Home

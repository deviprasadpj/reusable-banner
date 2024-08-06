import BannerCardItem from './components/BannerCardItem'
import './App.css';

const bannerCardsList = [
  {
    uniqueId:1,
    headerText: "Our New Designs",
    description: "Get the designs developed by our in-house team all for yourself",
    className: "card-2",
  },
  {
    uniqueId:2,
    headerText: "Insiders",
    description: "Get the top class products for yourself with an extra off",
    className: "card-3",
  },
  {
    uniqueId:3,
    headerText: "The Seasons Latest",
    description: "Get the seasons all latest designs in a flick of your hand",
    className: "card-1",
  },
]
const App = () => (
  <div className='app-container'>
    <ul className='banners-card-list'>
      {bannerCardsList.map(eachItem => (
        <BannerCardItem bannerDetails = {eachItem} key={eachItem.uniqueId}/>
      ))}
    </ul>
  </div>
)
export default App;

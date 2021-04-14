import './Main.css'
import DashboardCard from './DashboardCard'
import Footer from './Footer'
import items from '../Data'
const Main = () => {
  return (
    <main>
      <div className='main__container'>
        <div className='card-handler'>
          {items.map((item) => (
            // <div key={item._id}>
            <DashboardCard
              key={item._id}
              title={item.title}
              number={item.number}
              image={item.image}
            />
            // </div>
          ))}
          {/* <DashboardCard title=' Students' number='1000' image='image' />
          <DashboardCard title=' Teachers' number='150' image='image1' />
          <DashboardCard
            title='Non-Teaching Staffs'
            number='20'
            image='image2'
          />
          <DashboardCard title=' Income' number='1200000' image='image3' />
          <DashboardCard
            title=' Salary Expenses'
            number='300000'
            image='image4'
          /> */}
        </div>

        {/* <DashboardCard/> */}
      </div>
      <Footer />
    </main>
  )
}

export default Main

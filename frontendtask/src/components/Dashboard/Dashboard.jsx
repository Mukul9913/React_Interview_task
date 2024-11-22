import React from 'react'
import StatCard from './StatCard'
import RevenueCharts from './RevenueCharts'
import ProfitChart from './ProfitChart'
import '../../style/Dashboard.css'
import EyeIcon from '../../assets/svgs/EyeIcon'
import CartIcon from '../../assets/svgs/CartIcon'
import ProductIcon from '../../assets/svgs/ProductIcon'
import UsersIcon from '../../assets/svgs/UsersIcon'
import UpIcon from '../../assets/svgs/UpIcon'
import DownIcon from '../../assets/svgs/DownIcon'

const Dashboard = () => {
  return (
    <>
     <div className="dashboard">
      <div className="stat-cards">
        <StatCard icon={<EyeIcon/>} title="Total views" value="$3,456K" change={0.43} changeIcon={<UpIcon/>} />
        <StatCard icon={<CartIcon/>} title="Total Profit" value="$45.2K" change={4.35} changeIcon={<UpIcon/>}/>
        <StatCard icon={<ProductIcon/>} title="Total Product" value="2.450" change={2.59} changeIcon={<UpIcon/>}/>
        <StatCard icon={<UsersIcon/>} title="Total Users" value="3.456" change={-0.95} changeIcon={<DownIcon/>}/>
      </div>
      <div className="charts">
        <RevenueCharts />
        <ProfitChart />
      </div>
    </div>
    </>
  )
}

export default Dashboard
import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox';
import RightSidebar from '../../components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName: "Aarya", lastName:"Sharma", email:"aaryasharma0401@gmail.com"};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
              <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || "Guest"}
              subtext="Access and Manage your Account and Transactions Efficiently"
              />
              <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={2345.50}
              />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:1230.50},{currentBalance:990.75}]}
        />
    </section>
  )
}

export default Home

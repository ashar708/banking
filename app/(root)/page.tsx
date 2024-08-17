import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox';
import RightSidebar from '../../components/RightSidebar';
import { getLoggedInUser } from '../../lib/ACTIONS/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
              <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.name || "Guest"}
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

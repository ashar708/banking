import React from 'react'
import HeaderBox from '../../../components/HeaderBox'
import { getLoggedInUser } from '../../../lib/ACTIONS/user.actions';
import { getAccounts } from '../../../lib/ACTIONS/bank.actions';
import BankCard from '../../../components/BankCard';

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({userId:loggedIn.$id});
  return (
    <section className='flex'>
      <div className='my-banks'>
        <HeaderBox title='My Bank Accounts' subtext='Effortesly manage your banking activities'/>
      </div>
      <div className='space-y-4'>
        <h2 className='header-2'>
          Your Cards
        </h2>
        <div className='flex flex-wrap gap-6'>
          {
            accounts && accounts.data.map((account:Account)=>(
              <BankCard key={account.id} account={account} userName={loggedIn?.firstName}/>
            ))
          }
        </div>
      </div> 
      
    </section>
  )
}

export default MyBanks

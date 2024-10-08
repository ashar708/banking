import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import {PlaidLinkOptions, usePlaidLink} from 'react-plaid-link';
import { createLinkToken, exchangePublicToken } from '../lib/ACTIONS/user.actions';
import Image from 'next/image';


const PlaidLink = ({user,variant}:PlaidLinkProps) => {
    const router = useRouter();
    const [token,setToken] = useState('');
    useEffect(()=>{
        const getTokenLink = async () => {
            const data = await createLinkToken(user);
            setToken(data?.linkToken);
        }
        getTokenLink();
    },[user])

    const onSuccess = useCallback(async (public_token:string) => {
        await exchangePublicToken({
            publicToken: public_token,
            user
        })
        router.push('/');
    },[user]);


    const config:PlaidLinkOptions = {
        token,
        onSuccess
    }
    const {open,ready} = usePlaidLink(config);
  return (
    <>
    {
        variant==="primary"? (
            <Button className='plaidlink-primary' onClick={() => open()} disabled={!ready}>
                Connect bank
            </Button>
        ) : variant=='ghost'? (
            <Button onClick={()=>open()} className='plaidlink-ghost' variant={"ghost"}>
                <Image
                src="/icons/connect-bank.svg"
                alt='connect bank'
                width={24}
                height={24}
                />
                <p className='hidden text-[16] font-semibold text-black-2 xl:block'>Connect bank</p>
            </Button>
        ) : (
            <Button onClick={()=>open()} className='plaidlink-default'>
                <Image
                src="/icons/connect-bank.svg"
                alt='connect bank'
                width={24}
                height={24}
                />
                <p className='text-[16] font-semibold text-black-2'>Connect bank</p>
            </Button>
        )
    }
    </>
  )
}

export default PlaidLink

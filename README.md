# Banking App Using NextJS - <br/><br/><br/>

![image](https://github.com/user-attachments/assets/26461ba6-cbcd-488e-b8eb-2ae1ac708afb)


The banking app helps the user connect to different banks and create an account using the dwolla and plaid sandbox.

Plaid is used to connect your bank accounts to various software and applications.
Dwolla which allows us to do Real-time payments.

This app utilises the NextJS Features like - 
1. Layouts and Pages (The folder structure)
2. Setting up database using Appwrite
3. Adding search and pagination
4. Mutating Data - API calls creating server side logic for signIn/Signup which is gets authenticated using appwrite by creating the client sessions.



## The Signup & Login Page - 

### The Signup Page - 

![image](https://github.com/user-attachments/assets/9be40018-af3b-477a-95d6-374d680e2c3c)

The types for each field of the form is checked using the type annotation property of typescript and we can validate that by using the zod - TypeScript-first schema validation with static type inference

### The Login Page - 

![image](https://github.com/user-attachments/assets/68c6f2c2-25a8-4170-a30c-07c985f7b118)

After logging in the user gets redirected to the dashboard - 

![image](https://github.com/user-attachments/assets/daecce05-0348-42c1-a743-a49c5e966d72)


After that we can start connecting our account to the banks by clicking on the <b>Connect Bank</b> button - 

We can connect to the bank using the plaid and we do that using API_KEYS - 

1. PLAID_CLIENT_ID
2. PLAID_SECRET
3. PLAID_ENV
4. PLAID_PRODUCTS
5. PLAID_COUNTRY_CODES

![image](https://github.com/user-attachments/assets/c2f6a79d-d9a0-4ab4-8589-f5a47d5021c0)

We can choose the bank of our Choice - 

![image](https://github.com/user-attachments/assets/adc08086-07ba-4454-bb28-b5a6537e3f41)

We choose the account which we need to connect to - 

![image](https://github.com/user-attachments/assets/a733afba-42f0-460d-9382-5db9c9bb123f)

After checking all the terms and conditions we get the successfull account linked message - 

![image](https://github.com/user-attachments/assets/3197a8f5-30b6-4a1d-8362-106b5709b699) 

After the accounts get linked we can do the transaction by typing in the transaction form and sending the money from one account to the other.


<br/><br/><br/><br/>


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.






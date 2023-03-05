import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'
import { Toaster } from 'react-hot-toast'

interface Props {
  tweets:Tweet[]
}


const Home = ({tweets}: Props) => {
  console.log(tweets)
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen h-1000 overflow-hidden ">
      <Head>
        <title>Twitter clone</title>
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwM0E5RjQiIGQ9Ik00MiwxMi40MjljLTEuMzIzLDAuNTg2LTIuNzQ2LDAuOTc3LTQuMjQ3LDEuMTYyYzEuNTI2LTAuOTA2LDIuNy0yLjM1MSwzLjI1MS00LjA1OGMtMS40MjgsMC44MzctMy4wMSwxLjQ1Mi00LjY5MywxLjc3NkMzNC45NjcsOS44ODQsMzMuMDUsOSwzMC45MjYsOWMtNC4wOCwwLTcuMzg3LDMuMjc4LTcuMzg3LDcuMzJjMCwwLjU3MiwwLjA2NywxLjEyOSwwLjE5MywxLjY3Yy02LjEzOC0wLjMwOC0xMS41ODItMy4yMjYtMTUuMjI0LTcuNjU0Yy0wLjY0LDEuMDgyLTEsMi4zNDktMSwzLjY4NmMwLDIuNTQxLDEuMzAxLDQuNzc4LDMuMjg1LDYuMDk2Yy0xLjIxMS0wLjAzNy0yLjM1MS0wLjM3NC0zLjM0OS0wLjkxNGMwLDAuMDIyLDAsMC4wNTUsMCwwLjA4NmMwLDMuNTUxLDIuNTQ3LDYuNTA4LDUuOTIzLDcuMTgxYy0wLjYxNywwLjE2OS0xLjI2OSwwLjI2My0xLjk0MSwwLjI2M2MtMC40NzcsMC0wLjk0Mi0wLjA1NC0xLjM5Mi0wLjEzNWMwLjk0LDIuOTAyLDMuNjY3LDUuMDIzLDYuODk4LDUuMDg2Yy0yLjUyOCwxLjk2LTUuNzEyLDMuMTM0LTkuMTc0LDMuMTM0Yy0wLjU5OCwwLTEuMTgzLTAuMDM0LTEuNzYxLTAuMTA0QzkuMjY4LDM2Ljc4NiwxMy4xNTIsMzgsMTcuMzIxLDM4YzEzLjU4NSwwLDIxLjAxNy0xMS4xNTYsMjEuMDE3LTIwLjgzNGMwLTAuMzE3LTAuMDEtMC42MzMtMC4wMjUtMC45NDVDMzkuNzYzLDE1LjE5Nyw0MS4wMTMsMTMuOTA1LDQyLDEyLjQyOSI+PC9wYXRoPgo8L3N2Zz4=" />
      </Head>
      <Toaster/>

      <main className='grid grid-cols-9'>

        {/* 
        
        Side Bar
        
        */}
        <Sidebar />

        {/*
        
        Feed
        
        */}
        <Feed tweets={tweets}/>

        {/*
        
        Widgets
        
        */}
        <Widgets />
      </main>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    }
  }
}
